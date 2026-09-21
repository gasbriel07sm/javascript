const n = Number(prompt('Enter a quantity of number: '));

let positive = 0;
let negative = 0;
let zeros = 0;

for(let i = 1; i <= n; i++) {
  const num = Number(prompt('Enter a number: '));

  if(num > 0) {
    positive++;
  } else if (num < 0) {
    negative++;
  } else {
    zeros++;
  }
}

console.log(`Positive: ${positive}`);
console.log(`Negative: ${negative}`);
console.log(`Zeros: ${zeros}`);
