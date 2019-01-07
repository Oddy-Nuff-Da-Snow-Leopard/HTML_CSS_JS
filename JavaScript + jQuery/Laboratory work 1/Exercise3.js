var x,y,first,second,remainder;
x=prompt("Введите x: ");
y=prompt("Ввведите y: ");
first=(35*y-25*x)/5+232 + x*y/6;
second=(8*y/x+5*x/y - 43)*6;
document.write("(35*y-25*x)/5+232 + x*y/6 = " + first);
document.write("<br>" + "(8*y/x+5*x/y - 43)*6 = " + second);

remainder=first%second;
document.write("<br>" + "Остаток от деления первого значения на второе: "+remainder);