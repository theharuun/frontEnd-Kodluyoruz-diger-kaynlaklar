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
//  {      // await iki kez kullanıyoruz cünkü jsonda old için 
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

// data diye obj döner bunları yeniden isimlendirme yapıyoruz böylece karmaşadan kurtuluyoruz
// (async ()=>
//  {
//         const {data:users}=await axios("https://jsonplaceholder.typicode.com/users");
      
//         const {data:post1}= await axios("https://jsonplaceholder.typicode.com/posts/1");

//         const {data:post2}= await axios("https://jsonplaceholder.typicode.com/posts/2");
       
//         console.log("users yuklendi",users);
//         console.log("post1 yuklendi",post1);
//         console.log("post2 yuklendi",post2);
//  }
// )();

//PROMİSE calisma sistemi 
// return ile return new Promise
// resolve ve reject içine her şey gönderebilriz test obj number ...
const getComments=(number)=>{
       return new Promise( (resolve, reject) => {
        //1.örnek
              console.log("comments")
              if(number===1)
              resolve({test:"lorem ipsum"});       
     
              reject("hata aldiniz!!!");
     
       })
};

const getUsers=(number)=>{
       return new Promise(async (resolve, reject) => {
        //2.örnek
        const {data}=await axios("https://jsonplaceholder.typicode.com/users");      
          if(number===1)
            resolve(data,`kullanicilar yuklendi`);
       })
};

const getPosts=(post_ID)=>{
       return new Promise(async (resolve, reject) => {
        //2.örnek
        const {data}= await axios("https://jsonplaceholder.typicode.com/posts/"+post_ID);      
         
            resolve(data,`post ${post_ID} yuklendi`);
       })
};



// asyncron olarak çalışır yani birbirinden bağımsızdırlar sırayla çalışmazlar bildiğimiz compiler gibi değildir
// getComments(1)
// .then((data)=>console.log(data))
// .catch((e)=> console.log(e));

// getUsers(1)
// .then((data)=>console.log(data))
// .catch((e)=> console.log(e));

// getPosts(2)
// .then((data)=>console.log(data))
// .catch((e)=> console.log(e));

(async ()=>{
//        getComments(1)
// .then((data)=>console.log(data))
// .catch((e)=> console.log(e));

// getUsers(1)
// .then((data)=>console.log(data))
// .catch((e)=> console.log(e));

// getPosts(2)
// .then((data)=>console.log(data))
// .catch((e)=> console.log(e));

// then ve catchsiz getirme 



try {
const comment = await getComments(2);
const users= await getUsers(1);
const posts=await getPosts(2);

console.log(comment);
console.log(users);
console.log(posts);
       
} catch (error) {
       // catch bu şekilde yakalarız getCommnets(2) ile reject satırı calisti 
       console.log(error);
       
}

})();




