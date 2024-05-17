let prod;
prod='<table border="1"><caption>Конструкция switch</caption>'
+'<td id="lev">'
+'<li><a>Синтаксис</a> <i>(имеет один или более блок(ов) case и необязательный '
+'парметр default)</i><br>'
+'switch(x){<br>'
	+'case "value1": //=if(x==="value")<br>'
		+'...<br>'
	+'   [break]<br>'
+'	case "value2": //=if(x==="value2")<br>'
		+'...<br>'
	  +' [break]<br>'
	+'default:<br>'
  +'      ...<br>'
+'[break]}	<br>'
+'<ul>'
+'<li type="disc">Переменная x проверяется на строгое равенство первому значению '
+'value1, затем второму value2 и так далее.</li>'
+'<li type="disc">Если соответствие установлено - switch начинает выполняться от '
+'соотвествующей директивы case и далее, до ближайшего break(или до конца switch).</li>'
+'<li type="disc">Ни один case не совпал - выполняется default(если указан).</li>'
+'</ul></li><li>'
+'<a>Пример работы</a><br>'
+'let a=2+2;<br>'
+'switch(a){<br>'
  +' case 3:<br>'
+'alert("malo"); break;<br>'
  +' case 4:<br>'
+'alert("verno"); break;<br>'
  +' case 5:<br>'
+'alert("mnogo"); break;<br>'
  +' default:<br>'
+'alert("bred");}   <i>//verno</i><br>'
+'</li><li><a>Без break</a><br>'
+'let a=2+2;<br>'
+'switch(a){<br>'
	+'case 3: alert("malo");<br>'
	+'case 4: alert("verno");<br>'
	+'case 5: alert("mnogo");<br>'
	+'default: alert("bred");<br>'
+'} <i>//verno mnogo bred</i><br>'
+'<i>Забавный момент:</i><br>'
+'let a="1"; <i>//!</i><br>'
+'let b=0;<br>'
+'switch(+a){<br>'
	+'case b+1:<br>'
	+'alert("proydet, +a=1 ");<br>' 
+'	break;<br>'
	+'default:<br>'
+'alert("net");} <i>//proydet, +a=1</i><br>'
+'</li><li><a>Меж прочим, case можно группировать</a><br>'
+'let a=3;<br>'
+'switch(a){<br>'
	+'&ensp;case 4:<br>'
+'	   &ensp;&ensp;alert("Verno!");<br>'
	  +' break;<br>'
	+'&ensp;&ensp;case 3: <i>//группируем case</i><br>'
+'&ensp;	case 5:<br>'
	+'   alert("neverno!");<br>'
+'	   alert("vali na mathematik!");<br>'
	  +' break;<br>'
	+'default: alert("stranno!");<br>'
+'}	<i>//neverno vali na mathematik</i><br>'
+'</li>'
	+'<ol><h5>Задачи</h5>'
+'<li><a>Напишите if, аналогичный switch</a><br>'
+'let a=prompt("browser","");<br>'
+'if(a=="Edge") {alert("this is Edje");}<br>'
+'else if(a=="Chrome"||a=="Firevox"||a=="Safari"||a=="Opera") {alert("poydot");}<br>'
+'else {alert("ne v kurse");} <i>//всё верно выдаёт</i><br></li><li>'
+'<a>Переписываем if на switch</a><br>'
+'const number=+prompt("givo number 0-3","");<br>'
+'switch(number){<br>'
 +'  case 0:alert ("null"); break;<br>'
  +' case 1:alert ("odin"); break;<br>'
+'   case 2:alert ("dva"); break;<br>'
  +' default: alert("no");<br>'
+'} <i>//всё верно выдаёт</i><br>'
+'else {alert("ne v kurse");} <i>//всё верно выдаёт</i><br>'
+'</li></ol>'
+'<ol><h4>Функции</h4>'
+'<a>Примеры встроенных функций: alert(message),prompt(massage,default),'
+' confirm(question) </a><i> или, как обычно, свои объявить</i><br>'
+'<li><a>Объявление функции</a><br>'
+'typa: <br>function showMessage(){<br>'
+'alert("Privet agentura");<br>}'
+'showMessage(); <i>//Privet agentura</i></li><li>'
+'<a>Локальные переменные</a><br>'
+'function showM(){<br>'
	+'let mes="Privet, I JS!"; <i>//переменная локальная</i><br>'
