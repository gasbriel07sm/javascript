const salary = 2000;
let reajust = 0;

if (salary <= 1500) {
  reajust = 15;
} else if (salary > 1500 && salary <= 3000) {
  reajust = 10;
} else {
  reajust = 5;
}

const newSalary = salary * (1 + (reajust / 100));
console.log(`New salary: ${newSalary}`);