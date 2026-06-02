// Desafios 01 - Cadastro de Pessoa

/*
     Crie um objeto chamado pessoa contendo:
    - nome
    - idade
    - cidade

    Após a criação
    - Altere a idade 
    - adicione uma profissão
    - Remova a cidade

    No fim, exibia o objeto final.
*/

const usuario ={
    nome: "Wilson",
    idade: "3,5" ,
    cidade: "Ilhas mauricio",

}

    console.log(usuario)
    usuario.Idade = 5;
    usuario.profisão = "coach motivacional",
    delete usuario.cidade;
    console.log(usuario);