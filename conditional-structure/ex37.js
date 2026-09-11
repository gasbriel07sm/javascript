const weight = 70;
const height = 1.75;

const imc = weight / (height ** 2);

if (imc < 18.5) {
  console.log(`IMC: ${imc.toFixed(1)} - Underweight`)
} else if (imc >= 18.5 && imc < 25) {
  console.log(`IMC: ${imc.toFixed(1)} - Normal Weight`)
} else if (imc >= 25 && imc < 30) {
  console.log(`IMC: ${imc.toFixed(1)} - Overweight`)
} else {
  console.log(`IMC: ${imc.toFixed(1)} - Obesity`)
}