const year = 2000;

console.log(`${
  ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) 
  ? 'Leap year'
  : 'Not leap year'
}`);