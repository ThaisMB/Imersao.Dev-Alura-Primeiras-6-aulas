var precoDolar = 5.58;

var valorEmDolar=parseFloat(prompt("Qual o valor em dólares que você quer converter?"));

var valorEmReais = valorEmDolar*precoDolar;

alert(`O valor em reais é:\n R$ ${valorEmReais.toFixed(2)}`);