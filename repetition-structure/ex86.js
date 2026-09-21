let num = 50;
let totalCoins = 0;

const cent25 = 25;
totalCoins += Math.floor(num / 25);
num = Math.floor(num % cent25)
const cent10 = 10;
totalCoins += Math.floor(num / 10);
num = Math.floor(num % cent10)
const cent5 = 5;
totalCoins += Math.floor(num / 5);
num = Math.floor(num % cent5)
totalCoins += num;
num = 0;

console.log(`Total Cents: ${totalCoins}`);