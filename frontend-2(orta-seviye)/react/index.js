// es6 sayesinde artık bu şekilde çalışmaz onun yerine aşşağıdaki gibi "import"
//var slugify = require('slugify')

import slugify from "slugify";
// slugify('some string', '_') 
// output: some_string  , şeklinde noşluğa hangi karakter geleceğinide seçebiliriz.



// iç kaynak kodlarımızla belli fonksiyonların old bir javaScript dosyasınıda "import" edebiliriz
import topla,{metin,obj} from "./my-module.js";
//iç kaynaklardan import ederken eğer default 
//ise parentez dışı default değil topluca export edildiyse süslü parantez içi
let sonuc=topla(5,3);
console.log(obj,metin);
console.log("sonuc: ",sonuc);
console.log("her bir boslukta '-' koyarak basarili bir sekilde slugify calisti mi? :",slugify('some string lorem ipsum'));