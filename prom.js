let prom;
prom='<table><td id="kr"></td><td id="levcool">'

	+'<ul><h4>Конструкция "switch"</h4>'
	+'<i>switch заменяет собой сразу несколько if</i><br>'
	+'<li><i>Выглядит таким вот образом: </i><br>'
	+'switch(x){<br>'
		+'case "value1": <i>//if(x==="value1")</i><br>'
			+'...<br>'
		   +'[break]<br>'
		+'case "value2": <i>//if (x==="value2")</i><br>'
			+'...<br>'
		   +'[break]<br>'
		+'default:<br>'
          +' ...<br>'
          +' break;}<br>'		   
	+'<ul><a>Всё выглядит следующим образом:</a><br>'
	+'<li type="disc">Переменная х проверяется на строгое равенство первому значению '
	+'value1, затем второму value2 и так далее.</li>'
	+'<li type="disc">Если соответствие установлено - switch начинает выполняться от '
	+'соответствующей директивы case и далее, до ближайшего break(или до конца switch).</li>'
	+'<li type="disc">Если ни один case не совпал - выполнятеся(если есть) вариант default.</li>'
	+'</ul>'
	+'</li><li>'
	+'<a>Покажем пример работы</a><br>'
	+'let a=2+2;<br>'
	+'switch(a){<br>'
		+'case 3:<br>'
		  +' alert("malo");<br>'
		   +'break;<br>'
		+'case 4:<br>'
          +' alert("vozmogno");<br>'
           +'break;<br>'
        +'case 5:<br>'
          +'  alert("mnogo");<br>'
            +'break;<br>'
       	+'default:<br>'
          +'   alert("ne symbol");}<br>'			 
	+'</li><li><a>Без break</a><br>'
	+'let a=2+2;<br>'
	+'switch(a){<br>'
		+'case 3:<br>'
		  +' alert("malo");<br>'
		+'case 4:<br>'
          +'  alert("ono");<br>'
        +'case 5:			<br>'
	      +'  alert("mnogo");<br>'
		+'default:<br>'
          +'  alert("ne symbol");<br>'
	+'} <i>//ono, mnogo, ne symbol</i><br></li><li>'
+'<a>Группируем "case"</a><br>'
+'let a=3;<br>'
+'switch (a){<br>'
 +'case 4:<br>'
    +'alert("verno");<br>'
    +'break;<br>'
  +'case 3: <i>//группируем</i><br>'
  +'case 5:<br>'
+'    alert("neud");<br>'
    +'alert("givo an mathematik");<br>'
  +'  break;<br>'
+' default:<br>'
  +'  alert("stranno");<br>'
+'} <i>//neud, givo an mathematik</i><br>'
	+'<a>Меж прочим для switch/case любое выражение может быть аргументом</a><br>'
+'let a="1";<br>'
+'let b=0;<br>'
+'switch(+a){<br>'
+'case b+1: alert("пойдёт, т.к +а будет 1, что равно b+1");<br>'
  +'        break;<br>'
+'default: alert("Нет");<br>'
+'}<i>//так и есть</i><br></li><li>'
+'<a>Группировка "case"</a><br>'
+'let a=3;<br>'
+'switch (a){<br>'
  +' case 4: alert("verno!"); break;<br>'
+'case 3: <i>//Группируем два case</i><br>'
+'case 5:<br>'
+'   alert("neverno");<br>'   
	+'alert("duy an mathematik");<br>'
  +'  break;<br>'
+'default: alert("strano");<br>'
+'}	<i>//без break объединил два ответа(один верный, но говорит обратное)</i><br>'
+'<a>А тип-то тоже имеет значение</a><br>'
+'let arg=prompt("Number? ","");<br>'
+'switch (arg){<br>'
	+'case "0":<br>'
	+'case "1": alert("1 || 0"); break;<br>'
	+'case "2": alert("Two"); break;<br>'
	+'case 3: alert("nikogda!"); break; <i>//не понимает этого</i><br>'
