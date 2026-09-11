const initialHour = 7;
const finalHour = 2;
let totalHours = 0;

if (finalHour > initialHour) {
  totalHours = finalHour - initialHour;
  totalHours < 1 
    ? console.log('The game has a minimum one hour') 
    : console.log(`The game has ${totalHours} hours`);
} else if (initialHour >= finalHour) {
  totalHours = (24 - initialHour) + finalHour;
  totalHours >= 24 
    ? console.log('The game has a maximum twenty-four hours') 
    : console.log(`The game has ${totalHours} hours`)
}