var i;
function task1()
{

    //Конструктор для создания объекта Group
    function Group(groupNumber, specialty, numberOfPersons)
    {
        //Свойства
        this.groupNumber = groupNumber;
        this['specialty'] = specialty;
        this.numberOfPersons = numberOfPersons;
        //Метод (добавить в группу k студентов)
        this.addStudents = function (k)
        {
            this.numberOfPersons+=k;
            document.write("В группу " + this.groupNumber + " (" + this.specialty + ") добавили " + k + " студента.<br>"); 
        }
        //Метод (исключить из группы n студентов)
        this.excludeStudents = function (n)
        {
            this.numberOfPersons-=n;
            document.write("Из группы " + this.groupNumber +  " (" + this.specialty + ") исключили " + n + " студента.<br>"); 
        }
      
    }

    var A = new Array (group1 = new Group(1, 'ИСиТ', 30), group2 = new Group(2, 'ИСиТ', 28), group3 = new Group(3, 'ИСиТ', 27), group4 = new Group(4, 'ПОИТ', 24));
    
    group1.addStudents(2);
    group2.addStudents(3);
    group3.addStudents(2);
    group4.excludeStudents(15);
    group3.excludeStudents(1);
    group4.addStudents(4);
    group1.excludeStudents(3);
    group2.excludeStudents(5);

    

    document.write("<br>");
    for (i = 0; i < A.length; i++)
        document.write("В группе № " + (i + 1) + " " + A[i]['numberOfPersons'] + " студентов<br>");

}

function task2()
{
    function Student(name, surname, physicsMark, mathMark, BoAaPMark, BoITMark, ALoDCMark)
    {
        this.name = name;
        this.surname = surname;
        this.physicsMark = physicsMark;
        this.mathMark = mathMark;
        this.BoAaPMark = BoAaPMark;
        this.BoITMark = BoITMark;
        this.ALoDCMark = ALoDCMark;

        this.nameAndSurname = function ()
        {
            return this.name + " " + this.surname; з
        }

        this.averageMark = function ()
        {
            return (this.physicsMark + this.mathMark + this.BoAaPMark + this.BoITMark + this.ALoDCMark)/5;
        }
    }

    var A = new Array (St1 = new Student ("Андрей", "Акушевич", 7, 7, 5, 5, 7), St2 = new Student ("Владислав", "Железняк", 5, 4, 4, 4, 4), St3 = new Student ("Максим", "Алексеев", 10, 9, 9, 10, 9));

    for (i = 0; i < A.length; i++)
        document.write("Студент " + A[i].nameAndSurname() + ", средний балл за сессию: " + A[i].averageMark() + "<br>");

    Student.prototype.scholarship = this.scholarship;

    for (i = 0; i < A.length; i++)
    {
        if (A[i].averageMark() >= 5)
            A[i].scholarship = "Степеньдия есть! Красавчик!";
        else
            A[i].scholarship = "Степеньдии нет! Учись!";
    }
    
    document.write("<br>");
    for (i = 0; i < A.length; i++)
        document.write(A[i].nameAndSurname() + "! " + A[i].scholarship + "<br>");
}

function task3()
{
    var A = new Array ("Апельсин", "Мандарин", "Яблоко", "Помидор", "Банан");
    document.write("Исходный массив A: " + A + "<br>");
    document.write("Использование метода A.indexOf(\"Помидор\"): " + A.indexOf("Помидор") + "<br>");
    document.write("Использование оператора delete A[3]<br>");
    delete A[3];
    document.write("Массив после delete A[3]: " + A + "<br>");
    document.write("Очередное использование метода A.indexOf(\"Помидор\"): " + A.indexOf("Помидор") + "<br>");
    A[3] = "Маракуйя";
    document.write("Массив A после добавления элемента в A[3]: " + A + "<br>");
    

    document.write("<br><br>Массив A: " + A + "<br>");
    if (1 in A)
        document.write("2-ой элемент есть в массиве A!<br>");

    delete A[1];
    document.write("<br>Массив: " + A + "<br>");
    if (!(1 in A))
        document.write("2-ого элемента нет в массиве A!<br>");


    var Citizen = {
        name: "Олег",
        surname: "Лабутин",
        age: 18,
        address: "Свердлова д.13а"
    };

    document.write("<br><br>Объект Citizen:<br>");
    for (var key in Citizen)
        document.write("Ключ(cвойство): " + key + ", значение: " + Citizen[key] +  ".<br>");

    if ("age" in Citizen)
        document.write("Свойство age есть в объекте Citizen!<br>");

    delete Citizen.age;
    document.write("<br><br>Объект Citizen:<br>");
    for (var key in Citizen)
        document.write("Ключ(cвойство): " + key + ", значение: " + Citizen[key] +  ".<br>");

    if (!("age" in Citizen))
        document.write("Свойства age нет в объекте Citizen!<br>");


    document.write("<br>");
    if(A instanceof Array)
        document.write("A - объект Array<br>");
    
    var d = 25;
    if(!(d instanceof Array))
    document.write("d - не объект Array<br>");

    var B = new String("БГТУ");     
    if (B instanceof String)
        document.write("B - объект String<br>");

    var c = "БГТУ";
    if (!(c instanceof String))
        document.write("c - не объект String<br>");
    
    if (Citizen instanceof Object)
        document.write("Citizen - пользовательский объект<br>");

    document.write("<br>");
    Citizen.age = 18;
    Citizen.faculty = "ФИТ";
    Citizen.canWalk = true;
    for (var key in Citizen)
        {
            document.write("Ключ(свойство):" + key + ", значение: " + Citizen[key] + ", тип значения: " + typeof(Citizen[key]) + "<br>");
        }
    
}

