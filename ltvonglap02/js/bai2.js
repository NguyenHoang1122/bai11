let number = +prompt('Enter a number');
let product = 1;
while(isNaN(number) || number <= 0 ){
    alert('Ban da nhap sai hay nhap lai cho dung :');
    number = +prompt('Again enter a number');
}for(i = 1; i <= number; i++){
    product *= i;
}
document.write(`Giai thua cua ${number} la : ${product}`);