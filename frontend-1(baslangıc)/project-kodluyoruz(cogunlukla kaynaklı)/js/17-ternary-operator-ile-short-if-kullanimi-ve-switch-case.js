// ********* ternary-operator-ile-short-if-kullanimi *********

//eger kullanici adin varsa yazdir yoksa kullaci bilginiz bulunamadi yaz

let username=prompt("Kullanici Bilginizi Yaziniz : ")
let info = document.querySelector("#info")

// ternary kullanimi
// kosul ? dogruysa : yanlissa
info.innerHTML=  `${username.length>0 ? username : "kullanici bilginiz bulunamadi"}`

let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(islem(23, 14, 'topla'));  // 37
console.log(islem(10, 3, 'mod'));     // Tanimlanmamis islem
/*
switch(ifade) {
    case a:
      // kod bloğu
      break;
    case b:                           switch-case kullanimi
      // kod bloğu
      break;
    default:
      // kod bloğu
  }
  */