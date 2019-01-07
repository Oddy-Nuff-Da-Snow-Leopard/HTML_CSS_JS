var a = 10,b = 5,c = "10",d = "5";
document.writeln(typeof(a) + " " + a + " + " + typeof(b) + " " + b + " = " + typeof(a+b) + " " + (a+b));
document.writeln("<br>" + typeof(c) + " " + c + " + " + typeof(d) + " " + d + " = " + typeof(c+d) + " " + (c+d));
document.writeln("<br>" + typeof(a) + " " + a + " + " + typeof(c) + " " + c + " = " + typeof(a+c) + " " + (a+c));
document.writeln("<br>" + typeof(d) + " " + d + " + " + typeof(a) + " " + a + " = " + typeof(d+a) + " " + (d+a));
alert("Результатом сложения строки и числа всегда будет строка!");