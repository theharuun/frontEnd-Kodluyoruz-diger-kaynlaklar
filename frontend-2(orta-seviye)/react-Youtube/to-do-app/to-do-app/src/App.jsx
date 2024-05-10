import { useState } from 'react'

import './App.css'
import Todocreate from './components/Todocreate'
import List from './components/List'

function App() {

  // global alanda her componentsin erisebilecegi state olusturduk
  const [todos,setTodos]=useState([]);
  
  // yeni bir todo olusturuldugunda calisacak fonksiyon
  const createTodo=(newTodo)=>{

    setTodos([...todos,newTodo]);
    
  }


  // var olan bir todo kaldirilicaginda calisacak fonksiyon
  const removeTodo =(todoId)=>{
    
    // filter olarak aradigimiz todoyu bulduk ve kaldirdik
    setTodos([...todos.filter((todo)=> todo.id!==todoId )])

   // idleri eşit olmayanları extracted arraye koydu    
   // const extractedArray=todos.filter((todo)=>{todo.id!==todoId });
     
    }


    // var olan todo guncellendiginde calisacak fonksiyon
    const updateTodo = (newTodo) =>{
      //todo ları maple donduk gonderilen todo ile herhangi bir aynıysa return yaptik buradan donenleride setledik
     const updatedTodos= todos.map((todo)=>
        { if(todo.id !== newTodo.id){
          return todo;
        }
         return newTodo;

        })


        setTodos([...updatedTodos]);
    }

  console.log(todos);

  
 


  /*
       todocreat sayfama props olarak create fonksiyonunmu yolladim
      <Todocreate  onCreateTodo = {createTodo} />
      
      list sayfamda yer almasi gereken todolarimi , ve güncellestirme , silme fonksiyonlarini yolladim
      <List  todos={todos}  onRemoveTodo={removeTodo}  onUpdateTodo={updateTodo}  />
   */


  return (
    <div className='App'>
    <div className='main' >

      <h1>YAPILACAKLAR UYGULAMASI </h1>
    
    <Todocreate  onCreateTodo = {createTodo} />
     </div>
    <List  todos={todos}  onRemoveTodo={removeTodo}  onUpdateTodo={updateTodo}  />
  
   


    </div>
  )
}

export default App
