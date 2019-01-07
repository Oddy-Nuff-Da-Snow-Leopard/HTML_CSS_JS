var X = 1400;
var A;
function A()
{
    A = setInterval("move()", 5);
}

function move()
{
    var gif = document.getElementById("gif2");
    if (X == 0 )
    {
        clearInterval(A);
    }
    else 
    {
        X--;
        gif.style.marginLeft = X + "px";
    }
}
