let prom;
prom='<table><td id="pravcool">'
  +'<a>Пример использования программы:</a><br>'
  +'<li>let result=условие ? значение1 : значение2;</li><br>'
+'</td><td id="lpcool">'
+'</td><td id="levcool">'
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
+'</li></td></table>'

document.write(prom);


