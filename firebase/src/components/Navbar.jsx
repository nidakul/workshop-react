import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
    const navigate = useNavigate();
    const logout = async () => {
        toast.success("Çıkış yapılıyor")
        setTimeout(() => {
            signOut(auth)
            navigate("/auth")
        }, 3000);
    }
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                FIREBASE
            </div>
            <div onClick={logout} className='navbar-right'>Çıkış Yap</div>
        </div>
    )
}

export default Navbar 