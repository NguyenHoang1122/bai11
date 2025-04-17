let number = 0;
let x = 0;
let y = 1;
let sum = 0;
for (let i = 0; i < 20; i++) {
    number = x + y;
    x = y;
    y = number;
    sum+=x;
}
document.write(`Tong cua 20 dau tien trog day fibonacci la : ${sum}`);