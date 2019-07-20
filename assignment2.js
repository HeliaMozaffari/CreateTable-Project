document.getElementById('table').addEventListener('mousedown', CreateTable);
function CreateTable(){
var colomn = document.getElementById('colomn').value;
colomn ++;
var row = document.getElementById('row').value;
row ++;
document.write("<table border='3px'>");

for(var i = 1; i < row; i++) {

	document.write("<tr>");
 
	for(var j = 1; j < colomn; j++) {

		document.write("<td>" + i +","+j + "</td>");
	}
	document.write("</tr>");
}

document.write("</table>");
}