// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting")    // burada idsi greeting yakaladık ve onun yerine yazabiliriz istediklerimizi
greeting.addEventListener("click", domClick)  // artık dom objectlerine dilediğimizi atabilriiz 
// .addEventListener("objeckt değişmesi istediğimiz fonk", func())

function domClick() {
    console.log("etkinlik denetlendi")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
    // her tıkladığımızda rengi değişicek kırmızıysa siyah olsun kırmızı değilsede kırmızı olsun tempory bölümüyle oluşturduk
}