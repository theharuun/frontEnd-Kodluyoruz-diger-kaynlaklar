// ********** Karsilastirma Operatorleri ve Mantiksal Operatorler **********
// https://www.w3schools.com/js/js_comparisons.asp

let price = "100"
let user ="quest"

//  == eşitse
console.log(price==1)  // false yanıtı alıcaz
console.log(price == 100) // true dönücektir 

// === hem değeri hem türü eşitse
console.log(price===1)  // false
console.log(price===100) // false cünkü değerleri eşit olsa da türleri eşit değil üst tarafta string bir ifade var

// != eşit değilse
console.log(price != 1)  // true
console.log( user !="quest"  )  // false eşit çünkü 
console.log(user != "Harun")  // true ilk statementa giricektir

//  < küçükse

console.log(price<100) // false
console.log(price>1000) // true

//  <= küçük veya eşitse
console.log(price <= 100)  // true


// > büyükse 
console.log(price > 100 ) // false
console.log(price>70)// true


// >= büyük veya eşitse
console.log(price>=100) //true


//  && ve  1-1=1
console.log(  price>80 && price<=100 )  // true döner her ikiside 1/true dönerse dopru verir


//  || veya  1-1=1 / 1-0=1 /0-1=1
console.log(price>100 || user=="quest") // true ( 0 || 1  )
console.log(price>=100 || user=="quest") // true ( 1 || 1  )
console.log(price>=100 || user=="harun") // true ( 1 || 0  )
console.log(price>100 || user=="harun") // false ( 0 || 0  )

// !  değil(tersi)
console.log(price>0 && !user=="quest")  //false ( 1 &&  !(1)=0 )
