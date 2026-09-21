let num = 1234;
let sum = 0;

while(true) {
  sum += Math.floor(num % 10);
  num = Math.floor(num / 10);
  if (num === 0) break;
}

console.log(`Sum digits: ${sum}`);