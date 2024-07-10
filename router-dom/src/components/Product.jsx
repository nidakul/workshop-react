
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, price } = product;

    const navigate = useNavigate();

    return (
        <div style={{ marginBottom: '40px', backgroundColor: 'lightgrey' }}>
            <div>Ürün Detayı</div>
            <h3>İsim: {name}</h3>
            <h3>Fiyatı: {price}</h3>
            <button onClick={() => navigate("/product-details/" + id)}> detayına git</button>
        </div>
    )
}

export default Product 