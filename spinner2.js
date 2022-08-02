const symbol = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let time = 100;
for (let sym of symbol) {
  setTimeout(() => {
  process.stdout.write(`\r${sym}   `);
}, time);
  time += 200;
}