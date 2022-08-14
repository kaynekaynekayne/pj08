import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [user,setUser]=useState({});

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signup=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logout=()=>{
        return signOut(auth);
    }

    const loginWithGoogle=()=>{
        const googleProvider=new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        const stopStateChanged=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
    
        return ()=>{
            stopStateChanged();
        }
    },[]);

    return(
        <AuthContext.Provider value={{user, login, logout, signup, loginWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )    
}

export const useAuth=()=>{
    return useContext(AuthContext);
}