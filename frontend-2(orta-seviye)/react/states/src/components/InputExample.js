import {useState} from 'react'

function InputExample() {
    const [form,setForm]=useState({name:"",surname:""});
    
    const onChangeInput=(e)=>{
        setForm({...form , [e.target.name]: e.target.value});
    };
    
    const onChangeName=(e)=>{setName(e.target.value)};
    const onChangeSurName=(e)=>{setName(e.target.value)};


  return (

    <div>
        <h2> name</h2>
        <input name="name" value={form.name} onChange={onChangeInput}></input>
        <br />
        <br />
        <h2> surname</h2>
        <input surname="name" value={form.surname} onChange={onChangeInput}></input>
        <br />
        {form.name}  {form.surname}
    </div>
  )
}

export default InputExample