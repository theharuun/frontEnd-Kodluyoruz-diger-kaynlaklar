// ********** Kosullarla Calismak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

let username =prompt("kullanici adinizi giriniz : ")

// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger(username.length>0) {console.log(username)} degilse {console.log("sayfayi yenileyip isminizi giriniz lutfen :)")}
// if(username.length>0) {console.log(username)} else {console.log("sayfayi yenileyip isminizi giriniz lutfen :)")}

if(username.length>0)
{
    console.log(`Kullici Bilginiz ${username}`)
}
else
{
    console.log("sayfayi yenileyip isminizi giriniz lutfen :) ")

}