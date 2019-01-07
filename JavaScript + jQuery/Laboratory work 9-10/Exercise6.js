document.getElementById('nav').onmouseover= function(event)
{
    var target = event.target;
    if (target.className == 'menu-item')
    {
        var s=target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}
document.onmousemove=function(event)
{
    var target = event.target;
    if (target.className!='menu-item' && target.className!='submenu')
    {
        closeMenu();
    }
}
function closeMenu()
{
    var menu=document.getElementById('nav');
    var subm=document.getElementsByClassName('submenu');
    for (var i=0; i<subm.length; i++)
    {
        subm[i].style.display="none";
    }
}