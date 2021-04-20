var jogador1 = {
    nome:"Thaís",
    vitorias:0,
    derrotas: 0,
    empates:0,
    pontos:0,
};

var jogador2 = {
    nome: "André",
    vitorias:0,
    derrotas: 0,
    empates:0,
    pontos:0,
};

function calculaPontos(jogadores){
    var  pontos = (jogadores.vitorias*3) + jogadores.empates;
    return pontos
};

calculaPontos(jogador1);
calculaPontos(jogador2);

var jogadores = [jogador1, jogador2];
exibeJogadoresNaTela(jogadores);

function exibeJogadoresNaTela(jogadores){
    var linhaTabela = "";
    for (var i=0; i<jogadores.length; i++){
        linhaTabela += "<tr><td>"+jogadores[i].nome+"</td>";
        linhaTabela += "<td>"+jogadores[i].vitorias+"</td>";
        linhaTabela += "<td>"+jogadores[i].derrotas+"</td>";
        linhaTabela += "<td>"+jogadores[i].empates+"</td>";
        linhaTabela += "<td>"+jogadores[i].pontos+"</td>";
        linhaTabela += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        linhaTabela += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        linhaTabela += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td></tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = linhaTabela;
   
}

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
};

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
};

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}