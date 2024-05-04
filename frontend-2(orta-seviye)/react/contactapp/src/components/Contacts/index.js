import React from 'react'
import "./style.css"

import List from './Lists'
import Form from './Form'

import { useEffect,useState } from 'react'
function  Contacts () {

  //formdan gelen stateleri yakalma imkanımız yok o yüzden oraya state gönderiyoruz prop olarak 
const [contacts,setContacts]=useState([
  {
    fullName:'Mehmet',
    phone_number:"05556667878"
  },
  {
    fullName:"Ahmet",
    phone_number:"05557779898"
  },
  {
    fullName:"Selim",
    phone_number:"05551113636"
  },

]);

useEffect(()=>{
console.log(contacts);
},[contacts])

  return (
    <div id="container"> 
        <h1>Contacts</h1>
        < List contacts={contacts} />
        < Form  addContacts={setContacts} contacts={contacts}/>
         </div>
  )
}

export default  Contacts 