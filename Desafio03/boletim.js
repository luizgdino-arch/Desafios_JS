/*
DESAFIO 03 - SISTEMA DE APROVAÇÂO

Crie uma função chamada verificarAluno() que receba:
- nome
- nota

Regras:
- Nota maior ou igual a 7 = Aprovado
- Nota maior ou igual a 5 e menor que 7 = Recuperação
- Nota menor que 5 = Reprovado

Exiba uma mensagem informado a situação do aluno.
*/

let notaLuiz = 7
let notaLucas = 9
let notaMurilo = 8

function verificarAluno(nome, nota) {
if (nota <= 7) {
    console.log(nome + ": aluno aprovado");
}
else if (nota >= 5) {
    console.log(nome + ": aluno em recuperação");
}
else {
    console.log(nome + ": está reprovado")
}
}
const Luiz = verificarAluno("Luiz", 7);