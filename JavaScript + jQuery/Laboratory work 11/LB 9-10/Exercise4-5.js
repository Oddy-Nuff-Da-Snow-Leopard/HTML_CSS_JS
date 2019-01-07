function build()
{
    var f = document.forms[0].s.value;
    if (f == 1) f1();
    if (f == 2) f2();
    if (f == 3) f3();
    if (f == 4) f4();
}

function color(str)
{
    var color = document.forms[0].choice.value;
    if(color == 1) str += "<font color = black>";
    if(color == 2) str += "<font color = red>";
    if(color == 3) str += "<font color = blue>";
    if(color == 4) str += "<font color = green>";
    if(color == 5) str += "<font color = purple>";
    if(color == 6) str += "<font color = skyblue>";
    if(color == 7) str += "<font color = orange>";
    return str;
}

var w , h, x0, y0, kx, ky;
w = screen.width;
h = screen.height;
x0 = w/2; 
y0 = h/2; 
kx = w/15; 
ky = h/10; 

var i;
var str;

function f1()
{
    str = "";
   
    for (i = 450; i < w - 450 ; i += 7) 
        str += "<span style = 'top: " + y0 + "; left: " + i + "; color: rgb(236, 209, 175); '>_</span> ";
    for (i = 20; i < h - 400 ; i += 9)
        str += "<span style = 'left: " + x0 + "; top: " + i + "; color: rgb(236, 209, 175); '>|</span> ";

    str += color(str);
    for ( x = -2.15; x < 2.15; x += 0.002)
    {
        y = x * x;     
        str += "<span style = 'left: " + (x0 + kx * x) + "; top: " + (y0 - ky * y + 3) + "; '>.</span>";     
    }
    str += "</font>";
    document.getElementsByTagName('p')[0].innerHTML = str;
}


function f2()
{
    str = "";
    for (i = 450; i <= w - 450 ; i += 7) 
        str += ( "<span style = 'top: " + (y0 - 70) + "; left: " + i + "; color: rgb(236, 209, 175); '>_</span> " );
    for (i = 20; i <= h - 190 ; i += 9)
        str += ( "<span style = 'left: " + x0 + "; top: " + i + "; color: rgb(236, 209, 175); '>|</span> " );

    str += color(str);
    for ( x = -1.55; x < 1.6; x += 0.002)
    {  
        y = x * x * x;     
        str += ("<span style = 'left: " + (x0 + kx * x) + "; top: " + (y0 - 70 - ky * y + 3) + "; '>.</span>");     
    }   
    str += ("</font>")
    document.getElementsByTagName('p')[0].innerHTML = str;
}


function f3()
{
    str = "";
    for (i = 20; i <= w - 20 ; i += 7) 
        str += ( "<span style = 'top: " + (y0 - 70) + "; left: " + i + "; color: rgb(236, 209, 175); '>_</span> " );   
    for (i = 200; i <= h - 350 ; i += 9)
        str += ( "<span style = 'left: " + x0 + "; top: " + i + "; color: rgb(236, 209, 175); '>|</span> " );

    str += color(str);
    for ( x = -Math.PI*2 - 0.6; x < Math.PI*2 + 0.6; x += 0.002)
    {  
        y = Math.sin(x);     
        str += ("<span style = 'left: " + (x0 + kx * x) + "; top: " + (y0 - 70 - ky * y + 3) + "; '>.</span>");     
    }   
    str += ("</font>")
    document.getElementsByTagName('p')[0].innerHTML = str;
}


function f4()
{
    str = "";
    for (i = 20; i <= w - 20 ; i += 7) 
        str += ( "<span style = 'top: " + (y0 - 70) + "; left: " + i + "; color: rgb(236, 209, 175); '>_</span> " );   
    for (i = 150; i <= h - 350 ; i += 9)
        str += ( "<span style = 'left: " + x0 + "; top: " + i + "; color: rgb(236, 209, 175); '>|</span> " );
    str += color(str);
    for ( x = -Math.PI*2 - 0.6; x < Math.PI*2 + 0.6; x += 0.002)
    {  
        y = Math.cos(x);     
        str += ("<span style = 'left: " + (x0 + kx * x) + "; top: " + (y0 - 70 - ky * y + 3) + "; '>.</span>");     
    }   
    str += ("</font>")
    document.getElementsByTagName('p')[0].innerHTML = str;
}