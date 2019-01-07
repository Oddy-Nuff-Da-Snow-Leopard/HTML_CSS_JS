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