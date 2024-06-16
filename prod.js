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
+'<img src="https://i.postimg.cc/Vs93TFHk/aip.png" width="380" hight="240"/>'
+'<ul><li type="disc">Параметр - переменная,указанная при объявлении</li>'
+'<li type="disc">Аргумент - значение, которое передаётся при вызове</li></ul></li><li>'
+'<a>Значение по умолчанию</a><br> showM("Anna"); <i>типа пример</i><br>'
+'<i>Но зададим полностью:</i><br>'
+'function showM(from,text="ничего не пишем"){<br>'
	+'alert(from+": "+text);<br>'
+'} showM("Anna"); <i>//Anna: ничего не пишем(смешно)</i><br></li><li>'
+'<a>Явная проверка не undefined</a><br>'
+'function showM(from,text){<br>'
+'	if(text===undefined){<br>'
		+'text="text no";}<br>'
	+'alert(from+": "+text);}<br>'
+'showM(); <i>//undefined: text no (как интересно)</i><br>'
+'function showM(from,text){<br>'
	+'<i>//...bla,bla</i><br>'
	+'text=text||"text no";<br>'
	+'alert(text);<br>'
+'} showM(); <i>//text no</i><br></li><li>'
+'<a>Альтернативные парметры по умолчанию<img '
+'src="https://i.postimg.cc/FdK47BVL/image.png" width="340"/></a><br>'
+'<i>Присваиваем значение потом:</i><br>'
+'function showM(text){<br>'
+'	if(text===undefined){ <i>//если параметра нет</i><br>'
	  +'text="no text";<br>'
	+'}alert(text);<br>'
+'}showM(); <i>//no text(ну, так и должно быть)</i><br>'
+'</li></ol>'
+'<ul><h4>Возврат значения</h4><li><i>Простейший пример:</i><br>'
+'function sum(a,b){<br>'
   +'return a+b;}<br>'
  +' let result=sum(12,23);<br>'
+'   alert(result); <i>//35</i><br>'
+'<a>вызовов return может быть больше одного<br><center>(покажем это)</center></a><nobr>'
+'function checkA(age){<br>'
+'	if(age>=18){<br>'
	+'(1)	return true;<br>'
+'	}else{<br>'
	+'(2)	return confirm("rodaki znajut?");<br>'
+'}}<br>'
+'let age=prompt("skoka let?",18);<br>'
+'if(checkA(age)){<br>'
	+'alert("dostup");<br>'
+'	}else{<br>'
	+'	alert("idi, klop");<br>'
+'		}<i>//программа пропустит в любом случае, если скажешь, что предки знают</i><br>'
+'<i>return без значения - моментальный выход из функции</i><br>'
+'function showM(age){<br>'
	+'if(!checkA(age)){<br>'
	+'return;}else{<br>'
+'alert("Вы смотрите телевизор");<br>'
+'}} <i>//ничего не загрузилось</i><br></li><li>'
+'<a>Обязательно надо показать как работает<br>'
+'оператор нулевого слияния</a><br>'
+'function showC(count){<br>'
	+'<i>//null || undefined -> неизвестно</i><br>'
	+'alert(count ?? "Неизвестно");<br>'
+'}<br>'
+'showC(0); <i>//0</i><br>'
+'showC(null); <i>//Неизвестно</i><br>'
+'showC(); <i>//Неизвестно (всё правильно)</i><br></li><li>'
+'<a>Возврат значения</a><br>'
+'результат возвращается к источнику и используется там<br>'
+'function sum(a,b){<br>'
	+'return a+b;<br>'
+'} let result=sum(8,9);<br>'
+'alert(result); <i>//17</i><br></li>'
+'<li><a>Итог</a><ul>'
+'объявление функции имеет вид:<br>'
+'function имя(параметры,через,запятую){<br>'
+'&ensp;/*тело,код функции*/<br>}<br>'
+'<li type="square">Функции имеют доступ к внешним параметрам изнутри наружу</li>'
+'<li type="square">значения копируются в значения и становятся локальными</li>'
+'<li type="square">функция возвращает значение, иначе undefined</li>'
+'<i>есть следующие принципы имён функций</i><br>'
+'<li type="square">Имя функции чётко и понятно отображает её суть</li>'
+'<li type="square">Так как обычно это действие, то название часто является глаголом</li>'
+'<li type="square">Общепринятые префиксы: create.., show.., get.., check</li>'
+'</ul></li><hr><h5>заслушаем клоунов</h5>'
+'<br>?. let age=prompt("skoka let? ","");<br>'
  +' function checkA(age){<br>'
	+'   return(age>18)?true:confirm("Predki znajut? ");<br>'
   +'} checkA(age); <i>//работает</i><br>'
