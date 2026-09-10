let num = 102;

const hundred = Math.floor(num / 100);
num %= 100;  
const ten = Math.floor(num / 10); 
const unit = Math.floor(num % 10);

let inverseNum = (unit * 100) + (ten * 10) + hundred;
console.log(`${inverseNum}`);