import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import '../config/firebase'

const AuthContext = createContext()
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [loading,setloading] = useState(true)
    const [curentUser,setcurentUser] = useState()

    useEffect(() => {
        const auth = getAuth()
        const unsubs = onAuthStateChanged(auth, (user) =>{
            setcurentUser(user)
            setloading(false)
        })
        return unsubs;
    },[])

    async function singup(email,password,name) {
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth,email,password)

        await updateProfile(auth.currentUser, {
            displayName:name,
            photoURL: `https://randomuser.me/api/portraits/med/men/${Math.round(Math.random() * 30)}.jpg`
        })
        const user = auth.currentUser
        setcurentUser({...user})
    }


    function login(email,password) {
        const auth = getAuth()
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout() {
        const auth = getAuth()
        return signOut(auth)
    }
    


    const value = {
        curentUser,
        singup,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}