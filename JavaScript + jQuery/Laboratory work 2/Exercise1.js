function task1() 
{
    var name,dekan;
    alert("Здравствуйте!");
    alert("Вас приветствует Д.В. Шиман!");
    name=prompt("Ваше имя, товарищ!");
    alert("Добро пожаловать в БГТУ, " + name);
    dekan=confirm("Хотите я вас отчислю?!");
    if(dekan==false)
        alert("Тогда иди на пары!");
    else
        alert("После пар в деканат!");
}

function task2()
{
    var a = 10,b = 5,c = "10",d = "5";
    document.write(typeof(a) + " " + a + " + " + typeof(b) + " " + b + " = " + typeof(a+b) + " " + (a+b));
    document.write("<br>" + typeof(c) + " " + c + " + " + typeof(d) + " " + d + " = " + typeof(c+d) + " " + (c+d));
    document.write("<br>" + typeof(a) + " " + a + " + " + typeof(c) + " " + c + " = " + typeof(a+c) + " " + (a+c));
    document.write("<br>" + typeof(d) + " " + d + " + " + typeof(a) + " " + a + " = " + typeof(d+a) + " " + (d+a));
    document.write("<br>Результатом сложения строки и числа всегда будет строка!");
}

function task3()
{
    var x,y,first,second,remainder;
    x=prompt("Введите x: ");
    y=prompt("Ввведите y: ");
    first=(35*y-25*x)/5+232 + x*y/6;
    second=(8*y/x+5*x/y - 43)*6;
    document.write("(35*y-25*x)/5+232 + x*y/6 = " + first);
    document.write("<br>" + "(8*y/x+5*x/y - 43)*6 = " + second);

    remainder=first%second;
    document.write("<br>" + "Остаток от деления первого значения на второе: "+remainder);
}

function task4()
{
    var number;
    number=prompt("Введите число: ");
    number=+number;
    if (number>=30 && number<70 || number==50 || number>80 && number<100)
        alert("Правильное значение!");
    else
        alert("Не правильное значение!");
}

function task5()
{
    var a,b;
    a=prompt("Введите A: ");
    b=prompt("Введите B: ");
    if (+a>+b)
    alert("A > B");
    else if (+a < +b)
    alert("A < B");
    else
    alert("A = B");
}

function task5_1()
{
    var age;
    age=prompt("Введите ваш возраст: ",18);
    var message = (age<5) ? "Здравствуй малыш!" :
    (age<18) ? "Привет!" :
    (age<110) ? "Здравствуйте!" : "Вы идиот?";
    alert(message);
}

function task6()
{
    var lvl,day;
    lvl=prompt("Уровень вашего счастья от 1 до 7: ");
    switch(+lvl)
        {
        case 1: day = "Это понедельник!";break;
        case 2: day = "Это вторник!";break;
        case 3: day = "Это среда!";break;
        case 4: day = "Это четверг!";break;
        case 5: day = "Это пятница!";break;
        case 6: day = "Это суббота!";break;
        case 7: day = "Это суббота или воскресенье!";break;
        default: day = "Ваш уровень счастья ограничен!";break;
        }
    alert(day);
}

function task7()
{
    var err;
    try{
        alert("Начало блока try");
        esketit;
        alert("Конец блока try");
    }catch(err){
        alert("Ошибка " + err.name + ": " + err.message);
    }
    alert("Продолжение кода...");
}