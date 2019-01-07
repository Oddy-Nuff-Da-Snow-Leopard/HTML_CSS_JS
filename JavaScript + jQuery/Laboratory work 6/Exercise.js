
var window1, windo2w;

function openWindow1()
{
    window1 = window.open("https://ru.wikipedia.org/wiki", "", "width = 500, height = 400");
    
}

function openWindow2()
{
    window2 = window.open("https://www.amazon.com", "", "width = 500, height = 400");
}

function closeWindow1()
{
    window1.close();
}

function closeWindow2()
{
    window2.close();
}


function window1()
{
    window1 = window.open("about:blank", " ", "width = 500, height = 400");
    window1.document.write("Hello World!");
}

function window2()
{
    window2 = window.open("about:blank", " ", "width = 500, height = 400");
    window2.document.write("Hello World, again!");
}

function task2()
{
    document.write("<link href=Exercise.css rel=stylesheet>");
    document.write("<table>");
    document.write("<caption>Объекты Navigator,Screen, History,Location</caption>");
    document.write("<tr><td colspan = 2 class=object>Объект Navigator</td></tr>");
    document.write("<tr><td class=value>Свойство</td><td class=property>Значение</td></tr>");
    document.write("<tr><td>userAgent</td><td>" + navigator.userAgent + "</td></tr>");
    document.write("<tr><td>appVersion</td><td>" + navigator.appVersion + "</td></tr>");
    document.write("<tr><td>appName</td><td>" + navigator.appName + "</td></tr>");
    document.write("<tr><td>appCodeName</td><td>" + navigator.appCodeName + "</td></tr>");
    document.write("<tr><td>platform</td><td>" + navigator.platform + "</td></tr>");
    document.write("<tr><td class=value>Метод</td><td class=property>Значение</td></tr>");
    document.write("<tr><td>javaEnabled()</td><td>" + navigator.javaEnabled() + "</td></tr>");
 
    document.write("<tr><td colspan = 2 class=object>Объект Screen</td></tr>");
    document.write("<tr><td class=value>Свойство</td><td class=property>Значение</td></tr>");
    document.write("<tr><td>width</td><td>" + screen.width + "</td></tr>");
    document.write("<tr><td>height</td><td>" + screen.height + "</td></tr>");
    document.write("<tr><td>colorDepth</td><td>" + screen.colorDepth + "</td></tr>");

    document.write("<tr><td colspan = 2 class=object>Объект History</td></tr>");
    document.write("<tr><td class=value>Свойство</td><td class=property>Значение</td></tr>");
    document.write("<tr><td>length</td><td>" + history.length + "</td></tr>");

    document.write("<tr><td colspan = 2 class=object>Объект Location</td></tr>");
    document.write("<tr><td class=value>Свойство</td><td class=property>Значение</td></tr>");
    document.write("<tr><td>href</td><td>" + location.href + "</td></tr>");
    document.write("<tr><td>pathname</td><td>" + location.pathname + "</td></tr>");
    document.write("</table>");
}