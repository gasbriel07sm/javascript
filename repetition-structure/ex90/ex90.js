const n = Number(prompt('Enter a quantity of number: '));
let numAnt = 0;
let currentLen = 1;
let maxLen = 1;

for(let i = 1; i <= n; i++) {
  const num = Number(prompt('Enter a number: '));

  if (i === 1) {
    max = num;
    continue;
  }
  
  if (num === numAnt + 1) {
    currentLen++;
  } else {
    currentLen = 1;
  }

  maxLen = Math.max(maxLen, currentLen);
  numAnt = num;
}

console.log(`Greater sequence asc: ${max}`);