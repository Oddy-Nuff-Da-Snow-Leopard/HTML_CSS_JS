var age;
age=prompt("Введите ваш возраст: ",18);
var message = (age<5) ? "Здравствуй малыш!" :
(age<18) ? "Привет!" :
(age<110) ? "Здравствуйте!" : "Вы идиот?";
alert(message);
