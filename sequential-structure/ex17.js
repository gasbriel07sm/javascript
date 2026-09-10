let change = 87;

const note50 = Math.floor(change / 50);
change %= 50;
const note20 = Math.floor(change / 20);
change %= 20;
const note10 = Math.floor(change / 10);
const note1 = Math.floor(change % 10);

console.log(`50: ${note50}`);
console.log(`20: ${note20}`);
console.log(`10: ${note10}`);
console.log(`1: ${note1}`);
