const n = Number(prompt('Enter a quantity of number: '));
let max = 0;
let min = 0;
let totalNum = 0;
let valueTotal = 0;

for(let i = 1; i <= n; i++) {
  const num = Number((prompt('Enter a number: ')));
  valueTotal += num;
  totalNum++;

  if(i === 1) {
    min = num;
    max = num;
  } else {
    if(num > max) max = num;
    if(num < min) min = num;
  }
}

const avg = valueTotal / totalNum;

console.log(`Max: ${max}`);
console.log(`Min: ${min}`);
console.log(`Average: ${avg.toFixed(1)}`);
