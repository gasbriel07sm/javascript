const age = 12;

if (age >= 5 && age <= 7) {
  console.log("Children's A");
} else if (age >= 8 && age <= 10) {
  console.log("Children's B");
} else if (age >= 11 && age <= 13) {
  console.log('Young Adult A');
} else if (age >= 14 && age < 18) {
  console.log('Young Adult B');
}  else if (age >= 18) {
  console.log('Senior');
} else {
  console.log('Age out of range');
}