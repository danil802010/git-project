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
	+'<b>Итого:</b><br>'
+'<ul><i>Объявление функции имеет вид:</i><br>'
+'function имя(параметры,через,запятую){/*код*/}<br>'
+'<ul><li type="disc">&ensp;Передаваемые значения копируются в параметры '
+'функции и становятся локальными переменными</li>'
+'<li type="disc">&ensp;Функции имеют доступ к внешним переменным. '
+'Но это работает только изнутри наружу. Код вне функции не '
+'имеет доступа к её локальным переменным</li>'
+'<li type="disc">&ensp;Функция может возвращать значение. Если этого '
+'не происходит, то результат равен undefined.</li><ol>'
+'Функции имеют наименования:<br>'
+'<li>Имя функции должно быть понятно и чётко отражать, что она делает. '
+'Увидев её вызов в коде, вы должны тут же понимать, что она делает и что возвращает</li>'
+'<li>Функция - это действие, поэтому её имя обычно является глаголом</li>'
+'<li>Есть много общепринятых префиксов, таких как: create...,show...,get...,'
+'check... и т.д. Пользуйтесь ими как подсказками, поясняющими, что делает функция.</li>'
+'</ol></li><li><b>Задачи</b><br>'
+'let age=prompt("skolko let?","");<br>'
+'function checkA(age){<br>'
	+'if(age>18){<br>'
		+'return true;<br>'
	+'}else{<br>'
	+'	return confirm("predki znajut?");<br>'
+'}} checkA(age); <i>//да, всё верно</i><br>'
+'</li><li><a>Кто меньше:</a><br>'
+'a=prompt("a=","");<br>'
+'b=prompt("b=","");<br>'
+'function min(){<br>'
	+'if(a>b) alert("b");<br>'
	+'if(a<b) alert("a");<br>'
	+'if(a==b) alert("ravny");}<br>'
+'min();<br>'	
+'</li></ul><ol><h5>Function Expression</h5><li>'
+'<i>Её синатаксис</i><br>'
+'function sayHi(){<br>'
  +' alert("Привет");<br>'
+'}sayHi(); <i>//Привет</i><br>'
+'<i>Есть ещё один синтаксис:</i><br>'
+'let sayHi=function(){<br>'
+'alert("Wir hier!");};<br>'
+'sayHi(); <i>//Wir hier!</i><br>'
+'</li><li><b>Функция - это значение</b><br>'
+'<i>функцию также можно высести с помощью alert</i><br>'
+'function sayHi(){<br>'
	+'alert("Privet");<br>'
+'}alert(sayHi); <i>//выводит код полностью, который мы написали</i><br>'
+'<a>Мы можем скопировать функцию в другую переменную в js</a><br>'
+'function sayHi(){ <i>//создали(1)</i><br>'
   +'alert("pshelna");}<br>'
  +' let func=sayHi; <i>//копируем без скобок(2)</i><br>'
   +'func(); <i>//pshelna (есть)(3)</i><br>'
+'   sayHi(); <i>//pshelna (вызов с оскобками) (3`)</i><br>'
+'<ol><i>Всё подробно разберём:</i><br>'
+'<li>Объявление Function Declaration (1) создаёт функцию  и помещает '
+'её в переменную с именем sayHi.</li>'
+'<li>В строке (2) мы скопировали её значение в переменную func. Обратите'
+' внимание: нет круглых скобок. Иначе бы записался бы сам результат, а не '
+'функция(как тонко и коварно)</li>'
+'<li>Теперь функция может вызываться как sayHi(), так и func().</li>'
+'</ol></li><li><a>Функции-"колбэки"</a><br><img src="https://i.postimg.cc/fWYFv9Xv/image.jpg" '
+'width="320" height="180"></img><br>'
+'Состоит из: <i>question</i> - текст вопроса<br><i>yes</i> - функция с ответом "Да"<br>'
+'<i>no</i> - функция с ответом "Нет"<br>'
+'asc=prompt("nu ","yes || no?");<br>'
+'function asc(question,yes,no){<br>'
	+'if(confirm(question)) yes() <i>//нет";"</i><br>'
  +'  else no();}	<br>'
+'function showOk(){<br>'
	+'alert("Soglasni");}<br>'
