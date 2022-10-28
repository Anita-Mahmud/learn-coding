import React, { createContext,useState,useEffect } from 'react';
import {getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,
    onAuthStateChanged,signOut, updateProfile
} from 'firebase/auth';
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //google login
    const providerGoogleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    //git login
    const providerGitLogin = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    //email pass
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user profile
    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
        setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authVal = { 
        user, 
        loading, 
        setLoading,
        providerGoogleLogin,
        providerGitLogin,
        createUser, 
        updateUserProfile,
        signIn ,
        logOut, 
    };
    return (
        <AuthContext.Provider value={authVal}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;