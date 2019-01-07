var X = 0, Y = 0;

var A1, A2, A3, A4;
var B1, B2, B3, B4;

var a = "[src = '3.gif']";

function A1()
{
    A1 = setInterval("firstMove()", 1);
}
function firstMove()
{
    if(X > 300)
    {
        clearInterval(A1);
        A2 = setInterval("secondMove()", 1);
    }
    else
    {
        X++;
        Y += 1.7;
        $(a).css("margin-left", X + 'px');
        $(a).css("margin-top", Y + 'px');      
    }
}

function secondMove()
{
    if(X > 600)
    {
        clearInterval(A2);
        A3 = setInterval("thirdMove()", 1);
    }
    else
    {
        X++;
        Y -= 1.7;
        $(a).css("margin-left", X + 'px');
        $(a).css("margin-top", Y + 'px');     
    }
}

function thirdMove()
{
    if(X > 900)
    {
        clearInterval(A3);
        A4 = setInterval("fourthMove()", 1);
    }
    else
    {
        X++;
        Y += 1.7;
        $(a).css("margin-left", X + 'px');
        $(a).css("margin-top", Y + 'px');   
    }
}

function fourthMove()
{
    if(X > 1200)
        clearInterval(A4);
    else
    {
        X++;
        Y -= 1.7;
        $(a).css("margin-left", X + 'px');
        $(a).css("margin-top", Y + 'px');         
    }
}

function B1()
{
    B1 = setInterval("firstBackMove()", 1);
}

function firstBackMove()
{
    if(X < 900)
    {
        clearInterval(B1);
        B2 = setInterval("secondBackMove()", 1);
    }
    else
    {
        X--;
        Y += 1.7;
        $(a).css("margin-left", X + 'px');
        $(a).css("margin-top", Y + 'px');      
    }
}

function secondBackMove()
{
    if(X < 600)
    {
        clearInterval(B2);
        B3 = setInterval("thirdBackMove()", 1);
    }
    else
    {
        X--;
        Y -= 1.7;
        $(a).css("margin-left", X + 'px');
        $(a).css("margin-top", Y + 'px');    
    }
}

function thirdBackMove()
{
    if(X < 300)
    {
        clearInterval(B3);
        B4 = setInterval("fourthBackMove()", 1);
    }
    else
    {
        X--;
        Y += 1.7;
        $(a).css("margin-left", X + 'px');
        $(a).css("margin-top", Y + 'px');        
    }
}

function fourthBackMove()
{
    if(X < 0)
        clearInterval(B4);
    else
    {
        X--;
        Y -= 1.7;
        $(a).css("margin-left", X + 'px');
        $(a).css("margin-top", Y + 'px');         
    }
}