+'alert(mes);}<br>'
+'showM(); <i>//Privet, I JS!</i><br>'
+'alert(mes); <i>//вообще ничего не загрузил</i><br></li><li>'
+'<a>Внешние переменные</a><br>'
+'let userName="Goga";<br>'
+'function showM(){<br>'
	+'let mes="Hello, "+ userName;<br>'
+'alert(mes);}<br>'
+'showM(); <i>//Hello, Goga</i><br>'
+'<a>Ещё:</a><br>'
+'let userN="Goga";<br>'
+'function showM(){<br>'
	+'userN="Vazgen"; <i>//pomenjali</i><br>'
	+'let mes="privet, "+userN;<br>'
+'alert(mes);}<br>'
+'alert(userN); <i>//Goga (pered vizovom)</i><br>'
+'showM(); <i>//Privet, Vasgen</i><br>'
+'alert(userN); <i>//Vasgen (очень странная коснтрукция)</i><br>'
+'<i>в коде ниже показана работа использования функцией уже локальной переменной</i><br>'
+'let userN="Vazgen";<br>'
+'function showM(){<br>'
	+'let userN="Goga"; <i>//vnutri</i><br>'
	+'let mes="Privet, "+userN;<br>'
	+'alert(mes);<br>'
+'} showM(); <i>//Privet, Goga</i><br>'
+'alert(userN); <i>//Vazgen (snarugi)</i><br>'
+'<a>глобальные переменные видны из любой функции</a><br></li><li>'
+'<a>Параметры</a><br>'
+'<i>Выглядит это примерно так:</i><br>'
+'function showM(form,text){ <i>//param from,text</i><br>'
+'alert(form+": "+text);}<br>'
+'showM("Anna", "Privet!"); <i>//Anna: Privet!</i><br>'
+'showM("Anna","v porjadke?"); <i>//Anna: v porjadke?</i><br></li><li>'
+'<i>Покажем, как функция извне изменяет значение from</i><br>'
+'function showM(from,text){<br>'
	+'from="*"+from+"*"; <i>//украшение</i><br>'
	+'alert(from+": "+text);}<br>'
+'let from="Anna";<br>'
+'showM(from, "Hello"); <i>//*Anna*: Hello - !украшение есть</i><br>'
+'alert(from); <i>//Anna(логично, даже спорить не буду)</i><br>'
+'<a href="https://postimg.cc/z3BtHTrs"><img src="https://i.postimg.cc/Vs93TFHk/aip.png" width="380" hight="240"/>'
+'<ul><li type="disc">Параметр - переменная,указанная при объявлении</li>'
+'<li type="disc">Аргумент - значение, которое передаётся при вызове</li></ul>'
+'</li></ol>'
+'</td><td id="prav">'
  +'<a>А это наша правая колонка</a><br>'
    +'<ul><h4>export</h4> ставим:<br>'  
+'<li>перед объявлением переменных, функций и классов</li>'
+'<li>отдельно, при этом в фигурных скобках указывается, что именно экспортируется</li>'
+'</ul>'		
+'</td></table>'

document.write(prod);
 +'<table border="1"><caption>Зарезервированные слова</caption>'
+'<tr><td>abstract</td><td>else</td><td>instanceof</td><td>switch</td></tr>'
+'<tr><td>boolean</td><td>enum</td><td>int</td><td>synchronized</td></tr>'
+'<tr><td>brak</td><td>export</td><td>interface</td><td>this</td></tr>'
+'<tr><td>byte</td><td>extends</td><td>long</td><td>throw</td></tr>'
+'<tr><td>case</td><td>false</td><td>native</td><td>throws</td></tr>'
+'<tr><td>catch</td><td>final</td><td>new</td><td>transient</td></tr>'
+'<tr><td>char</td><td>finally</td><td>null</td><td>true</td></tr>'
+'<tr><td>class</td><td>float</td><td>package</td><td>try</td></tr>'
+'<tr><td>const</td><td>for</td><td>private</td><td>typeof</td></tr>'
+'<tr><td>continue</td><td>function</td><td>protected</td><td>var</td></tr>'
+'<tr><td>debugger</td><td>goto</td><td>public</td><td>void</td></tr>'
+'<tr><td>default</td><td>if</td><td>return</td><td>valatile</td></tr>'
+'<tr><td>delete</td><td>implements</td><td>short</td><td>while</td></tr>'
+'<tr><td>do</td><td>import</td><td>static</td><td>with</td></tr>'
+'<tr><td>double</td><td>in</td><td>super</td><td></td></tr>'
+'<tr><td></td><td></td><td></td><td></td></tr>'
+'</table>'
