import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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
const db = getFirestore(app);

onAuthStateChanged(auth, async user => {
    if (user) {
        const dbUser = await getDoc(doc(db, 'users', user.uid));
        let data = {
            uid: user.id,
            fullName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            ...dbUser.data()
        }
        userHandle(data);
    } else {
        userHandle(false);
    }
})

export const login = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        toast.error(err.code)
    }
}

export const register = async ({ email, password, full_name, username }) => {
    try {
        const user = await getDoc(doc(db, 'usernames', username))
        if (user.exists()) {
            toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`)
        } else {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response.user) {
                await setDoc(doc(db, "usernames", username), {
                    user_id: response.user.uid
                })

                await setDoc(doc(db, "users", response.user.uid), {
                    fullName: full_name,
                    username: username,
                    followers: [],
                    following: [],
                    notifications: [],
                })

                await updateProfile(auth.currentUser, {
                    displayName: full_name,
                })

                return response.user;
            }
        }
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