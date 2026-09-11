const num1 = 8;
const num2 = 3;
const num3 = 5;

const smaller = Math.min(num1, num2, num3);
const greater = Math.max(num1, num2, num3);
const middle = (num1 + num2 + num3) - (smaller + greater); 

console.log(`${smaller} ${middle} ${greater}`);