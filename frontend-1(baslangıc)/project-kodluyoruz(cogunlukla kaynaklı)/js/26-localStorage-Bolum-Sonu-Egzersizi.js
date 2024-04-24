//********* localStorage-Bolum-Sonu-Egzersizi  **********

let counter = localStorage.getItem(`counter`)? Number( localStorage.getItem(`counter`)):0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter   // conter idsine sahip domun yerine artık counterdaki ifadeyi yazdik

increaseDOM.addEventListener("click", clickEvent)  // inc özel addeventlistener oluşturduk
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ?  counter += 1 : counter -= 1
    localStorage.setItem(`counter`,counter)
    counterDOM.innerHTML = counter

}

// 3.satırda localstrogeda counter adlı atadığım değişken varsa numbera cevirerek 
//-getir yoksa sıfır ata dedik 

// 3.satırın var şartını sağlamak için fonk çağrıldığında etkin olucak
//- şekilde yaptık yani veriler silinirse 0 atanıcak sonra fonk kullanılırsa locale giricektir
