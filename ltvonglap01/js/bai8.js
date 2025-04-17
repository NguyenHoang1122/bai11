function doanSo(){
    let number = prompt('Nhap gioi han den so ban muon doan.');
    let count = 1;
    while(number <=0 || isNaN(number)){
        alert('Ban da nhap sai hay nhap lai cho dung.')
        number = prompt('Nhap gioi han den so ban muon doan.');
    }
    // ham Math.floor su dung de lay gia tri tra ve lam tron xuong thanh so nguyen.
    let randomNumber = Math.floor(Math.random() * number + 1);
    let nhapNumber = +prompt('Nhap so ban muon doan.');
    while(nhapNumber <=0 || isNaN(nhapNumber)){
        alert('Ban da nhap sai nhap lai cho dung.');
        nhapNumber = prompt('Nhap lai so ban muon doan.');
    }
    while(nhapNumber !== randomNumber){
        if(count === 4){
            break;
        }else if(nhapNumber < randomNumber){
            alert('So ban nhap nho hon  hay tang len.');
        }else{
            alert('So ban nhap lon hon hay giam xuong.');
        }
        count++;
        nhapNumber = +prompt('Nhap lai so ban muon doan.');
    }
    if(count === 4){
        alert('Ban da het luot doan. :)))))))');
    }else{
        alert('Chuc mung ban da du doan chinh xac.');
    }
}