let number = 0;
let x = 0;
let y = 1;
for (let i = 0; i < 20; i++) {
    document.write(`So fibonacci thu ${i+1} la : ${x} <br>`);
    number = x + y;
    x = y;
    y = number;
}