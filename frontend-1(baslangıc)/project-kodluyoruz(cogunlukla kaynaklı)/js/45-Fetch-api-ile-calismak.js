//fetch api ile calismak
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// önce datayı aldık sonra ekrana yazdırdık
//SJSON dosyasından data çektik
fetch("data/settings.json").then(
    response=>{
    return response.json
    }
).then(responseJson=>{
    console.log(responseJson)
    console.log(responseJson.userName)
}
)
console.log("***************************************")
let userlistDOM=document.querySelector("#userList")
let li


// API üzerinden veri çektik 
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJsonn=> {
    responseJsonn.forEach(element =>{
        let liDOM=document.createElement('li')
        liDOM.innerHTML=element.title
        userlistDOM.appendChild(liDOM)
    }) })


//API üzerinden başka bir örnek
fetch("https://jsonplaceholder.typicode.com/users")
.then( response=> response.json())
.then(json=>console.log(json))
.catch(err=>console.log(err))


// API diğer örnek
fetch("https://jsonplaceholder.typicode.com/comments")
.then(response=> response.json())
.then(resposeJson => resposeJson.forEach(item=>console.log(item[0].email)))
.catch((err) => console.log(err))