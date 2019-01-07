var coords, shiftX, shiftY;

function getCoords(elem) 
{
    var box = elem.getBoundingClientRect();
    return { top: box.top + pageYOffset, left: box.left + pageXOffset };
}


var gif = document.getElementById('gif1');

gif.ondragstart = function()
{
    return false;
};

// 1.Отследить нажатие
gif.onmousedown = function(e) 
{ 
    coords = getCoords(gif);
    shiftX = e.pageX - coords.left;
    shiftY = e.pageY - coords.top;

    function moveAt(e)
    {
        gif.style.left = e.pageX - shiftX - 600 + 'px';
        gif.style.top = e.pageY - shiftY - 100 + 'px';
    }

    // 2.Перемещать по экрану
    document.onmousemove = function(e)
    {
        moveAt(e);
    }

    // 3.Отследить окончание переноса
    gif.onmouseup = function()
    {
        document.onmousemove = null;
        gif.onmouseup = null;
    }
}


var text = document.getElementById('text');

text.ondragstart = function()
{
    return false;
};

// 1.Отследить нажатие
text.onmousedown = function(e) 
{ 
    coords = getCoords(text);
    shiftX = e.pageX - coords.left;
    shiftY = e.pageY - coords.top;

    function moveAt(e)
    {
        text.style.left = e.pageX - shiftX + 'px';
        text.style.top = e.pageY - shiftY + 'px';
    }

    // 2.Перемещать по экрану
    document.onmousemove = function(e)
    {
        moveAt(e);
    }

    // 3.Отследить окончание переноса
    text.onmouseup = function()
    {
        document.onmousemove = null;
        text.onmouseup = null;
    }
}