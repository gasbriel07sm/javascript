const hour = 18;
const minutes = 0;

const totalMinutes = (hour * 60) + minutes;

if (totalMinutes < 480 || totalMinutes >= 1080) {
  console.log('Closed');
} else {
  console.log('Open');
}