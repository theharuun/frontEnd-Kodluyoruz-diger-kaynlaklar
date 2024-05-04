import React, {  } from 'react'
import { useState, useEffect} from 'react'


// her seferinde sıfırlaması içiin bir değişkene atama yaptık
const initialValues={fullName:"",phone_number:""};
// formun içine contacten birer prop yolladık çünkü bu proplara form içinde tuttuğumuz stateleri atayarak contact sayfamıza taşıyabiliriz
function  Form({addContacts,contacts}) {

const [form,setForm]=useState(initialValues);

//contact değiştiğinde yani contacte yeni bir şey eklendiğinde initiall values ata 
useEffect(()=>{
setForm(initialValues);
},[contacts])

// input değiştiğinde aldığımız objenin(e) hedef.(target).name(fuulname||phonenumber): hedefteki value ata
const onChangeInput=(e)=>
    {
        setForm({...form,[e.target.name]:e.target.value});
    }
 // form submit olduğunda boşluğa düşmesini engelledik önce
 // sonra herhangi bir input boş geçilirse formu çalıştırmamasını yaptık   
 // contactten aldığımız proplarla statelere form ekledik
 const onSubmit=(e)=>{
    e.preventDefault();

    if(form.fullName==="" || form.phone_number==="")
        {return false;}

    addContacts([...contacts,form]);


console.log(form);
}

  return (
    <form onSubmit={onSubmit}> 
        <div>
           <input name="fullName"
            placeholder='Full Name' 
            value={form.fullName}
             onChange={onChangeInput} 
             ></input>
        </div>
        <div>
           <input name="phone_number"
            placeholder='Phone Number' 
            value={form.phone_number} 
            onChange={onChangeInput} ></input>
        </div>

        <div>
           <button className='btn'>Add</button>
        </div>

    </form>
  )
}

export default  Form