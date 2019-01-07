var X = 1400;
var A;
function A()
{
    A = setInterval("move()", 5);
}

function move()
{
    if (X == 0 )
    {
        clearInterval(A);
    }
    else 
    {
        X--;
        $("#gif2").css("margin-left", X + 'px');
    }
}
