const n = 5;
let fat = 1;

for (let i = 1; i <= n; i++) {
  fat *= i;
}

console.log(`${fat}`);