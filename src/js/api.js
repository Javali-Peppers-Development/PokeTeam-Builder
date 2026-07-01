function buscaPokemon() {
    let pokemonDigitado = document.getElementById("nome").value;
    

    if (pokemonDigitado === "") {
        alert("Digite um Pokémon");
        return;
    }

    console.log("pokemonDigitado");


    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonDigitado}`)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function(dados) {
        if (dados.erro) {
            alert("Pokémon não encontrado")
            return;
        }
        document.getElementById("tipo1").value = "";
        document.getElementById("tipo2").value = "";

        document.getElementById("nome").value = dados.name;
        document.getElementById("imagem").value = dados.sprites.front_default;
        document.getElementById("tipo1").value = dados.types[0].type.name;
        document.getElementById("tipo2").value = dados.types[1].type.name;
    })
}

const formPokemon = document.getElementById("nome");
formPokemon.addEventListener('focusout', buscaPokemon);




/* 

*Utilizar*

nome: "name"
imagem: "sprites.front_default"
Tipos: "types[].type.name"









*/