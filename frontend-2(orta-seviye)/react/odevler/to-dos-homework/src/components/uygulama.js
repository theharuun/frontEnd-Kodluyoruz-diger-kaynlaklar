import React, { useState ,useEffect} from 'react'
import Footer from './footer/footer';
import Header from './header_form/header';
import List from './main-list/list';


function Uygulama() {
 const [todos,setTodo]=useState([
  {
    text:"Learn JavaScript",
    done:true,
  },
  {
    text:"Learn React",
    done:true,
  },
  {
    text:"Have a life!",
    done:true,
  },

 ]);
 useEffect(()=>{
  console.log(todos);
},[todos]);
  return (
    <div>

  <Header addTodo={setTodo} todos={todos} />
	<List   todos={todos} />
	<Footer todos={todos}  />
    </div>
  )
}

export default Uygulama