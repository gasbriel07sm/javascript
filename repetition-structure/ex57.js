const n = 5;
let sumEven = 0;
let sumOdd = 0;

for (let i = 1; i <= n; i++) {
  i % 2 === 0 ? sumEven += i : sumOdd += i;  
}

console.log(`Even: ${sumEven}`);
console.log(`Odd: ${sumOdd}`);