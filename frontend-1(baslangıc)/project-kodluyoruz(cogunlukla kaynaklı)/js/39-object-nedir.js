//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";
console.log("değişkenler birbirne eşit midir"+mesaj == başkaBirMesaj);       //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
 mesaj:"merhaba"
}
let başkaBirObje = {
 mesaj:"merhaba"
}
/// objelerin içindeki valuesi eşit biel olsalar eşitmdiir boolen tipinde eşit değildir çünkü objeler farklı hafıza
// yerlerinde saklanır böylece birbirine eşit aynı noktada olmayan içerisinde aynı ifade yazsada eşit değildir
console.log("objeler birbirne eşit midir "+obje == başkaBirObje);    

let countriesTalkSpanish = {
    continent: "south america",   // MAVİ=KEY  ,  TURUNCU=VALUE (TIRNAK İÇİNDE)
    language: "spanish"
    };

    // urugay kalıtım(inheritence) almıştır contriesTalkSpanish o objenin keylerine ulaşabilmektedir kendiside
    let uruguay=Object.create(countriesTalkSpanish);
    uruguay.capital="Montevideo"  // urugay kendi objesine yeni bir key -value ekleyebilir

    console.log("urugay başkenti:"+uruguay.capital + " ,urugay bölgesi:"+uruguay.continent+", urugay dili:"+uruguay.language)

uruguay.language="engilish"
console.log(uruguay.language) // yanlızca uruguay objesinin değişik çünkü kalıtım aldığı sınıftan aslında bir nesnedir oop gibidir
console.log(countriesTalkSpanish.language)

