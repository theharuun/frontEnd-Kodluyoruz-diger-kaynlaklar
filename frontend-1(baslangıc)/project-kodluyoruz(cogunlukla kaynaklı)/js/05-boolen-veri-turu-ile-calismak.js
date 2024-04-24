// ********** Boolean Veri Turu ile Calismak ********** 

// 0 ve 1'i Anlamak ->
let isActive=false // 0 alir
let hasBrother=true // 1 alir
console.log(isActive)

let username;     // değişkene bir şey atanmazsa 0 değer alır yani FALSE olur
let isUsername=Boolean(username)   // burada boolen tipinde döndür deedik değişkeni ve False döndü
console.log(isUsername)      // console false yazdirdik


// 0 ,-0, null, false, NaN, undefined, ("") ->
Boolean("")  // False
Boolean("11")  // TRUE
Boolean("0")   // TRUE
Boolean(0===0) // TRUE eşit mi sorusuna cevap var ve evet eşit yani mantıksal olarak true
// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
//Boolean(length.username>0) it is true