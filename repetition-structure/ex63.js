let num = 4820;
let digits = 0;

while(true) {
  num = Math.floor(num / 10);
  digits++;
  if (num === 0) break;
}

console.log(`${digits} digits`);