+'default: alert("inkognito");<br>'
+'} <i>//да, всё правильно выдаёт(как использовать...)</i><br>'
+'<ol>'
+'<li>Для "0" и "1" выполнятися первый alert</li>'
+'<li>Для "2" - второй alert</li>'
+'<li>Но для "3", результат выполнения prompt будет строкой "3", которая '
+'не соответствует строгому равенству === с числом 3. Таким образом, '
+'мы имеем "мёртвый код" в case 3! Выполнится вариант default</li>'
+'</ol></li>'
	+'<li><a>if an switch</a><br>'
+'const number=+prompt("Быстро введи от 0 до 3");<br>'
+'switch(number){<br>'
	+'case 0: alert("это 0"); break;<br>'
	+'case 1:<br>'
	+'case 2: alert("то-ли 1, то-ли 2"); break;<br>'
	+'case 3: alert("finish"); break;<br>'
	+'default: alert("vse ostalnye");<br>'
+'} <i>//выдаёт всё правильно</i> <br>'
+'<i>break ставим везде, даже если не хотим</i></li>'
	+'</ul>'
	+'<ol><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xyC4AqxeApx96fMDO8-XocH1Rk2Swrmh4w&s"><h4>Функции</h4></img>'
	+'<li><a>Объявление функции</a>'
	+'<br>function showMessage(){<br>'
	+'	alert("Hello, world!");}<br>'
	+'showMessage();<i>//Hello, world!</i></li>'
	+'<li><a>Переменные видны только внутри функции</a><br>'
	+'function showMessage(){<br>'
		+'let message="Привет, я лунатик!"; <i>//локальная переменная</i><br>'
	+'alert(message);}<br>'
	+'showMessage(); <i>//Привет, я лунатик!</i><br>'
	+'alert(message); <i>//тут просто остановилась</i><br>'
	+'</li>'
	+'<li><a>Внешние переменные</a><i> (есть и такой вид доступа)</i><br>'
	+'let userName="Dina";<br>'
	+'function showMessage(){<br>'
		+'let message="Hello, "+userName;<br>'
	+'alert(message);}<br>'
	+'showMessage(); <i>//Hello, Dina</i><br>'
	+'<a>Внешние переменные полностью подчинены функции</a><br>'
	+'let user="Dina";<br>'
	+'function ShowM(){<br>'
		+'user="Dasha"; <i>//меняем</i><br>'
		+'let message="Privet, "+user;<br>'
	+'alert(message);}<br>'
	+'alert(user); <i>//Dina (перед вызовом)</i><br>'
	+'ShowM(); <i>// Privet, Dasha (сам вызов)</i><br>'
	+'alert(user); <i>//Dasha (после вызова)</i><br>'
	+'<i>Если функция объявлялась внутри, то внешняя её не трогает</i><br>'
	+'let user="Dina";<br>'
+'	function showM(){<br>'
		+'let user="Petr"; <i>//внутри</i><br>'
	+'	let message="Привет, "+user;<br>'
+'		alert(message);}<br>'
		+'showM(); <i>//Privet, Petr (бардак)</i><br>'
	+'	alert(user); <i>//Dina (логично)</i><br>'
      +'<a><center>Внешняя переменная используется, если нет локальной</center></a>'
+'let userN="Dina";<br>'
+'function showM(){<br>'
   +'let userN="Lena"; <i>//локальная переменная</i><br>'
  +' let message="Привет, "+userN;<br>'
