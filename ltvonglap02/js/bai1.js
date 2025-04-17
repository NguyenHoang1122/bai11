let number = +prompt('Nhap so ma ban muon gioi han day fibonacci');
let x = 0;
let y = 1;
let total = 0;
let count = 1;
while (x < number) {
    document.write(`So thu ${count} la : ${x} <br>`);
    total = x + y;
    x= y;
    y = total;
    count++;
}