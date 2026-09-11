const jogada1 = 'tesoura';
const jogada2 = 'tesoura';

if (
  jogada1 === 'pedra' && jogada2 === 'tesoura' ||
  jogada1 === 'tesoura' && jogada2 === 'papel' ||
  jogada1 === 'papel' && jogada2 === 'pedra'
) {
  console.log('Player 1 won')
} else if (
  jogada2 === 'pedra' && jogada1 === 'tesoura' ||
  jogada2 === 'tesoura' && jogada1 === 'papel' ||
  jogada2 === 'papel' && jogada1 === 'pedra'
) {
  console.log('Player 2 won')
} else {
  console.log('Draw');
}