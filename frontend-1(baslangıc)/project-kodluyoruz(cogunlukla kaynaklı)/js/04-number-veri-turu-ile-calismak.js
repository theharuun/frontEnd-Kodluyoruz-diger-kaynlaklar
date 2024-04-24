// ********** Number Veri Turu ile Calismak ********** 
// number veri turu tanimlamak:
let price=100
let tax=0.18
let priceTax=price*tax
let Total=price+priceTax
console.log(
    "Fiyat:",price,
    "KDV Orani:"+tax,
    "KDV:"+priceTax ,
     "Net Fiyat:",Total)  // virgül veya + kullanarak string ifadeler ekleyebilriz


let stringNumber = "11"
console.log(stringNumber)
let newNumber= Number(stringNumber)
console.log(newNumber)
console.log(" number constructor ile string ifade sayiya donustu:  ",Number("111"))




// arttirma ve azaltma islemleri:

let counter = 320
counter =counter+1;  //uzun yöntem
counter +=1; //uzunun bir kısası
counter ++; //en kısası
console.log(counter)

counter --;
counter -=1;
console.log(counter)

counter *=10;
console.log(counter)

counter /=2;
console.log(counter)



// islem onceligi:   burada vardır
// https://tr.wikipedia.org/wiki/%C4%B0%C5%9Flem_s%C4%B1ras%C4%B1
console.log(3-5*10)  // -47 çıkar * önceliklidir


// mod(kalan) alma %:
// sayi tek mi cift mi ???
console.log(29%2)  // kalan 1 tekdir
console.log(96%2)  // kalan 0 bu yüzden çift


// 8 urun alan koliye tum urunler sigiyor mu ?

console.log("39 yumurta var 8 li kolilere koyduk son kolide kaç boşluk olur ?",
"son kolide dolu yer :" , 39%8 ,
"kalan yer :", 8-(39%8))

// us alma **:
console.log(2*2*2*2)
console.log(2**4)   // üstekiyle aynı sonucu verir üst almak için "**" ifadesini kulanılırız

// asagi yuvarlama islemi -> Math.floor:
console.log( Math.floor(12,85))  //12

// yukarı yuvarlama islemi -> Math.ceil:
console.log( Math.ceil(50,6))   //51

// yanina yuvarlama islemi -> Math.round:
console.log( Math.round(12,9))  //13