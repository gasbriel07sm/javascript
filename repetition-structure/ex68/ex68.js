let num;
do {
  num = Number(prompt('Enter a number: '));
} while(num > 10 || num < 1);

console.log(`Valid value: ${num}`);