import React from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (userCredential) => {
            if (userCredential) {
                setUser(userCredential.email);
                // setUser(userCredential.displayName);
            }
        })
    }, [])

    return (
        <div style={{ margin: '10px', fontSize: '25px' }}>Merhaba {user}</div>
    )
}

export default Home