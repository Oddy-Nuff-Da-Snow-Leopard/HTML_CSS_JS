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