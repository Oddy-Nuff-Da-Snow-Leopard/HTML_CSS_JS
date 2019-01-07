function task1()
{
    
    var a,b,c,d;
    a = 6*Math.pow(Math.PI,2) + 3*Math.pow(Math.E,8);
    b = 2*Math.cos(4) + Math.cos(12) + 8*Math.pow(Math.E,3);
    c = 3*Math.sin(9) + Math.log(5) + Math.sqrt(3);
    d = 2*Math.tan(5) + 6*Math.PI + Math.sqrt(12);

    var A = new Array (a,b,c,d);

    var min, index_min, max, index_max;
    var i;

    min = A[0];
    for (i = 0;i < A.length-1 ; i++)
    {
        if (min >= A[i])
        {
            min = A[i];
            index_min = i;
        }
    }

    max = A[0];
    for (i = 0; i < A.length-1 ; i++)
    {
        if (max <= A[i])
        {
            max = A[i];
            index_max = i;
        }
    }

    document.write("Массив из значений выражений: " + A + "<br>");
    document.write("Минимальный элемент массива: " + min + ", его номер в массиве: " + index_min + "<br>");
    document.write("Максимальный элемент массива: " + max + ", его номер в массиве: " + index_max + "<br>");
}

function task2()
{
    var A = new Array ("pow", "pop", "push", "shift", "round", "floor", "slice", "sort");
    var ARRAY = new Array(), MATH = new Array();
    var j = 0, k = 0;
    
    for (var i = 0; i < A.length; i++)
    {
        if (A[i] in Math)
        {
            MATH[j] = A[i];
            j++;
        }
        else 
        {
            ARRAY[k] = A[i];
            k++;
        }
    }
    document.write("Массив с элементами, представляющими методы объектов Array и Math: " + A + ";<br>");
    document.write("Его длина: " + A.length + ";<br><br>")
    document.write("Массив с методами объекта Array: " + ARRAY + ", его длина: " + ARRAY.length + ";<br>");
    document.write("Массив с методами объекта Math: " + MATH + ", его длина: " + MATH.length + ";<br>");

    document.write("<br>Добавление в начало одного массива и в конец другого еще по одному методу соответствующих объектов.<br>");
    ARRAY.unshift("unshift");
    MATH.push("abs");
    document.write("Массив с методами объекта Array: " + ARRAY + ", его длина: " + ARRAY.length + ";<br>");
    document.write("Массив с методами объекта Math: " + MATH + ", его длина: " + MATH.length + ";<br>");
}

function task3()
{
    var surname = prompt("Введите вашу фамилию:");
    var name = prompt("Введите ваше имя:");
    var patronymic = prompt("Введите ваше отчество:");
    var SNP = new String(surname.concat(" " + name.concat(" " + patronymic)));
    document.write("Здравствуйте " + SNP + "!<br>");
    document.write("Длина строки |" + SNP + "| - " + SNP.length + ";<br>");
    strUP = SNP.toUpperCase();
    document.write("Все символы строки переведены в верхний регистр: " + strUP + ";<br>");
    strLow = SNP.toLowerCase();
    document.write("Все символы строки переведены в нижний регистр: " + strLow + ";<br>");
    document.write("Конкатенация строк верхнего и нижнего регистров: " + strUP.concat(strLow) + ";<br>");
    document.write("Инициалы: " + surname + ' ' + name.charAt(0) + '.' + patronymic.charAt(0) + ".<br>");
    document.write("Замена фамилии и: " + SNP.replace(surname,"Пуля") + "<br>");
}

function task4()
{
    variable = new Date();
 
    document.write("<caption>Текущее время</caption>");
    document.write("<table>");
    document.write("<tr><td>Год</td><td>" + variable.getFullYear() + "</td></tr>");
    document.write("<tr><td>Месяц</td><td>" + variable.getMonth() + "</td></tr>");
    document.write("<tr><td>День</td><td>" + variable.getDate() + "</td></tr>");
    document.write("<tr><td>Час</td><td>" + variable.getHours() + "</td></tr>");
    document.write("<tr><td>Минуты</td><td>" + variable.getMinutes() + "</td></tr>");
    document.write("<tr><td>Секунды</td><td>" + variable.getSeconds() + "</td></tr>");
    document.write("<tr><td>Милисекунды</td><td>" + variable.getMilliseconds() + "</td></tr>");
    document.write("</table>");

}