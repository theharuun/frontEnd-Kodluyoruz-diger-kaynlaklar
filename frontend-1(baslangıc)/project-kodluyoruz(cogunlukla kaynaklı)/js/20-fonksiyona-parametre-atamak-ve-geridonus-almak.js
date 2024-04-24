// ******** -fonksiyona-parametre-atamak-ve-geridonus-almak ********

// temel kurallar
// 1: bir fonk bir veya birden fazla parametre alabilir veya hiç alamayadabilir
// 2 : Bir fonk disari bilgi gönderebilir (return) veya göndermeyedebilir
// 3: mümkünse fonknun bagimliliklarini azaltmak gerekir

let firstname = "Lorem"

function greetings(firstname="") {  // default parametre alıyor geriye dönüş değeri yoktur
    console.log(`merhaba ${firstname ? firstname : " "}`)
} 

greetings() //  bu durumda merhaba yazıcaktır
console.log(firstname)  // burada lorem yazıktır çünkü parametreye atamayı fonk içinde yaptık dışarda global alanda bir değişiklik yapmadık
greetings("parametre")  // merhabe parametre yazacaktır 

function greetings2 (firstname , lastname)
{
    let info = ` merhaba ${firstname} ${lastname}`
    return info
}
let greetingsInfo=greetings2("ad","soyad") 
console.log(greetingsInfo)


function domIdWriteInfo(id,info)
{
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML= info  
}
let htmlInfo=` <span style="color:red"> color reddd</span>`

domIdWriteInfo(`greeting`, htmlInfo )
domIdWriteInfo(`info`,greetings2("ad","soyad") )


function factorial(number)           // factorial fonk hesabı yaptık 
{
    let fac=1
    
  for(i = 1; i <= number; i++) {
    fac=fac*i;
  }
    console.log(fac)
}

factorial(4)

