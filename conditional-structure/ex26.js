const side1 = 3;
const side2 = 3;
const side3 = 3;

if ((side1 < side2 + side3) && (side2 < side1 + side3) && (side3 < side1 + side2)) {
  console.log('Existing a triangle');
} else {
  console.log('Not exist a triangle');
}

// console.log(`${
//   ((side1 < side2 + side3) && (side2 < side1 + side3) && (side3 < side1 + side2)) 
//   ? 'Existing a triangle'
//   : 'Not exist a triangle'
// }`);