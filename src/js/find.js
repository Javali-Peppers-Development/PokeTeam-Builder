document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada!");

    // Seu código inicial aqui
    buscaPokemonID();
});


function buscaPokemonID() {
    const timePokemon = JSON.parse(localStorage.getItem("timePokemon")) || [];


     if (timePokemon.length === 0) {
        document.getElementById("CardPokemon").innerHTML = `

                Nenhum Pokémon cadastrado.
            
        `;
    }

    
    for (let i = 0; i < timePokemon.length; i++) {

        const idCadastrado = timePokemon[i].idPokemon;
        const nomeCadastrado = timePokemon[i].nomePokemon;
        const itemCadastrado = timePokemon[i].itemPokemon;


    console.log("idCadastrado: " + idCadastrado);
    console.log("nomeCadastrado: " + nomeCadastrado);
    console.log("itemCadastrado: " + itemCadastrado);

    if (idCadastrado === "") {
        alert("Dado salvo com valor vazio tente novamente");
        return;
    }

    console.log(idCadastrado);

    
        
    fetch(`https://pokeapi.co/api/v2/pokemon/${idCadastrado}`)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function(dados) {
        if (dados.erro) {
            alert("Pokémon não encontrado")
            return;
        }

        let tipo1 = dados.types[0].type.name;
        let tipo2 = dados.types[1] ? dados.types[1].type.name : "Não tem";


        
        document.getElementById("CardPokemon").innerHTML += `

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
}

function excluiHistorico() {
    localStorage.clear();
    alert("Histórico excluído com sucesso!");
    location.reload();
}