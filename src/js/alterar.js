
function alterarCadastro(){
    const timePokemon = JSON.parse(localStorage.getItem("timePokemon")) || [];

    let nomePokemon = timePokemon.nomePokemon

    let registro = {
        idPokemon: idPokemon,
        nomePokemon: nomePokemon,
        itemPokemon: itemPokemon,
    };

    let timeLocal = JSON.parse(localStorage.getItem("timePokemon")) || [];
    timeLocal.push(registro);

    localStorage.setItem("timePokemon", JSON.stringify(timeLocal));

}