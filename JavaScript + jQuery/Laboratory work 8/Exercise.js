var str = new String();

//task1
str = '<p><span>Задание №1</span></p><p id = "task1">Please, point at me :)</p>';
document.write(str);
task1.onmouseover = function ()
{
    this.style.color = "rgb(0, 162, 255)";
}
task1.onmouseout = function ()
{
    this.style.color = "rgb(194, 164, 211)";
}

//task2
str = '<p><span>Задание №2</span></p><p id = "task2">Click here, mortal</p>';
document.write(str);
task2.onclick = function ()
{
    this.style.fontSize = "34px";
    this.style.color = "rgba(230, 100, 208, 0.658)";
}
task2.onmouseout = function ()
{
    this.style.fontSize = "25px";
    this.style.color = "rgb(194, 164, 211)";
}

//task3
str = '<p><span>Задание №3</span></p><p class = "nonstandart">Click on the GIF pic to change it<br/>Double click to return the initial GIF pic</p><p><img id = "task3" src="1.gif" onclick = "imageChange()" ondblclick = "imageComeback()" /></p>';
document.write(str);
function imageChange()
{
    document.getElementById("task3").src = "2.gif";
}
function imageComeback()
{
    document.getElementById("task3").src = "1.gif";
}

//task4
str = '<p><span>Задание №4</span></p><p id = "task4" class = "nonstandart" onclick = "textChange()" ondblclick = "textComeback()" />Click here to change the text to an image<br/>Double click to return text back</p>';
document.write(str);
function textChange()
{
    document.getElementById("task4").innerHTML = '<img src = "3.gif" />';
}
function textComeback()
{
    document.getElementById("task4").innerHTML = '<p class = "nonstandart">Click here to change the text to an image<br/>Double click to return text back</p>';
}

//task5
str = '<p><span>Задание №5</span></p><img id = "task5" src="4.gif" />';
document.write(str);
task5.onmouseover = function ()
{
    this.style.width = "180px";
    this.style.height = "180px";
}
task5.onmouseout = function ()
{
    this.style.width = "150px";
    this.style.height = "150px";
}

//task6
str = '<p><span>Задание №6</span></p><p id = "task6" class = "frame">Double click here to make a frame!<br>And click to remove the frame!</p>';
document.write(str);
task6.ondblclick = function ()
{
    this.style.width = "410px";
    this.style.padding = "2px";
    this.style.border = "3px solid rgb(63, 63, 172)";
    this.style.borderRadius = "15px";
    this.style.boxShadow = " 0 0 15px 1px rgb(63, 63, 172)";
}
task6.onclick = function ()
{
    this.style.border = "none";
    this.style.boxShadow = "none";
}