+'alert(message);<br>'
+'}showM();  <i>// Привет, Lena(!)</i><br>'
+'alert(userN); <i>//Dina (внешняя переменная не тронута)</i><br></li>'
	+'<li><h4>Параметры</h4>'
	+'function showM(from,text){ <i>//text и from - параметры</i><br>'
	  +' alert(from + ": " + text);<br>'
	+'}<br>'
	+'showM("Dina","hello!"); <i>//Dina: hello!</i><br>'
	+'showM("Dina", "Kartina?"); <i>//Dina: Kartina?</i><br>'
	+'<i>Немного исказим жейтсвительность</i><br>'
	+'function showM(from,text){<br>'
		+'from="*" + from + "*"; <i>//извратим действительность</i><br>'
		+'alert(from +": " +text);<br>'
	+'}let from="Anna";<br>'
	+'showM(from,"Hello!"); <i>//*Anna*: Hello! (знак адреса остался. С двух сторон)</i><br>'
	+'<ul><i>Для тех, кто в танке:</i><br>'
	+'<li>Параметр - это переменная, указанная в круглых скобках в '
	+'объявлении функции</li>'
	+'<li>Аргумент - это значение, которое передаётся функции при её вызове.</li>'
	+'&ensp;showM объявляется с двумя параметрами и вызывается с аргументами: <a style="margin-left:0">from и "Hello!"</a></ul></li>'
	+'<li><b>Значения по умолчанию</b><br>'
	+'<i>функция showM(user,text) может быть вызвана с одним аргументом:</i><br>'
	+'<a>showM("Dina");</a><br>Смотрим:<br>'
	+'function showM(from,text="pusto"){<br>'
		+'alert(from+ ": " +text);<br>'
	+'}showM("Dina"); <i>//Dina: pusto</i><br>'
	+'</li>'
	+'<li>Вычисление параметров по умолчанию: в js если в примере выше не будет '
	+'указан параметр text, то будет вызвана любая указанная функция.<br>'
	+'&ensp;<i>проверка на undefined:</i><br>'
	+'function ShowM(from,text){<br>'
		+'if(text===undefined){<br>'
		+'text="pusto";}<br>'
	+'alert(from + ": " + text);} <i>//до кода всё загрузилсоь</i><br>'
	+'&ensp;При помощи оператора ||<br>'
	+'function showM(from,text){<br>'
		+'text=text||"netu";<br>'
	+'}showM(); <i>//опять только до кода</i><br></li>'
	+'<li><a style="font-size:17px">Альтернативные параметры по умолчанию</a><br>'
	+'function showM(text){<br>'
		+'if(text===undefined){ <i>//параметра нет</i><br>'
		+'text=text||"pusto";}<br>'
	+'alert(text);}<br>'
	+'showM(); <i>//pusto (надо-же, а писанины...)</i><br>'
	+'<a>Есть поддержка оператора нулевого слияния</a><br>'
	+'function showC(count){<br>'
	  +' alert(count ?? "inkognito"); <i>//смотрим</i><br>'
	+'}showC(0); <i>//0</i><br>'
	+'showC(null); <i>//inkognito</i><br>'
	+'showC(); <i>//inkognito</i><br>'
	+'</li></ol>'		
+'</td><td id="lpcool">'
+'</td><td id="pravcool">'
	 +'<ul><h4>Логические !обераторы</h4>'
  +'<li>|| = ИЛИ(логический +)</li>'
  +'<li>&& = И (логическое *)</li>'
  +'<li>! = НЕ (инверсия)</li>'
  +'<li>?? = (нулевое слияние)</li></ul>'
 +'<a>||= (логическое присваивание ИЛИ)</a><br>'
 +'<i>||= принмает два операнда и получается:</i>'
 +'<ul>'
 +'<li type="disc">Вычисляет операндны слева направо</li>'
 +'<li type="circle">Конвертирует в логическое значение</li>'
 +'<li type="square">Если а ложно, присваивает а значение b.</li></ul><hr>'
 +'alert(1 && 0);<i>//0</i><br>'
+'alert(1 && 5);<i>//5</i><br>'
+'alert(null && 5); <i>//null</i><br>'
+'alert(5 && "какая-то строка"); <i>//какая -то строка</i><hr>'
+'alert(1&&null&&3); <i>//null (можно несколько значений указать)</i><br>'
  +'alert(2&&4&&6); <i>//6 (если всё верно, то возврат последней)</i><br>'
  +'<a>! приоритет оператора &&И выше, чем у ||ИЛИ (поэтому выполняется раньше)</a><br>'

  +'<li>let year=prompt("В каком году был открыт JS?"," ");<br>'
