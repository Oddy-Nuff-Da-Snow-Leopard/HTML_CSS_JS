$("#main").mouseover(function(event)
{
    var target = event.target;
    if (target.className == 'menu-item')
    {
        var s = target.getElementsByClassName('submenu');
        $(s).css("display", "block");
    }
});

$(document).mousemove(function(event)
{
    var target = event.target;
    if (target.className != 'menu-item' && target.className != 'submenu')
        closeMenu();
});

function closeMenu()
{
    var s = document.getElementsByClassName('submenu');
    for (var i = 0; i < s.length; i++)
        $(s).css("display", "none");
}