const size= 8;

if (size < 6) {
  console.log(`Weak password`);
} else if (size >= 6 && size <= 9) {
  console.log(`Medium-strength password`);
} else {
  console.log(`Strong password`);
}