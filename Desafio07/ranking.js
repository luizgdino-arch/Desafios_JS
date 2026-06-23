/* 
DESAFIO 07 - RANKING DE JOGADORES
Uma competição precisa exibir a classificação dos participantes.

Crie um array contendo o nome de 4 jogadores. ok

Utilize uma estrutura de repitição para mostrar:

1° Jogador
2° Jogador
3° Jogador
4° Jogador

A posição deve ser gerada automaticamente pelo sistema.
*/

let jogadores = ["Luiz", "Gabriel", "Lucas", "Kacolovisk"];

for (let i = 0; i < jogadores.length; i++) {
    console.log(`${[i]}°) jogador: ${jogadores[i]}`);
}
