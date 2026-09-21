const n = Number(prompt('Enter a quantity of number: '));

let totalNum = 0;
let valueTotal = 0;

for (let i = 1; i <= n; i++) {
  const num = Number(prompt('Enter a number: '));
  valueTotal += num;
  totalNum++;
}

if (totalNum > 0) {
  const avg = valueTotal / totalNum;
  console.log(`Average: ${avg}`);
} else {
  console.log('Nenhum número informado')
}
