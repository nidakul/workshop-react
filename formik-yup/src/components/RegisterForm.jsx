import React from 'react'
import { useFormik } from "formik";

const RegisterForm = () => {
    const { errors, values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
            term: ""
        },
    });
    return (
        <div>
            <form>
                <div className='input-div'>
                    <label>Email</label>
                    <input type='text' id='email' placeholder='Email giriniz'
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-div'>
                    <label>Yaş</label>
                    <input type='number' id='age' placeholder='Yaşınızı giriniz'
                        value={values.age}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-div'>
                    <label>Şifre</label>
                    <input type='password' id='password' placeholder='Şifrenizi giriniz'
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-div'>
                    <label>Şifre tekrarı</label>
                    <input type='password' id='confirmPassword' placeholder='Şifrenizi tekrar giriniz'
                        value={values.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-div'>
                    <div className='term-checkbox'>
                        <input style={{ width: '20px', height: '12px' }} type='checkbox' id='term'
                            value={values.term}
                            onChange={handleChange}
                        />
                        <label>Kullanıcı sözleşmesini kabul ediyorum</label>
                    </div>
                </div>

                <button className='save-button'>Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm 