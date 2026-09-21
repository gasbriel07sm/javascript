const a = 10;
const b = 20;
const min = Math.min(a, b);
const max = Math.max(a, b);
let totalPrimo = 0;

for(let i = min; i <= max; i++) {
  let totalDiv = 0;
  for(let j = 1; j <= i; j++) {
    if(i % j === 0) totalDiv++;
  }
  if(totalDiv === 2) totalPrimo++; 
}

console.log(`Primos: ${totalPrimo}`);