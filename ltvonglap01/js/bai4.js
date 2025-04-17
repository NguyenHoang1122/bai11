let count = 0;
let x = 0;
let y = 1;
while(x%5 !==0){
    count = x + y;
    x = y;
    y = count;
    count++;
}
document.write(x);