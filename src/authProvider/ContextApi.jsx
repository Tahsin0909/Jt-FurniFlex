/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "@firebase/auth";
import auth from "../../SDK";







const AuthContext = createContext()


const ContextApi = ({ children }) => {
    // emailAndPassword Authentication
    const [AuthUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //create User with Email
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Update User
    const UpdateUser = (name) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    // Google Sign In
    const GoogleProvider = new GoogleAuthProvider();

    const GoogleSignUp = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    //Sign In User
    const SignInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out User
    const LogOut = () => {
        setLoading(true)
        setAuthUser(null)
        return signOut(auth)
    }



    //Manage User

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            const userEmail = user?.email || AuthUser?.email;
            const loggedUser = { email: userEmail };
            setAuthUser(user)
            setLoading(false);
            if (user) {

                console.log(loggedUser);

            }
            else {
                console.log(loggedUser);
            }
        });

        return () => Unsubscribe()
    }, [AuthUser, loading])

    const cart = []
    console.log(cart);
    const contextInfo = {
        AuthUser,
        loading,
        createUser,
        UpdateUser,
        SignInUser,
        GoogleSignUp,
        LogOut,
        cart
    }


    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, ContextApi };