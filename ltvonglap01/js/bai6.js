let sum = 0;
let i = 1;
let count = 0;
while(count < 30){
    if(i%7===0){
        count++;
        sum +=i;
    }
    i++;
}
document.write(`Tong 30 so tu nhien dau tien chia het cho 7 la : ${sum}`);

