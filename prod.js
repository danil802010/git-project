let prod;
prod='<table><caption>Тоже какая-то таблица</caption>'
+'<td id="lev">'
 +'<a>Тут у нас писанина и будет</a><br>'
+'</td><td id="prav">'
  +'<a>А это наша правая колонка</a>'
   +'<a>Поэкспериментируем снова</a><i> (пишем программу)</i><br>'
  +'Function.prototype.defer=function(ms){<br>'
	+'  setTimeout(this, ms);}<br>'
  +'function f(){<br>'
	+'  alert("Privet!");}<br>'
+'  f.defer(2000); <i>//Privet!,2 sec</i><br>'
+'</td></table>'

document.write(prod);
