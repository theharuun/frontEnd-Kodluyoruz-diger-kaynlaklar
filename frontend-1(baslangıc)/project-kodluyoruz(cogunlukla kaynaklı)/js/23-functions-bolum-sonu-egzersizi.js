// Functions Bolum Sonu Egzersizi

let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter   // conter idsine sahip domun yerine artık counterdaki ifadeyi yazdik

increaseDOM.addEventListener("click", clickEvent)  // inc özel addeventlistener oluşturduk
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ?  counter += 1 : counter -= 1
    counterDOM.innerHTML = counter

}