let num;
let sum = 0;

do {
  num = Number(prompt('Enter a number: '));
  sum += num;
} while (num !== 0);

console.log(`Sum: ${sum}`);