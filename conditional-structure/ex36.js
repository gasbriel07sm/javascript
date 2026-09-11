const num1 = 8;
const num2 = 4;
const operation = '/';
let res = 0;

switch(operation) {
  case '+':
    res = num1 + num2;
    console.log(`Result: ${res}`);
    break;
  case '-':
    res = num1 - num2;
    console.log(`Result: ${res}`);
    break;
  case '*':
    res = num1 * num2;  
    console.log(`Result: ${res}`);
    break;
  case '/':
    if (num2 === 0) console.log('Division by zero not allowed')
    else { 
      res = num1 / num2;
      console.log(`Result: ${res}`);
    }
    break;
  default:
    console.log('Operation not found');
    break;
}