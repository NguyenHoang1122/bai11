let sao = "*";
let space = '&nbsp;&nbsp;';
let result = '';
for(i = 1, j = 5; i <= 5, j >= 1; i++, j--){
    result = sao.repeat(i) + space.repeat(j);
    document.write(`${result} <br>`);
}
for(j =1, i =5; j<=5, i>=1; j++, i--){
    result = sao.repeat(i) + space.repeat(j);
    document.write(`${result} <br>`);
}
for(i = 0, j = 5; i <= 5, j >= 1; i++, j--){
    result = space.repeat(i) + sao.repeat(j);
    document.write(`${result} <br>`);
}
for(j =1, i =4; j<=5, i>=0; j++, i--){
    result = space.repeat(i) + sao.repeat(j);
    document.write(`${result} <br>`);
}
