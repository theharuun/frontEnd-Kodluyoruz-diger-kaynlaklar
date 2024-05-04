import React from 'react'
import {useState , useEffect} from "react"
// useeffect değişiklikleri yakalayan ve ona göre bir bilgi içeren bir şey diyebilirz

export default function Counter() {
    const [number,setNumber]=useState(0);
  
  
  // (bileşenler bir kez birleştirili kaynaştırıldı anlamı verir böylece o köşeli parantezle)
    useEffect(()=>{
      console.log("component mount edildi");

     const aralik= setInterval(() => {setNumber((n)=>n+1)} ,1000)


      return ()=>{
        clearInterval(aralik);
        console.log("component unmount edildi");}
    },[])
    //compenents unmount edilmesi için sonda return ifadesiyle yapılması gerekiyor 
    //burada return ifadesiyle unmount old setinterval temizle diyerek işlemi durdurdum
    
    useEffect(()=>{
      console.log("number state güncellendi");
    },[number])
   
  return (
  <>
      <div>Counter</div>
      <div>
        <h2>{number}</h2>
        <button onClick={()=>setNumber(number+1)}>click</button>

        <hr />

     </div>


  </>
  )
}













//APP.JS İLK DERSİYDİ
// import React from 'react'
// import {useState , useEffect} from "react"
// // useeffect değişiklikleri yakalayan ve ona göre bir bilgi içeren bir şey diyebilirz

// export default function Counter() {
//     const [number,setNumber]=useState(0);
//     const [name,setName]=useState("Dede");
  
//   // (bileşenler bir kez birleştirili kaynaştırıldı anlamı verir böylece o köşeli parantezle)
//     useEffect(()=>{
//       console.log("component mmount edildi");

//       setInterval(() => {setNumber((n)=>n+1)} ,10000000)
//     },[])
//     useEffect(()=>{
//       console.log("number state güncellendi");
//     },[number])
//     useEffect(()=>{
//    console.log("Dede o parayı sana verecek");
//     },[name])
//   return (
//   <>
//       <div>Counter</div>
//       <div>
//         <h2>{number}</h2>
//         <button onClick={()=>setNumber(number+1)}>click</button>

//         <hr />

//         <h2>{name}</h2>
//         <button onClick={()=>setName("Selim")}>click</button></div>


//   </>
//   )
// }
