const value = 1000;
const tax = 2;
const months = 2;

const amount = value * ((1 + (tax / 100)) ** months);
console.log(`After ${months} months: ${amount.toFixed(1)}`);