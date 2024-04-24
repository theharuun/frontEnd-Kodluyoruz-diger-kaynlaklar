// ** form submit

let formDOM=document.querySelector("#userForm")


formDOM.addEventListener(`submit`,formSubmit)

function formSubmit(event){
    event.preventDefault() // default islemini engelledik
    console.log("islem gerceklesti")
}