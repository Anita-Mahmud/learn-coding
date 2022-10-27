import React, { createContext,useState } from 'react';
import {getAuth,signInWithPopup} from 'firebase/auth';
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
    const authVal = { 
        user, 
        loading, 
        setLoading,
        providerGoogleLogin,
    };
    return (
        <AuthContext.Provider value={authVal}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;