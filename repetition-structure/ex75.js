const n1 = 48;
const n2 = 36;
let max = Math.max(n1, n2);
let min = Math.min(n1, n2);
let resto = 0;
let quociente = 0;
let mdc = 0;

for(let i = 1; i <= max; i++) {
  quociente = max / min;
  resto = max % min;
  
  if (resto === 0) {
    mdc = min;
    break;
  }
  
  max = min;
  min = resto;
}

console.log(`MDC: ${mdc}`);