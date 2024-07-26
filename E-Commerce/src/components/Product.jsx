import React from 'react'
import '../css/product.css'
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, price, image, title, description } = product;

    const navigate = useNavigate();

    return (
        <div className='card'>
            <img className='image' src={image} />
            <div>
                <p style={{ textAlign: 'center', height: '80px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price}₺</h3>
            </div>
            <div className='flex-row'>
                <button className='detail-btn' onClick={() => navigate("/products-details/" + id)}>Detayına git</button>
            </div>
        </div>
    )
}

export default Product 