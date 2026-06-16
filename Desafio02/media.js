// Desafio 02 - Média da turma

/*
Crie um array com 5 notas
- Utilize um loop para:
     -Utilize um loop para:
        - somar todas as notas
        - Calcular a média

    Mostre no console/output o seguinte:
    Média da turma: 10.0
*/

const notas = [ 1, 2, 3, 4, 5]

let soma = 0;

for(resultado = 1; resultado < notas.length; resultado++ ) {
    soma = soma + notas[resultado];
}

let media = soma / notas.length;

console.log("Média da turma: ", media);
