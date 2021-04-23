let verJogo = document.querySelector("#btn-jogar");
let verResultado = document.querySelector("#btn-verificar");
let resultado = document.querySelector("#resultado");
let nTentativas = 3;
let nPalpites = 0;
let nTentativasRestantes = 0;
let input = document.querySelector("#palpite");
let acabou = false;
let numeroMaquina;

function jogar() {
    acabou = false;
    nPalpites = 0;
    let jogo = document.querySelector("#jogo");
    numeroMaquina = sorteiaNumero();
    jogo.style.display = null;
    verJogo.style.display = "none";
    input.focus();
}

function sorteiaNumero() {
    numeroSorteado = parseInt(Math.random() * 100);
    alert(numeroSorteado);
    return numeroSorteado;
}

function verificar() {
    if (input.value == "" || input.value > 100 || input.value < 0) {
        alert("Digite um número válido para jogar!");
        return;
    }
    nPalpites += 1;
    nTentativasRestantes=nTentativas-nPalpites;
    mostrarResultado();
    input.value = "";
    input.focus();
    if (acabou == true) {
        setTimeout(() => {
            esconderJogo()
            nPalpites = 0;
            resultado.innerHTML = "";
        }, 3000);
    }
}

function sleep(milisegundos) {
    const data = Date.now();
    let dataAtual = null;
    do {
        dataAtual = Date.now();
    } while (dataAtual - data < milisegundos);
}

function mostrarResultado() {
    resultado.style.display = null;
    let html = "";
    if (input.value == numeroMaquina) {
        html = "<p>Você acertou! Seu sexto sentido está afiado!</p>";
        acabou = true;
    } else if (input.value != numeroMaquina && nPalpites < nTentativas) {
        html = "<p>Você errou! Concentre-se e tente novamente!</p><p>Você ainda tem "+ nTentativasRestantes +" tentativas!</p>"
    } else if ((input.value != numeroMaquina && nPalpites == nTentativas)) {
        html = "<p>Infelizmente você perdeu!</p>";
        acabou = true;
    }
    resultado.innerHTML = html;
}

function esconderJogo() {
    jogo.style.display = "none";
    verJogo.style.display = null;
}