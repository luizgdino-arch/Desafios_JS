/*
DESAFIO 04 - LOJA TECH

Uma loja de informática possui vários produtos cadastros.

Crie uma array de objetos contendo:
- nome 
- preço

Utilize uma estrutura de repetição para mostrar apenas 
os produtos que custam mais de R$ 100,00.

Exiba o nome dos produtos encontrados.
*/
let produtos = [
    {nome: "Farinha", preço: 130.00},
    {nome: "Ovos", preço: 120.00},
    {nome: "Leite", preço: 115.00},
    {nome: "manteiga", preço: 120.00},
];


for(let i = 0; i < produtos.length; i++) {
    if(produtos[i].preço > 100){
        console.log(produtos[i].nome);
    }
}
