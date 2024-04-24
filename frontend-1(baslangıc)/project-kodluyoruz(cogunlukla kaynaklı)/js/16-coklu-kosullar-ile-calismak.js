//   *********Coklu-Kosullar-İle-Calismak************

let username= prompt("Kullanici adiniz:")
let age= prompt("Yasiniz :")
let info =document.querySelector("#info")

if(username && age >=18)
{
    info.innerHTML="ehliyet alabilirsiniz"
    
}
else if(!usermame)
{
    info.innerHTML="kullanici bilginiz yok"}
else if (!(age>=18)) 
{ 
    info.innerHTML="yas bilginiz yok veya 18 yasindan kucuksunuz"}