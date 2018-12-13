var fs=require('fs');
data=fs.readFile('text.txt','utf8',function(err,data){
  console.log(data);
});
fs.writeFileSync('text.txt',data);
