// podemos declarar variáveis com var, let, const
// var -> utilizado globalmente
// let -> gerado dentro de um escopo
// const -> gerado dentro de um escopo, porém pdoemos armazenar dados apenas 1x

var cachorro = 'Kyara';
console.log(cachorro);

// podemos atualizar os dados com var
cachorro = 'Teca';
console.log(cachorro);

let lanche = 'Bolo';
console.log(lanche);

// podemos atualizar os dados com let
lanche = 'Misto Quente';
console.log(lanche);

const nome = 'Dener';
console.log(nome);

// não podemos atualizar dados de uma constante (pois as constantes não podem ter seus valores reatribuidos)
//nome = 'Gabriel';
//console.log(nome);