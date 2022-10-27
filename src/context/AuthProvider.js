import React, { createContext,useState,useEffect } from 'react';
import {getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,
    onAuthStateChanged,
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
    const providerGitLogin = ()=>{

    }
    //email pass
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])
    const authVal = { 
        user, 
        loading, 
        setLoading,
        providerGoogleLogin,
        providerGitLogin,
        createUser, 
        signIn 
    };
    return (
        <AuthContext.Provider value={authVal}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;