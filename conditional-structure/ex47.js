const grade1 = 6.0;
const grade2 = 4.0;

const avg = (grade1 + grade2) / 2.0;
console.log(`Average: ${avg.toFixed(1)}`);

if (avg >= 7) {
  console.log('Concept: A')
} else if (avg >= 5 && avg < 7) {
  console.log('Concept: B');
} else {
  console.log('Concept: C');
}