import React from 'react'
import "../css/currency.css"
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Currency = () => {
    return (
        <div className='currency-div'>
            <div className='title'>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div className='currency'>
                <input type='number' className='amount' />
                <select className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>
                </select>

                <FaRegArrowAltCircleRight className='right-arrow' />

                <select className='to-currency-option'>
                    <option>TL</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input type='number' className='result' />

            </div>
            <div>
                <button className='exchange-btn'>Çevir</button>
            </div>
        </div>
    )
}

export default Currency 