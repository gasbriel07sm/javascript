const num = 4;
let linha = '';

for(let i = 1; i <= num; i++) {
  for(let j = 1; j <= num; j++) {
    if ((i + j) % 2 === 0) {
      linha += '#';
    } else {
      linha += '.';
    }
  }
  linha += '\n';
}
console.log(linha);