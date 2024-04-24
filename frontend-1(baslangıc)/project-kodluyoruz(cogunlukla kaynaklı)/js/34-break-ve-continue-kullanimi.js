// Break & Continue
// https://www.w3schools.com/js/js_break.asp

const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur,', 'adipisicing', 'elit' 
  ]
  
let counter=0


// for(;counter<10;counter++){
//     console.log("counter break öncesi:",counter);

//     if(counter===5) {break}         //BREAK
//     console.log(counter);
// }


// for(;counter<10;counter++){          //CONTİNUE
//    // console.log("counter break öncesi:",counter);

//     if(counter===5) {continue}   // 5 sayısına eşit olduğunda devam et diyerek o kısmı atladı yani 5 yazdırmadı
//     console.log(counter);
// }

const UL_DOM=document.querySelector(`#userList`)

let index=0
for(;index<LOREM_LIST.length;index++)
{
    if(LOREM_LIST[index]=="dolor"){break}
    console.log(LOREM_LIST[index])     // dolora kadar yazdı dolordan sonrasını yazmadi biz sadece doloru yazmasın istiyoruz
    let  LI_DOM=document.createElement(`li`)
    LI_DOM.innerHTML=LOREM_LIST[index]
    UL_DOM.appendChild(LI_DOM)
}


for(;index<LOREM_LIST.length;index++)
{
    if(LOREM_LIST[index]=="dolor"){continue}
    console.log(LOREM_LIST[index])     //  doloru yazmadı
    let  LI_DOM=document.createElement(`li`)
    LI_DOM.innerHTML=LOREM_LIST[index]
    UL_DOM.appendChild(LI_DOM)
}