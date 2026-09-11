const angle = 90;

if (angle > 0 && angle < 90) {
  console.log('1º Quadrante');
} else if (angle > 90 && angle < 180) {
  console.log('2º Quadrante');
} else if (angle > 180 && angle < 270) {
  console.log('3º Quadrante');
} else if (angle > 270 && angle < 360) {
  console.log('4º Quadrante');
} else {
  switch(angle) {
    case 0:
    case 90:
    case 180:
    case 270:
    case 360:
      console.log('Eixo');
      break;
    
    default:
      console.log('This angle not found');
      break;
  }
}