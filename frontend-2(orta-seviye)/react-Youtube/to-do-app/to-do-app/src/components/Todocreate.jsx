import React, { useState } from 'react'
import '../App.css'

function Todocreate({onCreateTodo}) {

    const [newTodo,setNewTodo]=useState('');


    const clearInput=()=>{
        setNewTodo('');

    }

    const createTodo =()=>{
     if(!newTodo){return false;}

        const request={
            id: Math.floor(Math.random()*9999999999),
            content:newTodo
        }
        onCreateTodo(request);
         clearInput();
    }


  return (
    <div  className='todo-create'>
        
        <input 
        value={newTodo}
        onChange={(e)=>{setNewTodo(e.target.value)}}
        className='todo-input' type="text" placeholder='TO-DO GİRİNİZ' autoFocus/>
        <button onClick={createTodo}  className='btn-todo'>TO-DO OLUŞTUR</button>


    </div>
  )
}

export default Todocreate