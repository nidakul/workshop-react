import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXaGSOBGxSfGCBpo9KnBPvbRUgaytNDXc",
    authDomain: "fir-education-dfb33.firebaseapp.com",
    projectId: "fir-education-dfb33",
    storageBucket: "fir-education-dfb33.appspot.com",
    messagingSenderId: "709230149779",
    appId: "1:709230149779:web:e0dca286ec81f824b10d66"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
