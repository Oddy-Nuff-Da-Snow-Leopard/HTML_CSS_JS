//task1
document.write("<p><span>Задание №1</span></p><p class = 'task1'>Please, point at me :)</p>");
$(".task1").mouseover(function(){$(this).css("color","rgb(0, 162, 255)")});
$(".task1").mouseout(function(){$(this).css("color","rgb(194, 164, 211)")});

//task2
document.write("<p><span>Задание №2</span></p><p class = 'task2'>Click here, mortal</p>");
$(".task2").click(function(){$(this).css("font-size","34px").css("color","rgba(230, 100, 208, 0.658)")});
$(".task2").mouseout(function(){$(this).css("font-size","25px").css("color","rgb(194, 164, 211)")});

//task3
document.write("<p><span>Задание №3</span></p><p class = 'nonstandart'>Click on the GIF pic to change it<br/>And another one to return the initial GIF pic</p><p><img class = 'task3' src='1.gif'/></p>");
$(".task3").click(function()
{
    var src;
    if($(this).attr("src") == "1.gif")
        src = "2.gif";
    else
        src = "1.gif"
    $(this).attr("src",src)
});

//task4
document.write("<p><span>Задание №4</span></p><p class = 'task4 nonstandart' />Click here to change the text to an image</p>");
$(".task4").click(function(){$(this).replaceWith("<img src = '3.gif' />");});

//task5
document.write("<p><span>Задание №5</span></p><img src = '4.gif' />");
$("[src = '4.gif']").mouseover(function(){$(this).css("width", "180px").css("height", "180px");});
$("[src = '4.gif']").mouseout(function(){$(this).css("width", "150px").css("height", "150px");});

//task6
document.write("<p><span>Задание №6</span></p><p class = 'task6 frame'>Double click here to make a frame!<br>And click to remove the frame!</p>");
$(".task6").dblclick(function(){$(this).css("width", "360px").css("padding", "6px").css("border", "3px solid rgb(150, 20, 80)").css("border-radius", "15px");});
$(".task6").click(function(){$(this).css("border", "none");});