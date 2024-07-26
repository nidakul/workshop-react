import React from 'react'
import '../css/product.css'

const Product = ({ product }) => {
    const { id, price, image, title, description } = product;
    return (
        <div className='card'>
            <img className='image' src={image} />
            <div>
                <p style={{ textAlign: 'center', height: '80px' }}>{title}</p>
                <h3 style={{ textAlign: 'center' }}>{price}₺</h3>
            </div>
        </div>
    )
}

export default Product 