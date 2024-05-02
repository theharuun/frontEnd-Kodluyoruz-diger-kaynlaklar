import {useState} from "react";

// useState önce import edeek onu kullandım default olarak atamasını yaptım 
//lakin sonrasında state güncelleyebiliriliz 
//her hangi bir değişiklik old return den tekrardan yüklenir sayfa

function App() {
  const [name,setName]=useState(' Mehmet');
  const [age ,setAge]=useState(21);
  const [friends,setFriends]=useState(["ahmet","murat"]);
  const [address,setAddress]=useState({title:"cekmeköy/istanbul",id:2525});
  return (
    <div className="App">
    <h1> Merhaba! {name} </h1>
    <h2>{age}</h2>
    <button onClick={()=> setName("Ahmet")}>ClickforName</button>
    <button onClick={()=> setAge(18)}>ClickforAge</button>
 
    <hr/>
    <br/>

    <h2>FRİENDS</h2>
  {friends.map((friend,index)=> <div key={index}>{friend}</div>)}
  <br/>
  <button onClick={()=> setFriends([...friends,"selim"])}>Add new Friend</button>


  
    <hr/>
    <br/>

    <h2>adress</h2>
    {<div>{address.title} {address.id}</div>}
    <button onClick={()=> setAddress({...address,title:"karabuk"})}>Add new Adress</button>
    </div>
       
    
   
  );
}

export default App;
