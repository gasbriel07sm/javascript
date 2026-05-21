// variáveis são locais na memória que servem para armazenar dados
// podemor criar variáveis com var, let ou const
// o menos usual é var, pois ele é utilizado globalmente
// o let é gerado dentro de um escopo e pode ser atualizada e alterada
// const também é gerado dentro de um escopo, porém podemos armazenar os dados apenas uma vez, já que é uma constante

// as variáveis em JavaScript podem ter vários valores

// VAR
var cachorro = 'Kyara';
console.log(cachorro); // Kyara
// podemos atualizar seu valor:
cachorro = 'Teca';
console.log(cachorro); // Teca

// LET
let lanche = ('Bolo');
console.log(lanche); // Bolo
// podemos atualizar seu valor:
lanche = 'Misto quente';
console.log(lanche); // Misto quente

// CONST
const nome = 'Denner';
console.log(nome); // Denner
// não podemos atualizar valores de constantes, pois elas não sofrem alteração, irá gerar erro
// nome = 'Denner Troquatte';
// console.log(nome);