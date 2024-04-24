// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********

let last_child =document.querySelector("ul#list>li:last-child")    // ul de itsi lsit olan son cocuğu iteme atadık
let first_child=document.querySelector("ul#list>li:first-child")   // benzer ilk cocuk
let first_child_item_icerik=document.querySelector("ul#list>li:first-child").innerText  // benzer ilk cocuğun içinde yazanı getirdi ,
//().innerText = ().textContent
console.log(last_child)
console.log(first_child)
console.log(first_child.innerHTML)   // alltakinde üstten farklı bir degiskene iceri atadık ama burada direkt icinden aldım depişkenin
console.log(first_child_item_icerik)
document.querySelector("ul#list>li:first-child").textContent="degistii"
last_child.innerHTML=" son oge degisti"

// ulDOM.append(liDOM) // en sona ekler  // eklemek için
let ulDOM= document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML="kendi olusturdugumuz oge"
ulDOM.append(liDOM)  // sona ekler  // ikisini aynı anda kullanamayız son atadığımız neyse o olur
//  ulDOM.prepend(liDOM)  // basa ekler

