const base = 2;
const exp = 5;
let res = 1;

for (let i = 1; i <= exp; i++) {
  res *= base;  
}

console.log(`${res}`);