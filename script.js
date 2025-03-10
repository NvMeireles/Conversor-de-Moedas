function converte(){
    let numero = document.getElementById('num');
    let num = Number(numero.value);
    let resultado = document.getElementById('resultado');

    if (numero.value.length === 0 || num < 1) {
        alert("Por favor, digite um número válido!");
        return;
    }

    let taxa = 0;
    let moeda = "";

    if (document.getElementById('dolar').checked) {
        taxa = 5.00; 
        moeda = "Dólares";
    } else if (document.getElementById('euro').checked) {
        taxa = 5.50;
        moeda = "Euros";
    } else if (document.getElementById('libra').checked) {
        taxa = 6.30;
        moeda = "Libras";
    } else if (document.getElementById('bitcoin').checked) {
        taxa = 250000; 
        moeda = "Bitcoins";
    } else {
        alert("Selecione uma moeda para converter!");
        return;
    }

    let convertido = (num / taxa).toFixed(2);
    resultado.innerHTML = `R$ ${num} equivalem a ${convertido} ${moeda}`;
}

function clean(){
    document.getElementById('num').value = "" 
    document.getElementById('resultado').innerHTML = "Digite o valor, escolha a moeda e converta"
}
