const n = Number(prompt('Enter a quantity of number: '));
let max;

for (let i = 1; i <= n; i++) {
  const num = Number(prompt('Enter a number: '));
  if(i === 1) max = num;
  if (num > max) max = num;
}

console.log(`Max number: ${max}`);