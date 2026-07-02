//Tudo relacionado ao localStorage
//Exemplo: Salvar usuários, Salvar time, Carregar favoritos.


function salvarTime(nomeDoPokemon, idPokemon, itenPokemon) {
    console.log("Nome do pokemon: " + nomeDoPokemon);
    console.log("Id do pokemon: " + idPokemon);
    console.log("Iten seguro:" + itenPokemon);
    console.log("_--_--_--_--_--_--_--_--_--_--_--_");

    let salvar = {
        nome: nomeDoPokemon,
        id: idPokemon,
        iten : itenPokemon,
        resultado: resultado
    };

    let salvarPokemon = JSON.parse(localStorage.getItem("dadosTime")) || [];
    salvarPokemon.push(salvar);

    localStorage.setItem("dadosTime", JSON.stringify(salvarPokemon));
}