+'if(year==2015) alert("это правильно");<br>'
+'else if(year<2015) alert("да, нет-же!");<br>'
+'else if(year>2015) alert("С чего ты взял?");<br>'
+'<i>Везде правильный ответ</i><br>'
  +'let age=prompt("Сколько лет?","");<br>'
+'let message=(age<3)?"привет, малыш":<br>'
  +' (age<18)?"привет, кент":<br>'
   +'(age<100)?"доброго здоровьичка":<br>'
   +'"вот это возрастина";<br>'
   +'alert(message);<br>'
   +'<i>Аналогично</i><br>'
  +'let age=prompt("Сколько лет?","");<br>'
   +'if(age<3){message="привет,малыш";<br>'
   +'}else if(age<18){message="здарова, кентяра";<br>'
   +'}else if(age<100){message="добрый день";<br>'
   +'}else{message="шутишь...";}<br>'
   +'alert(message);<br>'
   +'<i>пойдёт</i><br></li><li>'
   +'<a>Нетрадиционное использование "?"</a><br>'
   +'let company=prompt("Кто создал JS","");<br>'
   +'(company=="Netscape")?alert("verno"):alert("bred");<br>'
   +'<i>if/else вместо оператора ?</i><br>'
   +'let ff=prompt("of name js","");{<br>'
   +'if(ff=="ECMAScript"){alert("verno");}<br>'
  +' else{alert("bred");}<br>'
  +'</li><li><a>Кто ты?</a><br>'
+'let login=prompt("we do? ","");<br>'
+'let message=(login=="Сотрудник")?"Privet":<br>'
          +'  (login=="Директор")?"Good day":<br>'
		+'	(login=="Охрана")?"Zdorovo":<br>'
	+'		"Ne nash";<br>'
+'alert(message);<br>'
+'   }<br>'
+'</li>'
	 +'<ul><h4 style="margin-left:5%">Операторы нулевого слияния и присваивания: <a>??,??=</a></h4>'
  +'<li><a>Оператор нулевого слияния ??</a><br>'
  +'result=a ?? b, то-же самое, что<br>'
  +'result=(a!==null&&a!==undefined)?a:b<br>'
  +'let user;<br>'
  +'alert(user ?? "Anonim");<br>' 
  +'<i>//Anonim (user no)</i><br>'
  +'<i>А тут значение узеру присвоено:</i><br>'
  +'let user="Ivan";<br>'
  +'alert(user ?? "Anonim"); <i>//Ivan</i><br>'
  +'<i>Ещё одна приблуда</i><br>let firstName=null;<br>'
  +'let lastName=null;<br>'
  +'let nickName="SuperGut";<br>'
  +'<i>//показываем значение, которое определено первым</i><br>'
  +'alert(firstName ?? lastName ?? nickName ?? "Nekto");<br>'
  +'<i>//SuperGut</i>'
	+'<ul><i>Важно различие между операторами:</i><br>'
  +'<li type="square">|| - возвращает первое иситнное значение</li>'
  +'<li type="disc">?? - возвращает первое определённое значение</li></ul>'
  +'<i>Пример: </i><br>'
  +'let height=0;<br>'
  +'alert(height || 50); <i>//50</i><br>'
  +'alert(height ?? 50); <i>// 0 (однако)</i><br></li><li>'
  +'<a>Приоритет </a><i>у обоих операторов равен 3</i><br>'
  +'<i>В следующем выражении понадобятся скобки:</i><br>'
  +'let height=null;<br>'
  +'let width=null;<br>'
  +'<i>//тут важны скобки:</i><br>'
  +'let area=(height ?? 100)*(width ?? 50);<br>'
  +'alert(area); <i>//5000</i><br>'
  +'<i>//без скобок:</i><br>'
  +'let area=height ?? 100 * width ?? 50; <i>// 0 не работает</i><br>'
  +'alert(area); <br>'
  +'let area=height ?? (100*width) ?? 50;<br>'
  +'alert(area); <i>//0 (логично)</i><br>'
  +'</li>'
  +'</ul>'
	+'<li><a>Оператор нулевого присваивания</a><br>'
