let prod;
prod='<table><caption>Тоже какая-то таблица</caption>'
+'<td id="lev">'
 +'<a>Тут у нас писанина и будет</a><br>'
+'</td><td id="prav">'
  +'<a>А это наша правая колонка</a><br>'
   +'<a>Поэкспериментируем снова</a><i> (пишем программу)</i><br>'
 +'Function.prototype.defer=function(ms){<br>'
	+'  var f=this;<br>'
	  +'return function(){<br>'
		+'  var args=arguments,<br>'
		  +'context=this;<br>'
		  +'setTimeout(function(){<br>'
			+'  f.apply(context,args);<br>'
+'  },ms);}} <i>//проверяем:</i><br>'
  +'function f(a,b){<br>'
	+'  alert(a+b);<br>'
  +'}<br>'
  +'f.defer(1500)(3,4); <i>//7</i><br>'
  +'<a>CoffeeM</a><br>'
  +'function CM(power){<br>'
	+'  this._power=power;<br>'
	  +'this._waterA=0;<br>'
  +'}<br>'
  +'CM.prototype.WHC=4200;<br>'
  +'CM.prototype._gTTB=function(){<br>'
	+'	  return this._waterA*this.WHC*80/this._power;<br>'
	  +'};<br>'
	  +'CM.prototype.run=function(){<br>'
		+'  setTimeout(function(){<br>'
			+'  alert("Кофе готов!");<br>'
		 +' },this._gTTB());<br>'
	 +' };<br>'
	  +'CM.prototype.sWA=function(amount){<br>'
  +'this._waterA=amount;<br>'
  +'};<br>'
  +'var cM=new CM(10000);<br>'
  +'cM.sWA(50);<br>'
  +'cM.run(); <i>//Кофе готов!</i><br>'
  +'<li>'
+'</li></td></table>'

document.write(prod);
