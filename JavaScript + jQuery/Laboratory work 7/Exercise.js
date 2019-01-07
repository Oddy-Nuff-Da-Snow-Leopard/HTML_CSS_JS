document.write("<form name = BSTUStudentProfile>");
document.write("<fieldset>");
document.write("<legend>Анкета учащегося БГТУ</legend>");
document.write("<textarea name = textarea>Факультет Информационных Технологий</textarea><br/>");
document.write("<input type = text name = surname value = Фамилия /><br/>");
document.write("<br/><input type = text name = name value = Имя /><br/>");
document.write("<br/>Специальность  <select name = choice >");
document.write("<option>ПОИТ</option>");
document.write("<option>ИСиТ</option>");
document.write("<option>ПОиБМС</option>");
document.write("<option>ДЭиВИ</option>");
document.write("</select><br/><br/><br/><br/><br/>");
document.write("Курс<br/>");
document.write("1<input type = radio name = course />  ");
document.write("2<input type = radio name = course />  ");
document.write("3<input type = radio name = course />  ");
document.write("4<input type = radio name = course />  ");
document.write("<br/><br/>Предметы<br/>");
document.write("<input type = checkbox name = exam1 />ОИТ ");
document.write("<input type = checkbox name = exam2 />АЛОЦВМ ");
document.write("<input type = checkbox name = exam3 />Математика ");
document.write("<input type = checkbox name = exam4 />Физика ");
document.write("<input type = checkbox name = exam5 />ОАиП ");
document.write("<br/><br/><input type = submit name = submit value = Отправить /> <input type = reset name = reset value = Очистить />");
document.write("<br/><br/><input type = button name = button value = Напечатать onclick = printing() />")
document.write("</fieldset>");
document.write("</form>");

function printing()
{ 
    newInset = open();
    text = new String("<p><u>" + document.forms[0].textarea.innerHTML + "</u></p>");
    text += "<p>Студент <u>" + document.forms.BSTUStudentProfile.elements[2].value + "</u> <u>" + document.forms[0].name.value + "</u>";
    text += " специальность <u>" + document.forms["BSTUStudentProfile"].choice.value + "</u>";
    text += " курс <u> " + document.forms[0].course.value + "</u> должен сдавать следующие предметы: </p>";
    text += "<ul>";
    if (document.forms["BSTUStudentProfile"].exam1.checked == true) text += "<li><u>ОИТ</u></li>";
    if (document.forms["BSTUStudentProfile"].exam2.checked == true) text += "<li><u>АЛОЦВМ</u></li>";
    if (document.forms["BSTUStudentProfile"].exam3.checked == true) text += "<li><u>Математика</u></li>";
    if (document.forms["BSTUStudentProfile"].exam4.checked == true) text += "<li><u>Физика</u></li>";
    if (document.forms["BSTUStudentProfile"].exam5.checked == true) text += "<li><u>ОАиП</u></li>";
    text += "</ul>";
    newInset.document.write(text);
}
