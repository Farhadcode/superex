import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hook/useFirebase';

export const AuthContext = createContext();


const AuthProvider = (props) => {
    const { children } = props;
    const firebaseContext = useFirebase();
    return (
        <AuthContext.Provider value={firebaseContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;