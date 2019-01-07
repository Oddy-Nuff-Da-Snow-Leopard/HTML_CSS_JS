    var a,b,i,j;
    a=prompt("Введите a:");
    b=prompt("Введите b:");
    a=+a;
    b=+b;
    document.write("<table>");
    document.write("<caption>Таблица умножения " + a + " на " + b);
    for(i=1;i<=a;i++)
    {
        document.write("</tr>");
        document.write("<td>" + i + "</td>");
        for(j=2;j<=b;j++)
        {
            document.write("<td>" + (i*j) + "</td>");
        }      
        document.write("</tr>");  
    }
    document.write("</table>")