let prom;
prom='<h4>зырк</h4><table><td id="levcool">'
  +'<a>Пример использования программы:</a><br>'
  +'<li>let result=условие ? значение1 : значение2;</li><br>'
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
  +'</li>'
  +'</ul>'
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
   +'<a>Нетрациционное использование "?"</a><br>'
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
+'</li></td></table>'

document.write(prom);


