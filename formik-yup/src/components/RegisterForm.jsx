import React from 'react'
import { useFormik } from "formik";
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

const RegisterForm = () => {

    const submit = (values, action) => {
        //2 saniye sonra formdaki değerleri resetle
        setTimeout(() => {
            action.resetForm();
        }, 2000)
    }

    const { errors, values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
            term: ""
        },
        validationSchema: registerFormSchemas,
        onSubmit: submit
    });
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='input-div'>
                    <label>Email</label>
                    <input type='text' id='email' placeholder='Email giriniz'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='input-error'>{errors.email}</p>}
                </div>
                <div className='input-div'>
                    <label>Yaş</label>
                    <input type='number' id='age' placeholder='Yaşınızı giriniz'
                        value={values.age}
                        onChange={handleChange}
                    />
                    {errors.age && <p className='input-error'>{errors.age}</p>}
                </div>
                <div className='input-div'>
                    <label>Şifre</label>
                    <input type='password' id='password' placeholder='Şifrenizi giriniz'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className='input-error'>{errors.password}</p>}

                </div>
                <div className='input-div'>
                    <label>Şifre tekrarı</label>
                    <input type='password' id='confirmPassword' placeholder='Şifrenizi tekrar giriniz'
                        value={values.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p className='input-error'>{errors.confirmPassword}</p>}

                </div>
                <div className='input-div'>
                    <div className='term-checkbox'>
                        <input style={{ width: '20px', height: '12px' }} type='checkbox' id='term'
                            value={values.term}
                            onChange={handleChange}
                        />
                        <label>Kullanıcı sözleşmesini kabul ediyorum</label>
                    </div>
                    {errors.term && <p className='input-error'>{errors.term}</p>}
                </div>
                <button type='submit' className='save-button'>Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm 