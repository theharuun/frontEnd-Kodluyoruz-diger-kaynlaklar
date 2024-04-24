// array - dizilerle calismak

// Array olusturmak
let domain="kodluyoruz"
let isActive=false
let items =[15,25,35,isActive,domain]
console.log(items)

let emptyArray= []  // boş liste

// Array icerisindeki eleman/oge sayisini ogrenmek
console.log(items.length) //array içindeki öge sayısını gsterdidir


//document.querySelector(`#info`).innerHTML=items.length

// Array icindeki ilk elemanin cagirilmasi
console.log("1.eleman=" + items[0])


// Array icindeki son elemanin cagirilmasi
console.log("son eleman= "+ items[items.length-1] )
// Array icindeki ortadaki elemanin cagirilmasi
console.log("orta eleman =", items[Math.floor(items.length/2) ] )  // items[2]

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log("türü nedir " + typeof(items))  // object olarak çıktı veriyor
 
console.log("türü nedir " + Array.isArray(items) ) // true olarak verdi

// hangileri isArray -> True verir ? 
console.log(" [] : " , Array.isArray( [] ) )
console.log(" 1 : " , Array.isArray( 1 ) )
console.log(" true : " , Array.isArray( true ) )

