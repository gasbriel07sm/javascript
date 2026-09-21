const n = 4;
let ast = '';
let esp = '';

for (let i = 1; i <= n; i++) esp += ' ';

for(let i = 1; i <= n; i++) {
  ast += '*';   
  console.log(esp + ast);
  esp = esp.slice(0, -1);
}