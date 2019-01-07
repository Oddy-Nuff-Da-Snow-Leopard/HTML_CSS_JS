/*Найти площадь круга и длину окружности, радиус меняется от а до b с шагом 0,3.
Результаты округлить и вывести в таблице.
Использовать оператор цикла do-while.*/
var a,b,S,C;
a=prompt("Введите a:");
b=prompt("Введите b:");
a=+a;
b=+b;
document.write("<table>");
document.write("<tr class=caption><td>Радиус</td><td>Площадь круга</td><td>Длина окружности</td></tr>");
do
{
    S=Math.PI*Math.pow(a,2);
    C=2*Math.PI*a;
    document.write("<tr><td>" + a.toFixed(1) + "</td><td>" + S.toFixed(2) + "</td><td>" + C.toFixed(2) + "</td></tr>");
    a+=0.3;
}while(a<=b);
document.write("</table>");
