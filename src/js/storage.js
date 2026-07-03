//Tudo relacionado ao localStorage
//Exemplo: Salvar usuários, Salvar time, Carregar favoritos.




function salvarTime(nomeDoPokemon, idPokemon, itenPokemon) {

    let nomeSalvo = document.getElementById("nome").value;
    let idSalvo = document.getElementById("id").value
    let itenTeste = document.getElementById("item").value;

    console.log("Nome do pokemon: " + nomeSalvo);
    console.log("Id do pokemon: " + idSalvo);
    console.log("Iten seguro:" + itenTeste);
    console.log("_--_--_--_--_--_--_--_--_--_--_--_");

    let salvar = {
        nome: nomeSalvo,
        id: idSalvo,
        iten : itenTeste,
        
    };
    
    let salvarPokemon = JSON.parse(localStorage.getItem("dadosTime")) || [];
    salvarPokemon.push(salvar);

    localStorage.setItem("dadosTime", JSON.stringify(salvarPokemon));
    
}

