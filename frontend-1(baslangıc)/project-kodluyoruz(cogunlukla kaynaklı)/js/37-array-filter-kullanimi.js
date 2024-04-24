// array filter kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODCUTS=PRODUCTS.filter(item=>item.length>5) //itemin lenghti 5den büyük olanları yeni bir diziye soktuk
console.log(NEW_PRODCUTS)

/**
 * filterla birlikte bir listeyi istediğimiz şekilde fitreleyip yeni bri liste oluşturabilriiz
 */

// aktif kullanicilar ??
const USERS = [
  {fullName: "Ayse Sumer", isActive: false},
  {fullName: "Ahmet Urgan", isActive: true},
  {fullName: "Asya Basar", isActive: true},
  {fullName: "Aksel Durmaz", isActive: false},
]

const ACTIVE_USERS=USERS.filter(item=>item.isActive==true) // active olanları aldık
ACTIVE_USERS.forEach(item=>console.log(item.fullName))
console.log(ACTIVE_USERS)

let activelistDOM=document.querySelector(`#userList`)
ACTIVE_USERS.forEach(item=>{
   const LiDOM=document.createElement('li')
   LiDOM.innerHTML=item.fullName
   activelistDOM.append(LiDOM)  
})

