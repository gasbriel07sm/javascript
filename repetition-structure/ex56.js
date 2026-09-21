const n = 10;
let mult3 = 0;

for(let i = 1; i <= n; i++) {
  if (i % 3 === 0) mult3++;
}

console.log(`Multiples of 3: ${mult3}`);