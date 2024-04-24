//******* let ve const ile tanimlama*******

//  var ile değişken tanımlamak
//var servername = "api.kodluyoruz.org"
//console.log(servername)
//let ile değişkeni boş tanımlamak
let serverName;
console.log(serverName)
//let ile değişkene bilgi atamak
serverName="https://kodluyoruz.orgf";
console.log(serverName)

//let ile değişkene bilgi atayarak tanımlamak
let password=123456;
console.log(password) 

//degişken ataması yapmadan önce kullanmaya calışmak
/* 
YANLIŞ KULLANIM
console.log(passwordd) 
let passwordd=123456;
*/
//const ile değişkeni boş tanımlamaya calışmak

//const serverPassword;  //constla set ederken ddeğişkenin içini direk doldurmalıyız

  //const ile tanımlamak  sabit bir şey atıcaksak constla atamamız gerekir eğer değişebilicekse let ile 
  const serverPassword=1234; 
  console.log(serverPassword)