+'let userAge=null;<br>'
+'userAge ??= 18;<br>'
+'alert(userAge); <i>//18</i><br>'
+'let userAge=18; <i>//определено</i><br>'
+'userAge ??=alert("nicht arbeiten"); <i>//не сработает</i><br>'
+'userAge ??=21; <i>//аналогично</i><br>'
+'userAge ??= null; <i>// не-а</i><br>'
+'alert(userAge); <i>// всегда 18</i><br>'
+'</li><a>Итого</a><br><ol>'
+'<li>Оператор нулевого слияния ?? - это быстрый способ выбрать "определённое" '
+'значение из списка (значение по умолчанию)</li>'
+'<li>Оператор ?? имеет очень низкий приоритет, лишь ненамного выше, чем у ? и =, '
+'поэтому при использовании его в выражениях, скорее всего, потребуются скобки</li>'
+'<li>Запрещено использовать вместе с || или && без явного указания приоритета(скобок)</li>'
+'<li>Для присвоения переменной значения в зависимости от того, "определена" она '
+'или нет, используется оператор нулевого присваивания ??=.</li>'
+'</ol>'
	+'<li>let result=условие ? значение1 : значение2;</li><br>'
  +'<ul><h3>Циклы</h3><br>'
+'<li><a>Цикл while</a><br>'
+'синтаксис: <i>while(condition){...kod...}</i><br>'
+'let i=0;<br>'
+'while(i<3){<br>'
	+'alert(i);<br>'
+'    i++;} <i>//0,1,2</i><br>'
+'<i>другой пример: </i>let i=3;<br>'
+'while(i){ <i>//ждёт, когда i будет равно 0 и условие станет ложным(i--)</i><br>'
   +'alert(i);<br>'
  +' i--;} <i>//3,2,1 (запомните это дети, потому-что понять это невозможно)</i><br>'
 +'let i=3;<br>'
+' while(i) alert(i--); <i>//3,2,1 (фигурные скобки не нужны)</i><br></li><li>'
+'let i=0;<br>'
+'do{<br>'
	+'alert(i);<br>'
	+'i++;<br>'
+'}while(i<3); <i>//0,1,2</i><br></li><li>'
+'<b>Цикл for</b><br>'
+'for(let i=0;i<3;i++){<br>'
  +'alert(i);<br>'
+'} <i>//0,1,2 (верно)</i><br>'
+'<table border="1"><caption><b>for()</b> подробнее</caption><br>'
+'<tr><td>начало</td><td>let i=0;</td><td>выполянется один раз при входе в цикл</td></tr>'
+'<tr><td>условие</td><td>i<3</td><td>Проверяется перед каждой итерацией '
+'цикла. Если вычислится в false, цикл остановится</td></tr>'
+'<tr><td>тело</td><td>alert(i)</td><td>выполняется снова и снова, пока условие '
+'вычисляется в true.</td></tr>'
+'<tr><td>шаг</td><td>i++</td><td>выполняется после тела йикла на каждой '
+'итерации перед проверкой условия.</td></tr>'
+'</table><br><i>Встроенное объявление</i><br>'
+'for(let i=0;i<3;i++){<br>'
	+'alert(i);<i>//0,1,2</i><br>'
+'}alert(i); <i>//не работает</i></li><li><br>'
+'<i>Также можем пропустить какую-то часть for</i><br>'
+'let i=0; <i>//уже объявлена и определена</i><br>'
+'for( ; i<3;i++){<br>'
+'alert(i);} <i>//0,1,2</i><br><i>Или</i><br>'
+'let i=0;<br>'
+'for(;i<3;){<br>'
+'   alert(i++);} <i>//0,1,2 - убрали шаг</i><br>'
+'</li></ul>'	
+'<li><b>Прерывание цикла: "break"(не только по false)</b><br>'
+'let sum=0;<br>'
+'while(true){<br>'
	+'let value=+prompt("Chislo ","");<br>'
	+'if(!value) break; <i>// не число, то (*)</i><br>'
	+'	sum+=value;<br>'
