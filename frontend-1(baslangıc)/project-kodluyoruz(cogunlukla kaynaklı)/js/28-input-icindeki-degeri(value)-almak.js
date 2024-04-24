// ** INPUT içindeki degeri almak

let formDOM=document.querySelector("#userForm")


formDOM.addEventListener(`submit`,formSubmit)

function formSubmit(event){
    event.preventDefault() // default islemini engelledik
    console.log("islem gerceklesti")
    let scoreInputDOM= document.querySelector(`#score`)
    console.log(scoreInputDOM.value)
    localStorage.setItem(`score`,scoreInputDOM.value)
}