//    ** ilk fonksiyonumuzu tanimlamak 

function hello() {     // fonk tanımladı

    console.log("merhaba")
    helloWorld()
}

function helloWorld()
{
    console.log("hello world")
}
/*
function userCheck()      // doğru bir şekilde çalışmaz dışarıdan parametre alması gerekiyor
{
    
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
}
*/

hello()   // fonk cağurdık