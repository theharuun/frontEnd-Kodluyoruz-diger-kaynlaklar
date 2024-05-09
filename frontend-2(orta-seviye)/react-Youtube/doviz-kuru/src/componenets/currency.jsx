import React, { useState } from 'react'
import '../css/currency.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';



let BASE_URL="https://api.freecurrencyapi.com/v1/latest";
let API_KEY="fca_live_akdPQa0eRhiqWo0FX3AiKqAvQgGY7i1PHAqpez6F"


function Currency() {
   
    const [amount,setAmount]=useState();
    const [fromCurrency,setFromCurrency]=useState('USD');
    const [toCurrency,setToCurrency]=useState('TRY');
    const [result,setResult]=useState(0);
    
// let EXCHANGE_API=cd 

    const exChange=async()=>{
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);

        const response=await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const res= (response.data.data[toCurrency]*amount).toFixed(2);  // .dan sonra 2 basamak olucak şekilde yuvarlama yapılıyor
        setResult(res);
      
      
        // const res=async()=>{ await response.data.data[toCurrency] * amount}
        // axios.put(result,async()=>{ await response.data.data[toCurrency] * amount}); // setResult var

    }



  return (
    <div className='currency-div'>
        <div>
            <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>
        <div style={{paddingInline: '19px' ,}} >
        <input 
        value={amount}
        onChange={(e)=>{setAmount(e.target.value)}}
        type="number" className='amount' />
        <select 
        onChange={(e)=>{setFromCurrency(e.target.value)}}
        className='from-currency-option'>
        <option>USD</option>
        <option>TRY</option>
        <option>EUR</option>

        </select>


        <button 
        onClick={exChange}
        className='btn-donustur'>  <FaLongArrowAltRight /></button>

        <select 
        onChange={(e)=>{setToCurrency(e.target.value)}}
        className='to-currency-option'>
        <option>TRY</option> 
        <option>USD</option> 
        <option>EUR</option>

        </select>
        <input
        value={result}
        onChange={(e)=>{setResult(e.target.value)}}
        type="number" className='result' />
        </div>
        </div>
  )
}

export default Currency