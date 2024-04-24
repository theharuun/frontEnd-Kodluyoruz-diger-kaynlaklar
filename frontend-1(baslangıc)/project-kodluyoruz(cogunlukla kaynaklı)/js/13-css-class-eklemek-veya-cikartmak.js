// ********** css class eklemek veya cikartmak **********

let greeting =document.querySelector("#greeting")
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info","seccon-class","third-class") //birden fazla class ulaştır ekledik

greeting.classList.remove("new-info","seccon-class","third-classsss") // birden fazla classı kaldırdık
console.log(greeting.classList)