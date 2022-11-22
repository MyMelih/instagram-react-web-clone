import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";

const firebaseConfig = {
    apiKey: "AIzaSyA7ErnT9nCRY2EZWydeK8hcrvbK4P82r_4",
    authDomain: "mymelih-instagram.firebaseapp.com",
    projectId: "mymelih-instagram",
    storageBucket: "mymelih-instagram.appspot.com",
    messagingSenderId: "503862819354",
    appId: "1:503862819354:web:67580433ecbda3505f2fa3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
onAuthStateChanged(auth, user => {
    userHandle(user || false)
})

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        toast.error(err.code)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        toast.error(err.code)
    }
}