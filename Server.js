var http=require('http');
var server=http.createServer(function(req,res){
  if(req.url=="/Anuar"){
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
  //res.end('<a href="google.com">sdf</a> <a href="mystat.itstep.org">');
  res.end('<a href="cat.html">Кошки</a>');
}
  else if(req.url=="/Sa"){
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  res.end('<input type="text" name="inp1" value="Anuar, privet!">');
}
else {
  res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});
res.end('Error');
}
  console.log('URL'+req.url);
});
server.listen(3000,'127.0.0.1');
console.log('listen 3000');
