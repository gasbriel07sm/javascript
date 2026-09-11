const side1 = 5;
const side2 = 5;
const side3 = 8;

const existingTriangle = ((side1 < side2 + side3) && (side2 < side1 + side3) && (side3 < side1 + side2));

  if (existingTriangle) {
    const equilateral = ((side1 === side2) && (side1 === side3) && (side2 === side3)) ? 'Equilateral' : false;
    const isosceles = ((side1 === side2) || (side2 === side3) || (side1 === side3)) ? 'Isosceles' : false;
    const scalene = ((side1 !== side2) && (side1 !== side3) && (side2 !== side3)) ? 'Scalene' : false;

    console.log(equilateral || isosceles || scalene);
  } else {
    console.log('Not exist triangle');
  }