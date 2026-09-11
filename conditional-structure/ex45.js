const day = 31;
const months = 2;
const year = 2023;

const existingMonth = months >= 1 && months <= 12;
const leapYear = (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
let maxDay;

switch(months) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    maxDay = 31;
    break;

  case 2:
    maxDay = leapYear ? 29 : 28;
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    maxDay = 30;
    break;
}

if (
  !existingMonth || (day > maxDay)
) {
  console.log('Invalid date');
} else {
  console.log('Valid date');
}