import axios from "axios"


//isimli fonksiyon
// const getUsers=(user_ID,posts)=>{

//    return new Promise( async (resolve, reject) => {
//     const {data:user}=await axios("https://jsonplaceholder.typicode.com/users/"+user_ID);
//     const{data:post} = await axios("https://jsonplaceholder.typicode.com/posts/"+posts);
    

//     if(user_ID && posts)
//     {
//     console.log("user yuklendi",user);
//     console.log("post ",post);
//     }
//     else
//     {
//         reject("bir hata olustu");
//     }
//    })
// }
// getUsers(1,1)
// .then((data)=>console.log(data))
// .catch((e)=>console.log(e));



//anonim fonksiyon

(async (Id,postId)=>{
    const {data:id}=await axios("https://jsonplaceholder.typicode.com/users/"+Id);
    const {data:post}=await axios("https://jsonplaceholder.typicode.com/posts/"+postId);

    if(Id,postId)
    {
        console.log("user yuklendi",id);
        console.log("post yuklendi",post);
    }
    
})(5,2);