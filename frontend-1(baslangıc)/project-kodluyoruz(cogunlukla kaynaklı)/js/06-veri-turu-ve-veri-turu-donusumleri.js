//************** Veri Türünü Öğrenmek ve Birbirlerine Dönüştürmek

//veri turunu ogrenmek typof:
let price =111
let stringPrice="111"
let hasPassword=true

console.log(
    "price: ",typeof(price)
)
console.log(
    "stringPrice: ",typeof(stringPrice)
)
console.log(
    "hasPassword: ",typeof(hasPassword)
)

typeof("11")==="string"  // bunuu true döndürecek çünkü burada olan şey ype içine strign a-yazıldı mı kontrol ettirdik

// string(metinsel) bilgileri int ve float'a donusturmek
let number1="11"
console.log("number1: ", parseInt(number1),typeof(number1))

let number2="px11px"   // tam döndürmez nan number yazar   //parseInt içinde başlangıç olarak numara varsa ceviriyor int
console.log("number2: ", parseInt(number2),typeof(number2))

let number3="11px" 
number3=Number(number3)   //  nun number ifadesi gelir number içinde string başka bir ifade varsa rakam dışında varsa çevirmez
console.log("number3: ", number3,typeof(number3)) 

let number4="11.4px"
number4=parseFloat(number4)
console.log("number4: ", number4,typeof(number4))


//number veri tipinden string'e donusturmek:
let number5=55
number5=number5.toString()         // bu toString() fonk ile string metine çevirdik
console.log(number5,typeof(number5))
