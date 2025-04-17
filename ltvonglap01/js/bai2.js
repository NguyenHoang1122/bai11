let number = prompt('Hay nhap nhiet do hien tai');
while(isNaN(number) || number === ""){
    alert('Ban da nhap sai nhay nhap lai dung gai tri nhiet do hien tai');
    number = prompt('Nhap lai nhiet do hien tai')
}
if(number > 100){
    alert('Nhiet do qua cao hay giam nhiet do xuong');
}else if(number < 20){
    alert('Nhiet do qua thap hay tang nhiet do len');
}else{
    alert('Nhiet do dang rat thich hop');
}