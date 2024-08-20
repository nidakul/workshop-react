import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                toast.success("Kullanıcı oluşturuldu")
                setEmail('')
                setPassword('')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className='auth'>
            <h3 className='auth-header'>Giriş Yap / Kaydol</h3>
            <div className='input-div'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Şifre' />
            </div>
            <div className='button-div'>
                <button className='google-button'><FaGoogle style={{ marginTop: '2px', marginRight: '5px' }} />Google İle Giriş</button>
                <button className='login-button'>Giriş Yap</button>
                <button onClick={register} className='register-button'>Kaydol</button>
            </div>
        </div>
    )
}

export default Auth