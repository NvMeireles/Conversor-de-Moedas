const API_KEY = "e8af4d98ed23bac303b6381b"

async function buscarCotacao(moeda) {
    try {
        let url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/BRL`
        let resposta = await fetch(url)
        let dados = await resposta.json()

        if (dados.result !== "success") {
            throw new Error("Erro na API: " + dados["error-type"])
        }

        return dados.conversion_rates[moeda] || null 
    } catch (error) {
        console.error("Erro ao buscar cotação:", error)
        return null
    }
}

async function converte(){
    let numero = document.getElementById('num')
    let num = Number(numero.value)
    let resultado = document.getElementById('resultado')

    if (numero.value.length === 0 || num <= 0) {
        alert("Por favor, digite um número válido!")
        return
    }

    let moeda = ""
    if (document.getElementById('dolar').checked) {
        moeda = "USD"
    } else if (document.getElementById('euro').checked) {
        moeda = "EUR"
    } else if (document.getElementById('libra').checked) {
        moeda = "GBP"
    }
    else{
        window.alert("Selecione uma moeda para converter!")
        return
    }
     

    let taxa = await buscarCotacao(moeda)

    if (taxa === null) {
        resultado.innerHTML = "Erro ao obter a cotação!"
        return
    }

    let convertido = (num * taxa).toFixed(2)  
    resultado.innerHTML = `R$ ${num} equivalem a ${convertido} ${moeda}`
}


function clean(){
    document.getElementById('num').value = "" 
    document.getElementById('resultado').innerHTML = "Digite o valor, escolha a moeda e converta"
}