+'function showCancel(){<br>'
+'alert("Otmenili");}<br>'
+'<i>//далее они передаются в качестве параметоров</i><br>'
+'if(asc=="yes")showOk();<i>//soglasni</i><br>'
+'if(asc=="no")showCancel(); <i>//otmenili</i><br>'	
+'<i>Тут аргументы showOk и showCancel функции ask являются колбэками. Можно переписать '
+'короче с FunctionExpression</i><br>'
+'function ask(question,yes,no){<br>'
	+'if(confirm(question))yes() <i>// нет точки с запятой(ответ должен быть один)</i><br>'
+'else no();}<br>'
   +'ask("Usek? ",<br>'
   +'function(){alert("Molodez");},<br>'
  +' function(){alert("podlez");}<br>'
+'   );<i>//отмена - podlez, ok - molodez</i><br>'
+'</li><li><a>Сравним Function Expression c Function Declaration</a><br>'
+'<ul><li type="disc"><i>Function Declaration(объявляется в отдельном потоке)</i><br>'
+'let a=prompt("a=");<br>'
+'let b=prompt("b=");<br>'
+'function sum(){<br>'
  +'return (+a)+(+b);<br>'
  +'}<br>'
+'  alert(sum()); <i>//4,8 - 12</i><br>'
+'<i>//создаётся только в тот момент, когда выполнение доходит до неё, '
+'а потом уже используется</i><br>'
+'</li>'
+'<li type="disc"><i>Function Expression создаётся внутри другого выражения</i><br>'
+'let a=prompt("a= "); let b=prompt("b=" );<br>'
+'let sum=function(a,b){ <i>//sum -функция с параметрами a,b</i><br>'
+'return +a+(+b);<br>'
+'}<br>'
+'alert(sum(a,b)); <i>//5,4 - 9</i><br>'
+'<i>Function Declaration может быть вызвана раньше</i><br>'
+'Пример: <i>Так будет работать</i><br>'
+'sayHi("Vasja");<br>'
+'function sayHi(name){<br>'
	+'alert(`Privet,${name}`);<br>'

+'} <i>//Объявили позже, но Privet, Vasja(c Function Expression не работаeт)Пример '
+'не писал</i><br>'
+'<a>Ещё пример:</a><br>'
+'let age=17;<br>'
+'if(age<18){<br>'
	+'welcome();<i>//работает</i><br>'
	+'function welcome(){<br>'
		+'alert("Privet");<br>'
	+'}welcome(); <i>//работает</i><br>'
+'}else{<br>'
	+'function welcome(){<br>'
	+'	alert("Zdarova");<br>'
+'}} <i>//фигурная скобка закрывается,код внутри блока не доступен</i><br>'
+'welcome(); <i>//третий раз выдал Privet(слажал)</i><br></li>'
+'<li type="disc"><b>Ещё один</b><br>'
+'let age=prompt("Skoka let?",18);<br>'
+'let welcome;<br>'
+'if(age<18){<br>'
+'	welcome=function(){<br>'
		+'alert("Hello!");};<br>'
	+'}else{<br>'
+'		welcome=function(){<br>'
		+'	alert("Good day!");<br>'
	+'		};}<br>'
+'	welcome(); <i>//всё правильно выдаёт</i><br>'
+'<i>С условным оператором</i><br>'
+'let age=prompt("Skoka let?",18);<br>'
+'let welcome=(age<18)?<br>'
   +'function(){alert("privet");}:<br>'
  +' function(){alert("good day!");};<br>'
+'   welcome(); <i>//результат тот-же</i><br>'
+'</li></ul></li><li><ul><b>итог</b>'
+'<li><a>Функции</a> - это значения. Они могут быть присвоены, скопированы или объявлены '
+'в любом месте кода.</li>'
+'<li><a>Если</a> функция объявлена как отдельная инструкция в основном потоке кода, то это '
+'"Function Declaration".</li>'
+'<li><a>Если</a> функция была создана как часть выражения, то это "Function Expression".</li>'
+'<li><a>Function Declaration</a> обрабатываются перед выполнением блока кода. они выидны во всём блоке.</li>'
+'<li><a>Функции,</a> объявленные при помощи Function Experession, создаются только когда поток '
+'выполнения достигает их.</li>'
+'</ul><i>Напоследок: Function Declaration предпочтительнее(она в приоритете)</i></li></ol>'
+'</td><td id="ipcool">'
+'</td><td id="pravcool"><ul><h5>Стрелочные функции, основы</h5><br>'
+'<li>let func=function(arg1,arg2,...argN){<br>return expression;};<hr>'
+'<a>Чисто конкретный пример:</a><br>'
+'let sum=(a,b)=>a+b;<br>'
+'<i>/*более коротка форма без return a+b*/</i><br>'
+'alert(sum(5,7)); <i>//12</i><br>'
+'<li>С одним аргументом скобки опускаем:<br>let double=n=>n*2; alert(double(3)); <i>//6</i></li>'
+'<li><i>Круглые скобки в любом случае должны присутствовать:</i>'
+'<br>let sayHi=()=>alert("Hello");<br>sayHi(); <i>//Hello</i><br>'
+'<i>Также динамическое создание функции:</i><br>'
+'let age=prompt("skoka let?,18");<br>'
+'let welcome=(age<18)?<br>'
   +'()=>alert("Privet"):<br>'
  +' ()=>alert("Good day");<br>'
