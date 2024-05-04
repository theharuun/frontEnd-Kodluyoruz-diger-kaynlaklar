import React from 'react'
import { useState } from 'react'

function  List({contacts}) {
  //filter text yakalmak için state gönderdik
  const [filterText,setFilterText]=useState("");

  // gelen contacts filtreledik 
  //item olarak gelen objelerin her bir keyini döndük
  //döner her bir keyin varsa geri döndurdu içeriyor mu diye baktık 
  const filtered=contacts.filter((item)=>{
    return Object.keys(item).some((key)=>{ 
      return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase());
    })
  })
 
   
  return (
    <div> 
    <input 
    placeholder="filter contact"
    value={filterText}
    onChange={(e)=>{setFilterText(e.target.value)}}
    />

      <ul className='list'>
     {
      // filtrelenmiş arrayi mapliyoruz her biri bir contact getiriyor ve bunları listeye yazıyoruz
      filtered.map((contact,i)=>
        { return (<li key={i}>
          <span>{contact.fullName}</span>
          <span>{contact.phone_number}</span>    </li> )})
     }
      </ul>

    </div>
  )
}

export default  List