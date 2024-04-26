import axios from "axios"


//isimli fonksiyon
const getUsers=async (number)=>{

   
    const {data:user}=await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
    const{data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);
   
    console.log("user",user);
    console.log("post ",post[0]);
   
    
}

export default getUsers;

/**
 * import axios from 'axios';

async function getData(number) {
    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
    const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`);

    console.log('users', user);
    console.log('posts', post);
};

export default getData;
 */
//anonim fonksiyon

// (async (Id,postId)=>{
//     const {data:id}=await axios("https://jsonplaceholder.typicode.com/users/"+Id);
//     const {data:post}=await axios("https://jsonplaceholder.typicode.com/posts/"+postId);

//     if(Id,postId)
//     {
//         console.log("user yuklendi",id);
//         console.log("post yuklendi",post);
//     }
    
// })(5,2);