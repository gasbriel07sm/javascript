let vote;
let yes = 0;
let no = 0;
let nulo = 0;
let total = 0;

do {
  vote = Number(prompt('Enter a number: '));

  switch(vote) {
    case 1:
      yes++;
      total++;
      break;
    case 2:
      no++;
      total++;
      break;
    case 3:
      nulo++;
      total++;
      break;
    case 0:
      break;
    default:
      console.log(`Vote not found!`);
      break;
  }
} while(vote !== 0)

console.log(`Yes: ${yes}`);
console.log(`No: ${no}`);
console.log(`Null: ${nulo}`);
console.log(`Total: ${total}`);
