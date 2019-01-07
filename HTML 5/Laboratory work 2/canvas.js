var myCanvas1 = document.getElementsByClassName("myCanvas1")[0];
myCanvas1.width = 600;
myCanvas1.height = 470;

var A = myCanvas1.getContext("2d");

A.lineWidth = 2;
A.beginPath();
A.strokeStyle = "rgba(0, 0 , 0, 0.75)";
A.moveTo(74,400);
A.lineTo(550,400);

A.moveTo(80,406);
A.lineTo(80,45);

A.stroke();

let i;
for (i = 370; i >= 60; i-=30) {
    A.beginPath();
    A.moveTo(74,i);
    A.lineTo(550,i);
    A.stroke();
}


A.font = "20px Verdanas";
A.fillStyle = "rgba(0, 0 , 0, 0.9)";
var x = 0;
for (i = 405; i >= 60; i-=30) {
    A.fillText(x, 53, i);
    x++;
}



/*var grad =ctx.createLinearGradient(30,200,40,300);
grad.addColorStop(0.0,'blue');
grad.addColorStop(1.0,'white');
ctx.fillStyle=grad;
var win = winter*20*(-1);
ctx.fillRect(31.1,279.5, 110,win);

var img2 = new Image();
img2.src = 'spr.png';
img2.onload = function () { 
        var c2 = document.getElementById("myCanvas");
        var ctx = c2.getContext("2d");
        ctx.fillStyle = ctx.createPattern(img2, 'repeat');          
        var spr = spring*20*(-1);
        ctx.fillRect(141.1,279.5, 110,spr);

};


*/
A.fillStyle = 'rgb(223, 179, 179)';
A.fillRect(130, 281, 60, 118);

A.fillStyle = 'rgb(191, 231, 172)';
A.fillRect(240, 71, 60, 328);

A.fillStyle = 'rgb(228, 176, 233)';
A.fillRect(350, 281, 60, 118);

A.fillStyle = 'rgb(160, 209, 238)';
A.fillRect(460, 0, 60, 399);

A.beginPath();
A.moveTo(490, 390);
A.lineTo(490, 20);

A.moveTo(484, 35);
A.lineTo(490, 20);

A.moveTo(496, 35);
A.lineTo(490, 20);
A.stroke();

A.fillStyle='rgba(0, 0 , 0, 0.75)';
A.font = "24px Verdana";
A.rotate(-Math.PI/2);
A.fillText("8" , -20, 500);

A.font = "23px Verdana";
A.fillText("Ваши  годики" , -300, 33);

A.font = "28px Verdana";
A.rotate(Math.PI/2);
A.fillText('Гистограмма', 215, 40);

A.font = "18px Verdana";

A.fillText("Детский" , 121, 425);
A.fillText("сад", 141, 445);

A.fillText("Школа", 239, 425);

A.fillText("ВУЗ", 362, 425);

A.fillText("Работа", 458, 425);


//
//
    

var myCanvas2 = document.getElementsByClassName("myCanvas2")[0];
myCanvas2.width = 600;
myCanvas2.height = 470;
var B = myCanvas2.getContext("2d");

B.beginPath();
B.strokeStyle = "rgba(0, 0, 0, 0.75)";
B.lineWidth = 8;
B.arc(200, 270, 135, 0, 2*Math.PI);
B.stroke();

B.beginPath();
B.fillStyle = "rgba(253, 226, 62, 0.65)";
B.arc(200, 270, 132, 0, Math.PI/180*105, false);
B.lineTo(200, 270);
B.fill();

B.beginPath();
B.fillStyle = "rgba(224, 110, 35, 0.65)";
B.arc(200, 270, 132, Math.PI/180*105, Math.PI/180*52.5 + Math.PI/180*105, false);
B.lineTo(200, 270);
B.fill();

B.beginPath();
B.fillStyle = "rgba(87, 217, 255, 0.65)";
B.arc(200, 270, 132, Math.PI/180*52.5 + Math.PI/180*105, Math.PI/180*52.5 + Math.PI/180*105 + Math.PI/180*75, false);
B.lineTo(200, 270);
B.fill();

B.beginPath();
B.fillStyle = "rgba(147,126,136, 0.65)";
B.arc(200, 270, 132, Math.PI/180*52.5 + Math.PI/180*105 + Math.PI/180*75, 0, false);
B.lineTo(200, 270);
B.fill();




B.fillStyle = "rgba(253, 226, 62, 0.65)";
B.fillRect(380, 180, 15, 15);

B.fillStyle = "rgba(224, 110, 35, 0.65)";
B.fillRect(380, 230, 15, 15);

B.fillStyle = "rgba(87, 217, 255, 0.65)";
B.fillRect(380, 280, 15, 15);

B.fillStyle = "rgba(147,126,136, 0.65)";
B.fillRect(380, 330, 15, 15);

B.font = "24px Verdana";
B.fillStyle='rgba(0, 0 , 0, 0.75)';

B.fillText("Сон", 420, 195);

B.fillText("Университет", 420, 245);

B.fillText("ДЗ/Лабы", 420, 295);

B.fillText("Остальное", 420, 345);

B.font = "28px Verdana";
B.fillText("Диаграмма", 235, 40);

B.font = "24px Verdana";
B.fillText("Куда же уходит мой день?", 140, 90);