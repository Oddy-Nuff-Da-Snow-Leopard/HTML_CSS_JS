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
$("#gif1").mousedown(function(e){ 

    coords = getCoords(gif);
    shiftX = e.pageX - coords.left;
    shiftY = e.pageY - coords.top;

    function moveAt(e)
    {
        $("#gif1").css("left", e.pageX - shiftX - 600 + "px");
        $("#gif1").css("top", e.pageY - shiftY - 100 + "px");
    }

    // 2.Перемещать по экрану
    document.onmousemove = function(e)
    {
        moveAt(e);
    }

    // 3.Отследить окончание переноса
    $(this).mouseup(function()
    {
        document.onmousemove = null;
    });
});


var text = document.getElementById('text');

text.ondragstart = function()
{
    return false;
};

// 1.Отследить нажатие
$("#text").mousedown(function(e) 
{ 
    coords = getCoords(text);
    shiftX = e.pageX - coords.left;
    shiftY = e.pageY - coords.top;

    function moveAt(e)
    {
        $("#text").css("left", e.pageX - shiftX + "px");
        $("#text").css("top", e.pageY - shiftY + "px");
    }

    // 2.Перемещать по экрану
    document.onmousemove = function(e)
    {
        moveAt(e);
    }

    // 3.Отследить окончание переноса
    $(this).mouseup(function()
    {
        document.onmousemove = null;
    });
});