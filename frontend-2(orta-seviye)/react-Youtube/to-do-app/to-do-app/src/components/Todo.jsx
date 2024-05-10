import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css'


// gonderilen todo propslarini yakaladik
function Todo({ todo ,onRemoveTodo , onUpdateTodo}) {

  const {id,content}=todo;  // destructing yaptik 


  //tabloda iconlari editlemek icin state kullandik
  const [ediTable,setEdiTable]=useState(false);

  //güncelleme zamaninda kullacagimiz state olusturduk
  const [newTodo,setNewTodo]=useState(content);


  // (id ye gore kaldirma islemi yapildi) kaldirma zamaninda calisicak fonksiyon boyle yapma sebebimiz props olaraak gelen onremove javascript olarak burada kullaniyoruz html icinde yazmamamay calisiyoruz
  const Remove = ()=>{
    onRemoveTodo(id);
  }


  // guncelleme zamaninda calisicak fonksiyon boyle yapma sebebimiz props olaraak gelen onremove javascript olarak burada kullaniyoruz html icinde yazmamamay calisiyoruz
  // donen idleri esitse guncelleyecek ve setediti false cevirerek iconu degistirecek
  const updateTodo = ( )=>{
    const request = {
      id : id,
      content : newTodo
    }
    onUpdateTodo(request);
    setEdiTable(false);
  }

  return (
    <div style={{display:'flex',flexDirection:'row',alignContent:'center',justifyContent:'space-between',border:'3px solid burlywood' , marginTop:'6px' , padding:'5px'
    }}>

     <div>
        {ediTable ?  <input 
        style={{width:'380px'}}
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}
        className='todo-input' type="text" placeholder="TO-DO DÜZELTİNİZ" autoFocus/> : content }
     </div>

      <div>
        
          <IoIosRemoveCircle onClick={Remove} className='todo-icons' />
          { 
           // usteki remove iconuna tıkladıgında remove fonk calisir ve todoyu kaldirir




            // edittable true ise FaCheck (tiklandiginda gunceleme fonksiyonu devreye girsin ) iconu devreye girsin degilse faRegEdit (tıklandıgında edit kısmı acilsin)  girsin 
            ediTable ? <FaCheck className='todo-icons' onClick={()=> updateTodo} /> :  <FaRegEdit   onClick={()=> setEdiTable(true)} /> 

          }
          
         
      </div>

    </div>
    
  )
}

export default Todo