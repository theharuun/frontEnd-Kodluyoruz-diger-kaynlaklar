// local stroga islemleri-JSON kullanımı

let user = { username : "harunkorkmaz",isActive: false}
console.log(user.isActive)

localStorage.setItem(`userInfo`,JSON.stringify(user))    // büyük bir string ifade olucak
// ve bize object olarak ceviricek eger normal atarsak böylece tamaemen stringe döndürdü

let userInfo=localStorage.getItem(`userInfo`)  // getirdiğimiz bilgiyi atadık ama olmadı
userInfo=JSON.parse(userInfo) // bu sefer parselledik bir nevi ve öyle atayınca oldu
console.log(userInfo.isActive)
