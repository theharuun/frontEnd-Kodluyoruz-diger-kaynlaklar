// ********** String Veri Turu Islemleri ********** 
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email="hrnkrkmz57@gmail.com"
let firstName="Harun"
let lastName="Korkmaz"


// string karakter sayisi -> length

console.log(email.length)   // 20


// Ilk Karakteri Bulmak -> [0]:
console.log(firstName[0])  // 0.indextedini getirdi
console.log(firstName.charAt(0)) //aynısını verir farklı bir yöntemdir

// buyuk harf / kucuk harf :
firstName=firstName.toUpperCase()
console.log(firstName)

firstName=firstName.toLowerCase()
console.log(firstName)


// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:

console.log(email.search("@"))  // 15.indexte old anlarız
console.log(email[15])      // @ işaretini alırı
console.log(email.search("olmayan"))  // -1 sonucu getirir

// belli bir yere kadar al -> slice :  (domain bilgisi) 

let DOMAIN=email.slice(email.search("@")+1)   // @ten sonrasını aldık
console.log(DOMAIN)

DOMAIN=DOMAIN.slice( 0 , DOMAIN.indexOf('.'))   // sadece gmail kısmını aldık   eğer atama yapmazsak en son atanmışı yazar
console.log(DOMAIN)

// bilgiyi degistir -> replace :
email=email.replace("gmail.com","kodluyoruz.org")
console.log(email)

// istedigim bilgi var mi ? -> includes :

email.includes("@")  // var mı diye bakıyoruz  true veya false döner  - SEARCH teyse -1 döner falseta varsa kaçıncı indexteyse onu getirir
// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
// email.endsWith("kodluyoruz.org")  // bununla bitti mi diye sorar false veya true döner
// email.startsWith("hrnkrkmz57")  // bununla başladı mı diye sorar false veya true döner

// Ilk Harflerini Buyuk Yapmak

let fullName=`
${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}  
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)
