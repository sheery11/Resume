 var code = `body{background:blue;font-family:sans-serif;}p{color:white;font-size:25px;}`

n = 0;
setInterval(function(){
  content.innerHTML = code.substring(0,n);
  app.innerHTML = code.substring(0,n);
  n++;
},100)

