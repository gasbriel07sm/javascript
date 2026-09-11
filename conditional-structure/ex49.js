const temperatureCelsius = 100;

if (temperatureCelsius <= 0) {
  console.log('Solid');
} else if (temperatureCelsius > 0 && temperatureCelsius < 100) {
  console.log('Liquid');
} else if (temperatureCelsius >= 100) {
  console.log('Gas');
}