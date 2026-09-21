let num = 9875;
let sum = 0;

while(num > 0 || sum > 9) {
  if (num === 0) {
    num = sum;
    sum = 0;
  }

  sum += num % 10;
  num = Math.floor(num / 10);
}

console.log(`Sum: ${sum}`);