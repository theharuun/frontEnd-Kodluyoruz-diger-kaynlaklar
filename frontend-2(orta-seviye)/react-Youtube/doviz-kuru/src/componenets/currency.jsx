import React from 'react'
import '../css/currency.css'
import { FaLongArrowAltRight } from "react-icons/fa";

function Currency() {
  return (
    <div className='currency-div'>
        <div>
            <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>
        <div style={{paddingInline: '19px' ,}} >
        <input type="number" className='amount' />
        <select className='from-currency-option'>
        <option>USD</option>
        <option>TL</option>
        <option>EUR</option>

        </select>
        <button className='btn-donustur'>  <FaLongArrowAltRight /></button>

        <select className='to-currency-option'>
        <option>TL</option> 
        <option>USD</option> 
        <option>EUR</option>

        </select>
        <input type="number" className='result' />
        </div>
        </div>
  )
}

export default Currency