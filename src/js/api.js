function buscaPokemon() {
    let pokemonDigitado = document.getElementById("nome").value;
    

    if (pokemonDigitado === "") {
        alert("Digite um Pokémon");
        return;
    }

    console.log("pokemonDigitado");


    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonDigitado}`)
    .then(function (resposta) {
        if (!resposta.ok) {
            alert("Pokémon não encontrado")
            return;
        }
        return resposta.json();
    })
    .then(function(dados) {
        
        let nomePokemon = dados.name;
        let idPokemon = dados.id;
        let itemPokemon = "Nenhum item";

        let tipo1 = dados.types[0].type.name;
        let tipo2 = dados.types[1] ? dados.types[1].type.name : "Não tem";


        
        document.getElementById("CardPokemon").innerHTML = `

                <div class="pokemon-card">

                <h2>Nome: ${dados.name}</h2>
                <br>
                <p>Tipo 1: ${tipo1}</p>
                <br>
                <p>Tipo 2: ${tipo2}</p>
                <br>
                <img src="${dados.sprites.front_default}" alt="Imagem do Pokémon">
                <br>
                </div>
               
            
        `;


        
    })
}

const formPokemon = document.getElementById("nome");
formPokemon.addEventListener('focusout', buscaPokemon);


// Inicio busca de Pokémon por ID










// fim busca de Pokémon por ID

/* 

*Utilizar*

nome: "name"
imagem: "sprites.front_default"
Tipos: "types[].type.name"









*/