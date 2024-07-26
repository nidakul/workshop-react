import React from 'react'
import Home from '../pages/Home'
import { Routes, Route } from "react-router-dom"
import ProductDetails from '../components/ProductDetails'

const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products-details/:id" element={<ProductDetails />} />
        </Routes>
    )
}

export default RouterConfig