+' welcome(); <i>//всё верно</i><br>'  
+'</li></li>'
+'<li><a>Многострочные стрелочные функции</a><br>'
+'<i>Снова используем return</i><br>'
+'let sum=(a,b)=>{ <i>//пошло тело функции после "{"</i><br>'
   +'let result=a*b;<br>'
  +' return result; <i>//если скобки фигурные, то return обязательно</i><br>'
+'}; alert(sum(5,3)); <i>//15</i></li><li><br>'
+'<ol><a>Итого конечно:</a><br>'
+'<li>Без фигурных скобок: (...args)=>expression-правая сторона выражения: '
+'функция вычисляет его и возвращает результат. Скобки можно не ставить, если '
+'аргумент только один: n=>n*2.</li>'
+'<li>С фигурными скобками: (...args)=>{body}-скобки позволяют нам пистаь несколько '
+'инструкций внутри функции, но при этом необходиом явно вызвать return, чтобы '
+'фнкция знала, что возвращать.</li>'
+'</ol></li></ul>'
+'<ul><a>Задачи</a><br>'
+'<li><i>Перепешите используя функции-стрелки</i><br>'
+'function ask(question,yes,no){<br>'
   +'if(confirm(question))yes()<br>'
	+'   else no();<br>'
+'}ask(<br>'
   +'"soglasny?",<br>'
  +' ()=>alert("norma"),<br>'
+'()=>alert("lagja")<br>'
+'); <i>//ok-soglasny,отмена-lagja</i><br>'
+'</li></ul>'
+'<ol><h5>особенности JavaScript</h5><br>'
+'<i>Повтор</i><br>'
+'<li><a>Структура кода</a><br>'
+'Инструкции разделяются точкой с запятой:<br>'
+'alert("Privet");alert("Mir");<br><i>даже если поместить интсрукции на разных строках '
+'точка с запятой всё равно рекомендуется в большинстве случаев</i><br>'
+'function f(){<i>//после объявления функции ";" не обязательна</i>}<br>'
+'for(;;){<i>//после цикла тоже можно не ставить}</i></li>'
+'<li><a>Строгий режим</a><br>'
+'"use strict" - <i>использование возмложностей JS по максимуму</i></li>'
+'<li><a>Переменные</a><br>'
+'<ul><i>объявить:</i><br>'
+'<li type="disc"><b>let</b></li>'
+'<li type="disc"><b>const</b> (изменению не подлежит)</li>'
+'<li type="disc"><b>var </b>(спосб устаревший, но работает)</li></ul>'
+'<ul>переменная состоит:<br><li>Буквы и цифры(если цифра не первый символ)</li>'
+'<li>символы $ и _ используются наряду с буквами</li>'
+'<li>иероглифы и символы нелатинского типа допутсимы(при желании)</li></ul>'
+'<ul>Типизируются они следующим образом:<br>'
+'<li><a>number</a> для целых вещественных чисел</li>'
+'<li><a>bigint</a> для работы с целыми числами произвольной длины</li>'
+'<li><a>string</a> для строк разумеется</li>'
+'<li><a>boolean</a> для логических значений true/false.</li>'
+'<li><a>null</a> тип с единственным значением null, то есть "пустое значение"</li>'
+'<li><a>undefined</a> - тип со значением(<i>единственным</i>) "не задано"</li>'
+'<li><a>object и symbol</a> - сложные структуры данных и уникальные идентификаторы</li>'
+'</ul></li>'
+'<li><a>Взаимодействие с посетителями:</a><br>'
+'prompt(question,[default]) - <i>вопрос и возврат или null</i><br>'
+'confirm(question) - <i>вопрос и выбор "OK" или "Омена"</i><br>'
+'alert(message) - выводит сообщение<br>'
+'<i>Пример:</i><br>'
+'let userName=prompt("Name","Alja");<br>'
+'let isTeaW=confirm("Tea?");<br>'
+'alert("User: "+userName); <i>//Vava</i><br>'
+'alert("Tea: "+isTeaW); <i>//"ok" - true</i><br></li>'
+'<ul><a>Операторы:</a><br>'
+'<li><i>Арифметические - </i>*,+,-,/,%<br>+ обединяет строки</li>'
+'<li><i>Операторы присваивания</i> a=b,a*=2</li>'
+'<li><i>Битовые операторы</i> MDN посети в mozilla</li>'
+'<li><i>Условный оператор</i> :cond?resultA:resultB</li>'
+'<li><i>Логические операторы</i>И &&, ИЛИ ||</li>'
+'<li><i>Оператор нулевого слияния: </i>a ?? b(будет a, если не null/undefined)</li>'
+'<li><i>Сравнение </i><br>'
+'alert(0==false); <i>//true</i><br>'
+'alert(0==""); <i>//true</i></li></ul>'
+'<ul><a>Циклы </a><i>три вида</i><br>'
+'<li>while(condition){...} - 1<br>'
+'do{...}while(condition); - 2<br>'
+'for(let i=0;i<10;i++){...} - 3<br></li><li>'
+'for(let...) видна только внутри цикла</li><li>'
+'выйти из цикла позволяют break/continue. Выход из вложенных циклов - метки<br><li></ul>'
+'<li><i>"switch"</i><br>'
+'let age=prompt("skoka let?",18);<br>'
+'switch(age){<br>'
	+'case 18: alert("ne srabotaet");<br>'
	+'case "18": alert("agur"); break;<br>'
