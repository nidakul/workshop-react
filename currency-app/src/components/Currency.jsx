import React, { useState } from 'react'
import "../css/currency.css"
import axios from 'axios';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_x5Ni0cP9q2gskQ7guuX3DS7WoqDI6WaQNHMAq6nN";

const Currency = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

    return (
        <div className='currency-div'>
            <div className='title'>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div className='currency'>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type='number' className='amount' />

                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaRegArrowAltCircleRight className='right-arrow' />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result' />

            </div>
            <div>
                <button onClick={exchange} className='exchange-btn'>Çevir</button>
            </div>
        </div>
    )
}

export default Currency 