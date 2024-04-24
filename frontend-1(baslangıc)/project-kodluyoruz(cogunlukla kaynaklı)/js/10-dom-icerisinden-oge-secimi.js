// ********** DOM Icinden Oge Secimi **********

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

let title=document.getElementById("title")
title.innerHTML="degisen bilgi"
console.log(title.innerHTML)



// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
let link=document.querySelector("ul>li>a")
link.innerHTML  += " degisti"
console.log(link.innerHTML)
link.style.color="red"

// let h2 = document.getElementsByTagName('h2')

