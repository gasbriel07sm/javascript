const num = 1000;
let sum = 0;

for(let i = 0; i < num; i++) {
  sum += 4 * ((-1) ** i) / ((2 * i) + 1);
}

console.log(`Sum: ${sum.toFixed(4)}`);