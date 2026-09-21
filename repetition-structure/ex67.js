const n = 7;
let a = 0;
let b = 1;

for(let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(a);
  } else if (i === 2) {
    console.log(b);
  } else {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}