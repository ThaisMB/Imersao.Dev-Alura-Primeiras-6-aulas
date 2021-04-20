
listaFilmes = [];

function adicionaFilme(){
    var input = document.querySelector(".filme");
    var filme =input.value;
    mostraFilmes(filme);
    /*input.value= "";
    input.focus(); */
}

function mostraFilmes(filme){
    /*if (listaFilmes.includes(filme)){
        alert("Filme já incluído na lista!");
        return
    }else{*/
        var listaPoster = document.querySelector(".div-filmes");
        var poster = document.createElement("img");
        poster.src= filme;
        listaFilmes.push(filme);
        listaPoster.appendChild(poster);
    //}
}