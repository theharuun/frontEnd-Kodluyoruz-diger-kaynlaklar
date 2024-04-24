// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5] 

// Array icinde Array:
let maleUsers=["hakan","harun","ahmet"]
let femaleUsers=["ayse", "fatma" ," selin"]          

items.unshift(femaleUsers)  // basa kadin kullanıcıları ekledik
console.log(items)

items.push(maleUsers)  // sona erkek kullanicilari ekledik
console.log(items)

console.log(items[0][1]) // fatma ismine ulaşmamız gerekiyor

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems=items.splice(1,5)// index1den indx 5 e kadar olanları yeni bir arraya aldık

console.log("newItems: ",newItems)
console.log("items: ",items)






// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log(items)
console.log("ipsum kacinci indexte",items.indexOf("ipsum"))

// Array Kopyalamak -> slice, [...ES6]
let copyItems1=items.slice()
copyItems1.pop() // copyden eleman sildik   
console.log("copyItems1: ",copyItems1)
console.log("items: ",items)

console.log("copyden sildi normalden silmedi")

let copyItems2=items
copyItems2.pop() // copyden eleman sildik   // böyle yaparsak orjinal yapıdanda silinir
console.log("copyItems2: ",copyItems2)
console.log("items: ",items)

console.log("her ikisinden de sildi")

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let es6Items=[...items]
console.log("es6items: ",es6Items)

let allUser=[...femaleUsers,...maleUsers]  // es6 birden fazla array yapisini birleştirmek
console.log("allUser: ", allUser)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join

console.log("allUseri stringe cevirdi: ", allUser.toString())
console.log("allUser: ", allUser)
console.log("allUseri yine stringe cevirdi (join): ", allUser.join(" --- ")) // her birirnin arasına boşluk 3 tire boşluk koydurdum

// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)

console.log("normal items: ",items)

items.splice(items.length,0,"harunaga")
items.splice(0,1,'selin') // böyle kullanırsak 0.indexten 1 adet sil yani hepsini sildi onun yerine selin yazdi
console.log(items)




console.log("")
console.log("ALISTIRMALAR")
console.log("")

let dizi10luk=[]
let dizi = [2,5,8,11,15,17];
for(i=0;i<=dizi.length;i++)
{   
 if(dizi[i]>=10)
 {
    dizi10luk.push(dizi[i])
 }
 else
 {
 // console.log("bu sayilar 10dan buyuk degil")
 }
}
console.log("diziden 10 üstünde olanlar 5le çarp yeni dizi olustur ",dizi)
let resultArray=[]
for(i=0;i<dizi10luk.length;i++)
{
resultArray[i]=dizi10luk[i]*5
}
console.log("resultArray: ",resultArray)