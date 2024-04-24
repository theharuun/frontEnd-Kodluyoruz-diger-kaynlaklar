// ********** Degisken Tanimlama Kurallari  ********** 
// https://www.w3schools.com/js/js_conventions.asp
// https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations
// https://www.robinwieruch.de/javascript-naming-conventions

// ### Degisken Genel Tanimlama Kurallari:
// camelCase Kullanimi:
let fullname  = "" // bu dogru kullanim degil :(
let kodluyoruzserverinfo = "" // bu dogru kullanim degil :(
let kodluyoruz_server_info = "" // bu dogru kullanim degil :(
let fullName = ""
let kodluyoruzSERverInfo = "" // bu dogru kullanim degil :(
let kodluyoruzServerInfo = "" // bu dogru :)####DOĞRUUUUU####

// let firstName = "Hakan", lastName = "Yalcinkaya"  
//bunu kabul etsede okunabilirlik açısından diğerini 
//kullanmamız daha iyi olur

let firstName="hakan"
let lastName ="yalcinkaya"
console.log(firstName,lastName)

// UPPER_CASE Kullanimi:
const password = "1234" // bu dogru kullanim degil :(
const PASSWORD = "1234" // dogru kullanim  DOĞRU
const SERVER_PASSWORD = "1234"       // DOĞRUU


// degiskenlerde turkce ve diger dillerin kullanimi:


// let turkceBilgi // olmazzz :( böyle kullaniliyor olmamız doğru değil 
//kodumuzun genel kesim okuyabilmesi için ingilizce karakter kullanmamzı gerekir

// anlamsiz degisken adlari kullanmayin! 
let x=1  // nedir x bu tarz kullanılmamlı
// https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered
//When I wrote this, only God and I understood what I was doing
//Now, God only knows


// ### Ek Bilgi:
// 1: boolean tanimlarken is/has kullanimi:
let isActive=true

let hasPassword=false
// 2: Line Length < 80
