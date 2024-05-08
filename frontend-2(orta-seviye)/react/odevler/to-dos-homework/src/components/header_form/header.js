import React from 'react'
import { useState ,useEffect } from 'react'

const initialValue={text:"",done:""};
function Header({addTodo,todos}) {
    const [form,setForm]=useState(initialValue);
    
    useEffect(()=>{
      setForm(initialValue);
  },[todos]);
    
    const changeInput=(e)=>{
      setForm({...form,[e.target.name]:e.target.value});
  }

  const onSubmit=(e)=>{
    e.preventDefault();

    if(form.text===""){return false;}

    addTodo([...todos,form]);

    console.log(form);
}
  return (
    <div>
    <header class="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
            <input 
            name="text"
            class="new-todo" 
            placeholder="What needs to be done?" 
           
            onKeyUp={changeInput}
             autoFocus />
            
        </form>
    </header>
</div>
  )
}

export default Header