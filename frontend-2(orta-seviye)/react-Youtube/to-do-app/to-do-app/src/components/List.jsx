import React from 'react'
import Todo from './Todo'


// gelen propslari sayfama dahil ettim
function List({todos , onRemoveTodo ,onUpdateTodo}) {
  return (
    <div style={{width:'600px',marginTop:'20px'}}>
       {
        // todos varsa todos map fonksiyonuyla her bir todoyu ayni ve TODO sayfama props olarak yolla bana gelen props ozelliklerini
        todos && todos.map((todo)=>{
         return(  <Todo  key={todo.id} todo={todo}  onRemoveTodo={onRemoveTodo}   onUpdateTodo={onUpdateTodo} />)
        })
       }
    </div>
  )
}

export default List