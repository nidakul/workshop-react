import React, { useState } from 'react'
import "../css/header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";

const Header = () => {
    const [theme, setTheme] = useState(false);

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
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>NIDA A.Ş</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type='text' placeholder='arama' />
                <div>
                    {theme ? <IoMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
                    <CiShoppingBasket className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Header