const num = 12;
let linha = '';

for(let i = 1; i <= num; i++) {
  linha += i + ' ';
  
  if(i % 5 === 0) linha += '\n';
}

console.log(linha);