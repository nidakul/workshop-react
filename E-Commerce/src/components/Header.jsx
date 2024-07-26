import React, { useState } from 'react'
import "../css/header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const Header = () => {
    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket)

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = 'black';
            root.style.color = '#fff';
        } else {
            root.style.backgroundColor = '#fff';
            root.style.color = 'black';
        }
        setTheme(!theme);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>NIDA A.Ş</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type='text' placeholder='arama' />
                <div>
                    {theme ? <IoMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <Badge badgeContent={products.length} color="error">
                        <CiShoppingBasket style={{ marginRight: '6px' }} className='icon' />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header