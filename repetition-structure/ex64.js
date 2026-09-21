let num = 1234;
let newNum = '';

while(true) {
  newNum += `${Math.floor(num % 10)}`;
  num = Math.floor(num / 10); 
  if (num === 0) break;
}

console.log(`${newNum}`);