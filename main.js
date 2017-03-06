var code = `body{background:red;}p{color:green;}`
   
n = 0;
setInterval(function(){
  content.innerHTML = code.substring(0,n);
  app.innerHTML = code.substring(0,n);
  n++;
},100)

