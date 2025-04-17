let number = +prompt("Enter a number");
if (isNaN(number)) {
    alert(`${number} is not a number`);
}else if(number < 2){
    document.write(`Tu 0 den ${number} khong co so nao la so nguyen to`);
}else{
    for(i=2;i<=number;i++){
        let j = 2;
        while(j <= Math.sqrt(i)){
            if(i%j === 0){
                break;
            }
            j++;
        }
        if(j > Math.sqrt(i)){
            document.write(`${i} `);
        }
    }
}
