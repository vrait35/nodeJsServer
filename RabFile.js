var fs=require('fs');
var myFile=fs.readFile('text.txt','utf8',function(err,data){
  console.log(data);
});
console.log(myFile);
fs.writeFileSync('text.txt','ggwp');