+'||.<i> - не идёт</i> '
+'</li>'
+'</ul>'
+'</td><td id="prav">'
  +'<a>А это наша правая колонка</a><br>'
    +'<ul><h4>export</h4> ставим:<br>'  
+'<li>перед объявлением переменных, функций и классов</li>'
+'<li>отдельно, при этом в фигурных скобках указывается, что именно экспортируется</li>'
+'</ul>'
+'<ol><h4>Функции</h4><i>(продолжаем)</i><br>'
+'<li>Function Expression<br>'
+'<i>объявление:</i><br>'
+'let sayHi=function(){<br>'
  +' alert("good");<br>'
+'   }; sayHi();<i>//good</i><br>'
+'<i>Тут переменная sayHi() полчает значение от function(){alert("text");}</i><br>'
+'<a>Так как функция является занчением, то:</a><br>'
+'function sayHi(){<br>'
	+'alert("Balbes");<br>'
+'} alert(sayHi); <i>//тут был произведён вывод кода</i><br>'
+'<i>(!) в js c функцией можно работать как со значением</i><br>'
+'function sayH(){ <i>//(1) создаём</i><br>'
  +' alert("Nonsens");}<br>'
+'let func=sayH; <i>//(2) копируем</i><br>'
+'func(); <i>//(3) Nonsens(это копия)</i><br>'
+'sayH(); <i>// Nonsens тоже (оригинал)</i><br>'
+'<ol><i>Ща, тут всё подробно разберём</i><br>'
+'<li>Function Declsration (1) создаёт функцию и помещает её в sayH</li>'
+'<li>В строке (2) её значение копируется в переменную func. Обращаем '
+'внимание, что скобок после sayH нет. Иначе бы в func был записан '
+'результат вызова sayH(), а не саму функцию</li>'
+'<li>О, чудо фнкции sayH() и func() идентичны</li></ol>'
+'<i>для объявления её тоже можно использовать:</i><br>'
+'let sayH=function(){ <i>//typa sozdali</i><br>'
+'alert("zdorovo");}<br>'
  +' let func=sayH;<br>'
+'   func(); <i>// zdorovo</i><br>'
+'<i>не забываем также, что в случае с Function Declaration ставится '
+'ставится точка с запятой(нужно для простоты кода)</i><br></li>'
+'<li><a>Функции - "колбэки"</a><br>'
+'Делаем так: пишем ask(question,yes,no), где<br>'
+'<a>question </a>- Текст вороса<br>'
+'<a>yes </a> - функция при ответе yes<br>'
+'<a>no</a> - функция при ответе no<br>'
+'<i>поехали: </i><br>'
+'function ask(question,yes,no){<br>'
	+'if(confirm(question))yes()<br>'
	+'	else no();}<br>'
+'function showO(){alert("ladno");}<br>'
+'function showC(){alert("otkaz");}<br>'
+'<i>//теперь функции showO и showC передаются в качетве аргумента</i><br>'
+'ask("otoydi",showO,showC); <i>//да, вопрос и два ответа</i><br>'
+'<a>аргументы showO и showC функции ask называются функциями-колбэками</a><br>'
+'<i>Можно и проще:</i><br>'
+'function ask(quest,yes,no){<br>'
	+'if(confirm(quest))yes()<br>'
+'else no();}<br>'
+'ask("Ты трезвый?",<br>'
    +'function(){alert("prohodi")},<br>'
	+'function(){alert("ne-a")}<br>'
