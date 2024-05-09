import React, { useState } from 'react'
import '../css/currency.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';


// api aldigim site" https://app.freecurrencyapi.com/dashboard"
let BASE_URL="https://api.freecurrencyapi.com/v1/latest";  // base url budur bunsuz ulasamam
let API_KEY="fca_live_akdPQa0eRhiqWo0FX3AiKqAvQgGY7i1PHAqpez6F" // bu url api budur bana ozel olan bu 


function Currency() {
   
    const [amount,setAmount]=useState(); // girilen değeri tutan state
    const [fromCurrency,setFromCurrency]=useState('USD'); // girilenin cinsini tutan state
    const [toCurrency,setToCurrency]=useState('TRY');  // sonucun cinsini tutan state
    const [result,setResult]=useState(0); // sonucun degerini tutan state
    


    const exChange=async()=>{
    // async olarak calismali çünkü önce apiden dövizimizin karsilik geldiği degerleri cekip sonra bunlari ilgili yerlerde göstermemiz gerekiyor
    

    // axios ile api getirdik basecurrencyi fromdan yani girilen cinsten cektik 
        const response=await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        // cekilen verilerden cevirmek istediğimiz cinsi array yapisinda secip onu girdigimiz amount ile carpip fixledik sonra bunu res degiskenine atadik
        const res= (response.data.data[toCurrency]*amount).toFixed(2);  // .dan sonra 2 basamak olucak sekilde yuvarlama yapiliyor
        // atadigimiz res degiskenindeki degeri result set ederek  uygulamamizi bitirdik
        setResult(res);
      
      
        // const res=async()=>{ await response.data.data[toCurrency] * amount}
        // axios.put(result,async()=>{ await response.data.data[toCurrency] * amount}); // setResult var

    }


    /*
    ilk inputu =amount 
    ilk selecti =from 
    ikinci selecti =to
    ikinci inputu=result
    */

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