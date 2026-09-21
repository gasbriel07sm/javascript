let num = 1221;
let numOriginal = num;
let inverseNum = 0;

while(true) {
  let digit = Math.floor(num % 10);
  inverseNum = (inverseNum * 10) + digit;
  num = Math.floor(num / 10);

  if(num === 0) break;
}

console.log(`${inverseNum === numOriginal ? 'Palindrome' : 'Not palindrome'}`)