/*
var text_1 = `moje ime`
var text_2 = `moje_ime`

if (text_1 === text_2){
    console.log("Varijable su identične!");
} else {
    console.log("Varijable nisu identične!");
}

var a = ["ime", "prezime"];
console.log(a, typeof(a));

var b = ["ime", 1, 2];
console.log(b, typeof(b));


var firstName = "Ivan ";
var lastName = " Horvat";

var fullName = firstName.trim() + " " + lastName.trim();

console.log(fullName);



// var x = z == 2 ? y : 5;
var z = 3;
var y = 0;

if (z === 2) {
    x = y;
} else {
    x = 5;
}

console.log("x=" + x);


for(var i=1; i<21; i++){
    if(i % 2 == 0){
        console.log(`Broj ${i} je paran!`);
    }
}
*/

var TableBegin = "<table><tbody>";
var TableEnd = "</tbody></table>";

var rowBegin = "<tr>";
var rowEnd = "</tr>";

var rowData = ''; //"<td>ime</td><td>prezime</td>"
var row = "";

for (var i = 0; i < 20; i++) {
    row += rowBegin;
    rowData = '<td>ime' + i + '</td><td>prezime' + i + '</td';
    row += rowData;
    row += rowEnd;
}

document.write(TableBegin + row + TableEnd);