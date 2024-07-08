import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>

  )
}

export default App
