let num = 472;

if (num.toString().length !== 3) console.log('The number must have three digits');

const hundred = Math.floor(num / 100);
num %= 100;
const ten = Math.floor(num / 10);
const unit = num % 10;

console.log(`Hundred: ${hundred}`)
console.log(`Ten: ${ten}`);
console.log(`Unit: ${unit}`);