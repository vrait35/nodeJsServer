mytest=function(){
  console.log('test');
}
mytest2=function(a,b){
  console.log(a+b);
}
mytest3=function(a,b){
  console.log(a-b);
}
//module.exports.mytest21=mytest2;
//module.exports.mytest31=mytest3;
module.exports={
  mytest21:mytest2,
  mytest31:mytest3
}
//  active x
