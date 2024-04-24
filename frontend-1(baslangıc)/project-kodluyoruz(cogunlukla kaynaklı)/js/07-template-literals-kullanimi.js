// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username="Harun"
const DOMAIN="kodluyoruz.org"

let email=username+"@"+DOMAIN
console.log("merhaba "+username+", sitemize hoş geldin , mail adresin: "+email)

let info =`     
merhaba ${username} sitemize hoş geldin , mail adresin ${email}
borcun  : ${(2+5)*10}
günün saat bilgisi : ${new Date().getHours()}

`        //  `` bu işaret sayesinde + ve virgül kullanmadan paragraf halinde 
         //güzel siteler oluşturabilriiz üstelik tanımlarken zorlanmayı
         //${} bunun içine değişkenleri koyabiliriz işlem yapabaliliriz sınfılrdan fonk cağırabilriiz vb
console.log(info)         