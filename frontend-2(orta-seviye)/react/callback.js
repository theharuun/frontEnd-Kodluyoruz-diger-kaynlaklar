//ASYNC VE AWAİT ANAHTAR KELİMELERİ KULLANIMI
// AÇIKLAMA :async fonksiyonun asenkron olduğunu belirmek için, 
//await ise hangi işlemin bitmesini beklemek istiyorsak onu belirtmek için.



// setTimeout(()=>{
//     console.log("merhaba")},5000);
// ikinci kısım mili salinye cinsindendir 1000= 1 saniye
// setInterval(()=> {
//     console.log("ben her saniyede calisacagim")
// },1000);

// const merhabaDe =()=>{
//     console.log("merhaba");
// };


/**
 * böyle yaparsak rastgele yüklenme hızına bağlı çalışacaktır 
 * o yüzden böyle yapmamız gerekiyor (sırayla çalışstırmak istiyorsak)
 *   
fetch("https://jsonplaceholder.typicode.com/users")
.then((users)=>users.json())
.then((data)=>console.log("users yuklendi",data))

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((post1)=>post1.json())
.then((data)=>console.log("post1 yuklendi",data))

fetch("https://jsonplaceholder.typicode.com/posts/2")
.then((post2)=>post2.json())
.then((data)=>console.log("post2 yuklendi",data))
*/

// 3 seçenek var 
//A-) iç içe yazaarak lakin böyle calisması zordur bu dersimizn amacı async ve await idir 
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((users)=>users.json())
// .then((data)=>{ 
//     console.log("users yuklendi",data)

//    fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then((post1)=>post1.json())
//    .then((data)=>{
//     console.log("post1 yuklendi",data)

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((post2)=>post2.json())
//         .then((data)=>console.log("post2 yuklendi",data))

//   });
// });
   

// ikinci secenek   bu şekilde okuması daha kolay anonim fonk için öyle yapabiliriz
// B-)  async ve await
// async function getData(){
//    const users=await (
//     (await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json());
 

//     const post1= await (
//         (await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json());

//     const post2= await (
//         (await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json());
//     console.log("users yuklendi",users);
//     console.log("post1 yuklendi",post1);
//     console.log("post2 yuklendi",post2);

// }
// getData();

// anonim func (await()=>{})(); ile birlikte fonk oluşturup calistiradabilriz
//  (async ()=>
//  {
//     const users=await (
//         (await fetch("https://jsonplaceholder.typicode.com/users")
//         ).json());
     
    
//         const post1= await (
//             (await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         ).json());
    
//         const post2= await (
//             (await fetch("https://jsonplaceholder.typicode.com/posts/2")
//         ).json());
//         console.log("users yuklendi",users);
//         console.log("post1 yuklendi",post1);
//         console.log("post2 yuklendi",post2);
//  }
// )();

// 3 seçenek fetch yerine axios kullanımı bu sayde json kullanmayız
//C-)
// const { default: axios } = require("axios");
//üsteki gibi yada aşşağıdaki gibi dosyaya dahil etmemiz gerekiyor kütüphaneyi
import axios from "axios";

// data diğe obj döner bunları yeniden isimlendirme yapıyoruz böylece karmaşadan kurtuluyoruz
(async ()=>
 {
        const {data:users}=await axios("https://jsonplaceholder.typicode.com/users");
      
        const {data:post1}= await axios("https://jsonplaceholder.typicode.com/posts/1");

        const {data:post2}= await axios("https://jsonplaceholder.typicode.com/posts/2");
       
        console.log("users yuklendi",users);
        console.log("post1 yuklendi",post1);
        console.log("post2 yuklendi",post2);
 }
)();

    


