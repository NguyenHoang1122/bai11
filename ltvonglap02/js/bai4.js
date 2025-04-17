let sao = '*'
let x = '&nbsp;&nbsp;'
let result = '';
for(i=1;i<=7;i++){
    if(i===1 || i === 7){
        result = sao.repeat(21);
        document.write(`${result} <br>`);
    }else{
        result = sao.repeat(1) + x.repeat(20) + sao.repeat(1);
        document.write(`${result} <br>`);
    }
}