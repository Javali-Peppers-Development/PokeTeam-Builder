//Tudo relacionado ao localStorage

function salvarTime() {
     let pokemonDigitado = document.getElementById("nome").value;
     const timePokemon = JSON.parse(localStorage.getItem("timePokemon")) || [];

     if (timePokemon.length >= 6) {
        alert("Você só pode ter 6 pokemons por time! Para continuar deve remover algum Pokémon do time.");
        return;
    }

     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonDigitado}`)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function(dados) {
        if (dados.erro) {
            alert("Pokémon não encontrado")
            return;
        }

        let nomePokemon = dados.name;
        let idPokemon = dados.id;
        let itemPokemon = "Nenhum item";
       




    console.log("Nome do pokemon: " + nomePokemon);
    console.log("Id: " + idPokemon);
    console.log("item: " + itemPokemon);

    let registro = {
        idPokemon: idPokemon,
        nomePokemon: nomePokemon,
        itemPokemon: itemPokemon,
    };

    let timeLocal = JSON.parse(localStorage.getItem("timePokemon")) || [];
    timeLocal.push(registro);

    localStorage.setItem("timePokemon", JSON.stringify(timeLocal));
     })
}


//Exemplo: Salvar usuários, Salvar time, Carregar favoritos.