+'default: alert("neverno");}</li>'
+'<ul><a>И функции</a><br>'
+'<li><i>Function Declaration:</i><br>'
+'let a=3,b=4;<br>'
+'function sum(a,b){<br>'
	+'let result=a+b;<br>'
+'return result;}<br>'
+'alert(sum(a,b)); <i>//7</i></li>'
+'<li><i>Function Expression</i><br>'
+'let a=3,b=4;<br>'
+'let sum=function(a,b){<br>'
	+'let result=a+b;<br>'
+'return result;};<br>'
+'alert(sum(a,b)); //опять sum(a,b)</li>'
+'<li><i>Стрелочные функции:</i><br>'
+'let a=3,b=4; <i>//выражение в правой части</i><br>'
+'let sum=(a,b)=>a+b;<br>'
+'alert(sum(a,b)); <i>//7</i><br></li><li>'
+'<i>многострочный код в {}</i><br>'
+'let a=3,b=4;<br>'
+'let sum=(a,b)=>{<br>'
+'return a+b;}<br>'
+'alert(sum(a,b)); <i>// 7</i><br>'
+'<i>без аргументов</i><br>'
+'let sayHi=()=>alert("Hello");<br>'
+'sayHi(); <i>//Hello</i><br>'
+'<i>с одним аргументом</i><br>'
+'let n=5;<br>'
+'let double=n=>n*2;<br>'
+'alert(double(n));<i>// 10</i><br>'
+'</li></ul>'
+'<li>У функций могут быть локальные переменные, которые видны только внутри</li>'
+'<li>Параметры могут иметь значения по умолчанию:function sum(a=1,b=2){...}</li>'
+'<li>Если нет оператора return, то функция всё равно что-то возвращает</li></ol>'
+'<ul><h5>Особенности JavaScript</h5>'
+'<li><br><a>Структура кода</a><br>'
+'<i>разделябются точкой с запятой: </i>alert("kaput");alert("hohol");<br>'
+'<i>часто перевод строки - тоже разделитель</i><br>'
+'alert("hitler")<br>'
+'alert("kaput") <i>//hitler kaput (без разделения, в разных строчках)</i><br>'
+'<i>точки с запятой не требуется  после болоков кода:</i><br>'
+'function f(){<i>//между объявлением и самой функцией</i>}<br>'
+'for(;;){<i>//после цикла тоже не обязательно</i>}</li>'
+'<a>Строгий режим</a><br>'
+'В современном JS всё рекомендуется начинать с "use strict";(Так, '
+'на всякий случай)<br>'
+'<li><a>Переменные</a><br>'
+'<ul><i>объявляются:</i><br>'
+'<li type="disc">let</li>'
+'<li type="disc">const (не изменна)</li>'
+'<li type="disc">var (устаревший вариант)</li>'
+'<i>Имя переменной содержит: </i><br>'
+'<li type="disc">Буквы и цифры, если цифра не первый знак</li>'
+'<li type="disc">Символы $,_ используются вместе с буквами</li>'
+'<li type="disc">Иероглифы и символы нелатинского алфавита доспустимы, '
+'используются экстремалами</li></ul>'
+'<i>Хранятся в них любые значения</i><br>let x=5; x="Вaся"; и т.д.<br>'
+'<ol><i>Всего есть 8 типов данных:</i><br>'
+'<li><a>number </a>для целых вещественных чисел</li>'
+'<li><a>bigint </a>для работы с целыми числами произвольной длины</li>'
+'<li><a>string </a>для строк</li>'
+'<li><a>boolen </a>для логических значений иситинности или ложности: true/false</li>'
+'<li><a>null </a>тип с единственным значением null, т.е. пустое значение</li>'
+'<li><a>undefined </a>тип со значением "значение не задано"</li>'
+'<li><a>object и symbol </a>сложные структуры данных и уникальные идентификаторы</li>'
+'<li>И <a>typeof</a> возвращает тип значения, кроме:<br>'
+'typeof null=="object" <i>//ошибка в языке</i><br>'
+'typeof function(){}=="function" <i>//именно для функции(а для чего ещё...)</i></li></ol></li>'
+'<li><a>Взаимодейтсвие с посетителями </a><br>'
+'prompt(question,[default]) - вопрос и возврат ответа, либо null<br>'
+'confirm(qestion) - вопрос и ответ на выбор "OK" или "Отмена"<br>'
+'alert(message) - вывод сообщения<br>'
+'<i>модальные окна в помощь</i><br>'
+'let userName=prompt("Name: ",""); <i>//Алиса</i><br>'
+'let isTeaWanted=confirm("Хочешь чаю?"); <i>//Хочешь чаю?</i><br>'
+'alert("Посетитель: "+userName); <i>//Посетитель: Alisa</i><br>'
+'alert("Чай: "+isTeaWanted); <i>//Чай: true</i><br>'
+'</li>'
+'<li><a>Операторы</a><br><i>Есть следующие операторы:</i><br>'
+'<i>арифметические</i><br>'
+'"-/+","/","*","%"<br>'
+'alert("1"+2); <i>//12 - строка</i><br>'
+'alert(1+2); <i>//3 - операция</i><br>'
+'<i>Операторы присваивания</i><br>'
+'Простые a=b и составные a*=2.<br>'
+'<i>Битовые операции</i><br>'
+'работаю с 32-битными числами на самом низком уровне<br>'
+'<i>Условный оператор</i><br>'
+'cond?resultA:resultB. Если cond истинно, то resultA, иначе resultB.'
+'<i>Логические операторы</i><br>'
+'&&,|| - возвращают значение, на котором остановились<br>'
+'<i>Оператор нулевого слияния</i><br>'
+'"?" a ?? b будет a, если не равно null/undefined<br>'
+'<i>Сравнение</i><br>'
+'alert(0==false); <i>//true</i><br>'
+'alert(0==""); <i>//true</i><br>'
+'</li>'
+'<li><a>Циклы</a><br>'
+'<ol><li type="disc"><i>Есть три вида</i><br>'
+'1. while(condition){...}<br>'
+'2. do{...}while(condition);<br>'
+'3. for(let i=0;i<10;i++){...}<br></li>'
+'<li type="disc"><i>Переменная for(let...) видна только внутри цикла</i><br></li>'
+'<li type="disc"><i>break/continue</i> разрешают выйти из итерации<br></li></ol>'
+'</li></ul>'
+'</td></table>'
//prom,prod,zikl
let zikl;
zikl='<table><td id="levcool">'
+'<h4>Циклы while и for </h4>'
+'<li><b>Цикл "while"</b><br>'
+'<i>while(condition){//kod}</i><br>'
+'let i=0;<br>'
+'while(i<3){ <br>'
  +'alert(i);<br>'
+'i++;} <i>//выводит 0,1,2</i><br>'
+'</li>'
+'<li><b></b><br></li>'
+'<li><b></b><br></li>'
+'<li><b></b><br></li>'
+'<li><b></b><br></li>'
+'</td><td id="lpcool">'
+'</td><td id="pravcool">'
+'</td></table>'
document.write(zikl);





