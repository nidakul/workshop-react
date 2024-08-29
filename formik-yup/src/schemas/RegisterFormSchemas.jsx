import React from 'react'
import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email("Geçerli email adresi giriniz.").required("Email adresi zorunlu"),
    age: yup.number().positive("Pozitif bir değer giriniz").integer("Tam sayı giriniz").required("Yaş alanı zorunlu"),
    password: yup.string().required("Şifre alanı zorunlu"),
    confirmPassword: yup.string().required("Şifre tekrarı zorunlu")
        .oneOf([yup.ref('password', yup.password)], 'Şifreler eşleşmiyor'),
    term: yup.boolean().required("Lütfen kutucuğu onaylayınız")
}) 