+'	); <i>//реакция правильная</i><br></li><li>'
+'<h5>Учимся oтличать Function Declaration от Function Expression</h5><br>'
+'<ul><li type="disc"><i>Function Declaration</i><br>'
+'function sum(a,b){<br>'
+'&ensp;return a+b;}'
+'</li><li type="disc"><i>Function Expression</i><br>'
+'let sum=function(a,b){<br>'
+'&ensp;return a+b;<br>'
+'}; <i>//после всего выражения ставится ещё одна ;</i><br>'
+'</li></ul>'
+'Ещё важное отличие: <b>Function Expression создётся, когда выполнение доходит '
+'до него и затем уже может использоваться</b><br>'
+'<i>C Functioln Declaration всё обстоит иначе</i><br>'
+'<b>Function Declaration может(!) быть вызвана раньше, чем она объявлена</b><br>'
+'sayHi("Diana"); //Privet, Diana <i>уже вызвана</i><br>'
+'function sayHi(name){<br>'
	+'alert(`Privet, ${name}`);<br>'
+'} <i>//тут ничего нет</i><br>'
+'C Function Expression такой код вызвал бы ошибку<br>'
+'<a>Ещё маленькое дополнение: в строгом режиме, когда Function Declaration '
+'нахзодится в блоке {...}, функция доступна везде внутри блока, но не снаружи его.</a><br>'
+'<i>вот пример: </i><br>'
+'let age=prompt("skoka let? ",""); <i>//primer</i><br>'
+'if(age<18){<br>'
+'	welcome();           <i>  // \ (выполнится)</i><br>'
	+'function welcome(){  <i>//  |</i><br>'
+'	alert("Privet ");}     <i>//  |</i><br>'
	+'	welcome();         <i>// / (тоже сработает)</i><br>'
+'}else{<br>'
	+'function welcome(){<br>'
	+'	alert("Zdorovo")<br>'
+'}} <i>//скобочка закрывается и...</i><br>'
+'welcome(); <i>//Если менее 18, то три "привета" зараз</i><br>'
+'<i>Делаем так, чтобы функция была видна снаружи if. <a>Смотрим:</a></i><br>'
+'<a href="https://postimg.cc/MvzJwtmT">'
+'<img src="https://i.postimg.cc/MvzJwtmT/image.jpg" width="300" hight="20000"></a>'
+'let kol=prompt("Skoka tebe piva? ",18);<br>'
+'let welcome;<br>'
+'if(kol<18){<br>'
  +' welcome=function(){<br>'
    +'   alert("Malo!");<br>'
   +'}; <i>//!</i><br>'
   +'}else{<br>'
+'welcome=function(){<br>'
  +' alert("Bery!");<br>'
   +'};}<br>'
+'welcome(); <i>// да, всё верно показывает</i><br>'
+'<i>Ещё проще сделаем. Используем оператор ?:</i><br>'
+'let kol=prompt("Skoka piva?",18);<br>'
+'let welcome=(kol<18)?<br>'
   +'function(){alert("Malovato!");}:<br>'
  +' function(){alert("Pouydet");};<br>'
+'welcome(); <i>//работает</i>   <br>'
+'</li><ul><a>Забабахаем итог:</a>'
+'<li type="disc">Функции - это значения. Они могут быть присвоены, '
+'скопированы или объявлены в любом месте кода.</li>'
+'<li type="disc">Если функция объявлена как отдельная инструкция в основном '
+'потоке кода, то это "Function Declaration".</li>'
+'<li type="disc">Если функция была создана как часть выражения, то это '
+'"Function Expression0".</li>'
+'<li type="disc">Function Declaration обрабатываются перед выполнением '
+'блока кода. Они видны во всём блоке.</li>'
+'<li type="disc">Функции, объявленные при помощи Function Expression '
+'создаются только когда поток выполнения достишгает их.</li>'
+'</ul>'
+'<i>И последнее: </i><a>Function Declafation предпочтительнее</a><br>'
+'<a><img src="https://i.postimg.cc/4H7DLF64/func.jpg"><br>Наслаждаемся</a>'
+'<br><i href="https://postimages.org"><img src="https://i.postimg.cc/52Yd8RxN/gdn.jpg"><br>Ещё картинку вставим:</i>'
+'</ol>'		
+'</t0d></table>'

document.write(prod);
 +'<table border="1"><caption>Зарезервированные слова</caption>'
+'<tr><td>abstract</td><td>else</td><td>instanceof</td><td>switch</td></tr>'
+'<tr><td>boolean</td><td>enum</td><td>int</td><td>synchronized</td></tr>'
+'<tr><td>brak</td><td>export</td><td>interface</td><td>this</td></tr>'
+'<tr><td>byte</td><td>extnds</td><td>long</td><td>throw</td></tr>'
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
