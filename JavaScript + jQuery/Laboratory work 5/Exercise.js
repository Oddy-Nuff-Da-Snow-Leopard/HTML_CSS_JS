var i;
function task1()
{
    for (i = 0; i < document.all.length; i++)
    {
        alert("Тег " + (i + 1) + " - " + document.all[i].tagName);
    }
}

function task2()
{
    for (i = 0; i < document.body.children.length; i++)
        alert(document.body.children[i]);
}

function task3(n)
{
    switch(n)
    {
    case 1:
        for(i = 0; i < document.all.length; i++)
        {
            if (document.all[i] instanceof HTMLSpanElement)
            {
                break;
            }
        }
        alert(document.all[i].innerHTML);break;
    case 2:
        alert(document.getElementsByTagName("span")[0].innerHTML);break;
    case 3:
        alert(document.getElementById("A").innerHTML);break;
    }
}

function task4()
{
    var table = document.getElementsByTagName('table')[0];
    i = 2;
    var sum = 0;
    for (var k = 3; k < table.rows.length ; k++)
    {
        sum += +table.rows[k].cells[i].innerHTML;
    }

    var average = sum/5;
    alert("Средний балл: " + average);

    document.getElementsByTagName("span")[1].innerHTML = document.getElementsByTagName("span")[1].innerHTML + " " + average;
}