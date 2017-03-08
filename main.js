 var code = `body{background:blue;}p{color:white;}`

n = 0;
setInterval(function(){
  content.innerHTML = code.substring(0,n);
  app.innerHTML = code.substring(0,n);
  n++;
},100)

