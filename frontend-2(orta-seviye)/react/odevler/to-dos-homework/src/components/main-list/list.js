import React from 'react'

function List({todos}) {
  return (
    <div><section class="main">
    <input class="toggle-all" type="checkbox" />
    <label for="toggle-all" >
        Mark all as complete
    </label>

    {}
    <ul className="todo-list">
        {
            todos.map((todo,i)=>{
                return (
                    <li 
                    key={i}> 
             <div class="view">
                <input class="toggle" type="checkbox" />
                <label><span>{todo.text} </span></label>
                <button class="destroy"></button>
            </div>
                    
                    
                     </li>

             ) })
        }
      </ul>
</section>
</div>
)
}

export default List
/* <ul class="todo-list">
       
        <li class="completed">
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button class="destroy"></button>
            </div>
        </li>
        <li>
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>Learn React</label>
                <button class="destroy"></button>
            </div>
        </li>
        <li>
            <div class="completed">
                <input class="toggle" type="checkbox" />
                <label>Have a life!</label>
                <button class="destroy"></button>
            </div>
        </li>
       
    </ul> */