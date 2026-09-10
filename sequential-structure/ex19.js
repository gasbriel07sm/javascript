const temperatureCelsius = 25;

const temperatureFahrenheit = ((temperatureCelsius * 9) / 5) + 32;
const temperatureKelvin = temperatureCelsius + 273.15;

console.log(`Fahrenheit: ${temperatureFahrenheit}`);
console.log(`Kelvin: ${temperatureKelvin.toFixed(2)}`);
