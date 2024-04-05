let prod;
prod='<table><caption>Тоже какая-то таблица</caption>'
+'<td id="lev">'
 +'<a>Тут у нас писанина и будет</a><br>'
+'</td><td id="prav">'
  +'<a>А это наша правая колонка</a>'
   +'<a>Поэкспериментируем снова</a><i> (пишем программу)</i><br>'
  Function.prototype.defer=function(ms){
	  var f=this;
	  return function(){
		  var args=arguments,
		  context=this;
		  setTimeout(function(){
			  f.apply(context,args);
  },ms);}} //проверяем:
  function f(a,b){
	  alert(a+b);
  }
  f.defer(1500)(3,4); //7
  +'<li>'
+'</li></td></table>'

document.write(prod);
