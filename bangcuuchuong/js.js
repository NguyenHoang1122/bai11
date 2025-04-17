let sout;
sout = "<table border='1' width='650' height='100' cellspacing='0' cellpadding='3'>";
for (let i = 1; i < 10; i++){
    sout += "<tr>";
    for (let j = 2; j < 10; j++){
        sout +="<td>" + j + " x " + i + " = "+ j*i + "</td>";
    }
    sout += "</tr>";
}
sout += "</table>";
document.write(sout);