+'}alert("Summ: "+sum); <i>//считает только числа, по знаку выходит</i><br>'
+'</li>'
	+'<li><a>Переход к следующей итерации</a><br>'	
+'for(let i=0;i<10;i++){<br>'
	+'if(i%2==0)continue;<br>'
	+'alert(i);<br>'
+'} <i>//1,3,5,7,9 (кратные двойке отсутствуют)</i><br></li><li>'
+'<i>continue позволяет избегать вложенности(что-бы это ни значало)</i><br>'
+'for (let i=0;i<10;i++){<br>'
	+'if(i%2){<br>'
  +'    alert(i);<br>'
+'}} <i>//1,3,5,7,9 (цикл тоже обрабатывает нечётные числа)</i><br>'
+'Кроме того, нельзя использовать break/continue справа от оператора "?"<i> '
+'именно поэтому не рекомендуется использовать оператор ? вместо if.</i></li><li>'
+'<a>Метки для break/continue</a><br>'
+'<i>Выход из нескольких циклов сразу:</i><br>'
+'outer: for(let i=0;i<3;i++){<br>'
	+'for(let j=0;j<3;j++){<br>'
		+'let input=prompt(`Координаты(${i},${j})`,"");<br>'
		+'if(!input)break outer;<br>'
+'}} alert("Gotovo"); <i>//цикл проходит полностью<br>'
+'//если пробел или пустой символ, то выход</i><br>'
+'</li>'
	+'<ul><b>Итого </b><i>Вот они - три вида цикла</i><br>'
+'<li>while - проверяет условие перед каждой итерацией</li>'
+'<li>do...while - проверяет условие после каждой итерации</li>'
+'<li>for( ; ; ) - проверяет условие перед каждой итерацией, можно '
+'дополнительно настроить</li>'
+'</ul>'	
	+'</td></table>'


let prod;
prod='<table><td id="levcool"><h5>Левая размазня</h5>'
+'<ul><li><i>Результат функции с пустым </i><a style="margin:0">return </a><i>или без него -</i>'
+'<a>undefined:</a> <br>'
+'function doNothing(){<i>/*pusto*/</i>}<br>'
+'alert(doNothing()===undefined); <i>//true</i><br>'
+'<i>return надо прямо указывать, к каким данным он относится</i><br></li><li>'
+'<a>Выбор имени функции:</a><br>'
+'<ul><i>Если функция начинается с:</i><br>'
+'<li><a>"show" -</a>что-то показывают<i>(showMessage())</i></li>'
+'<li><a>"get..." -</a>возвращают значение<i>(getAge())</i></li>'
+'<li><a>"calc..." -</a>что-то вычисляют<i>(calcSum())</i></li>'
+'<li><a>"create" -</a>создающие функции<i>(createForm())</i></li>'
+'<li><a>"check..." -</a>проверяют и возвращают логическое значение'
+'<i>(checkPermission())</i></li>'
+'<li><a>Функции == Комментарии</a><br><i>найдём простое числишко</i><br>'
+'let n=prompt("finish","");<br>'
+'function showPs(n){<br>'
	+'nextP:for(let i=2;i<n;i++){<br>'
		+'for(let j=2;j<i;j++){<br>'
		+'	if(i%j==0)continue nextP;}<br>'
	+'	alert(i); <i>//простое</i>}}<br>'
+'showPs(n); <i>//на 20:2,3,5,7,11,13,17,19</i><br>'
+'</li>'
+'</ul>'
+'</li></ul>'
+'</td><td id="ipcool">'
+'</td><td id="pravcool"><h5>Правая размазня</h5>'
+'</td></table>'

document.write(prod)+prom;





