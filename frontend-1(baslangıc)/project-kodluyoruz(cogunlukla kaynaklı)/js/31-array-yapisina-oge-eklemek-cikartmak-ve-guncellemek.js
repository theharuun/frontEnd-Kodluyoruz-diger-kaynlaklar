// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Array: sona oge/eleman eklemek -> push
items.push(50)
console.log("items - 50 sona eklendi : ", items)

// Array: basa oge eklemek -> unshift 
items.unshift(5)
console.log("items - 5 basa eklendi : ", items)

// Array: sondaki ogeyi cikarmak -> pop
let lastItem=items.pop()// son elemanı tuttuk
console.log("cikan eleman : ",lastItem, items) // silineni ve arrayi yazdik

// Array: bastaki ogeyi cikarmak -> shift
let firsItem=items.shift()  // ilk elemanı sildi silerken tuttu
console.log("ilk siradan 5 silindi : ",firsItem , items)

// Array icindeki bir ogenin bilgisinin degistirilmesi:
items[2]=25 // 30-> 25 yazdik
console.log("2.indextekinin(30) yerine 25 yazdik : " , items[2], items)

// ilk ogenin degistirilmesi
items[0]=8
console.log("0.indextekinin(10) yerine 8 yazdik : " , items[0], items)

// sonuncu ogenin degistirilmesi:
items[items.length-1]=45 // son ögenin yerine yazdik 40->45
console.log("sonuncu indextekinin(40) yerine 45 yazdik : " , items[items.length-1], items)
