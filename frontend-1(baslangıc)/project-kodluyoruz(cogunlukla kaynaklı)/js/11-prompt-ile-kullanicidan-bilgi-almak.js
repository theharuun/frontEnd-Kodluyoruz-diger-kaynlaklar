// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt


let fullName=prompt("lütfen adinizi yaziniz : ")
let greeting=document.querySelector("#greeting")  //id olduğu için diyez işaretiyle almamız gerekiyor
greeting.innerHTML=` ${greeting.innerHTML}  <small style="color:red" >${fullName}</small> `
// yeni aldığımız bilgiyi özellikleriyle oynayıp sayfyaa ekleyebiliyoruz 

