var err;
try{
alert("Начало блока try");
esketit;
alert("Конец блока try");
}catch(err){
    alert("Ошибка " + err.name + ": " + err.message);
}
alert("Продолжение кода...");