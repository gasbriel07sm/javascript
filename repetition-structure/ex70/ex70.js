let grade;
let totalGrades = 0;
let valueGrades = 0;

do {
  grade = Number(prompt('Enter a grade: '));
  if (grade > 0) {
    totalGrades++;
    valueGrades += grade;
  }
} while(grade > 0);

if (totalGrades > 0) {
  const avg = valueGrades / totalGrades;
  console.log(`Average: ${avg.toFixed(2)}`);
} else {
  console.log('No grades entered');
}
