/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "@firebase/auth";
import auth from "../../SDK";

const AuthContext = createContext();  // Create a context to share authentication information across components

const ContextApi = ({ children }) => {
    // State to manage the authenticated user and the loading state
    const [AuthUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create a new user with email and password
    const createUser = (email, password) => {
        setLoading(true);  // Set loading to true while creating the user
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Update the user's profile (e.g., adding display name)
    const UpdateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    };

    // Initialize Google Sign-In provider
    const GoogleProvider = new GoogleAuthProvider();

    // Sign up or sign in a user using Google authentication
    const GoogleSignUp = () => {
        return signInWithPopup(auth, GoogleProvider);
    };

    // Sign in a user with email and password
    const SignInUser = (email, password) => {
        setLoading(true);  // Set loading to true while signing in
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out the currently signed-in user
    const LogOut = () => {
        setLoading(true);  // Set loading to true while logging out
        setAuthUser(null);  // Clear the user state
        return signOut(auth);
    };

    // Manage the user's authentication state (listen for changes)
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            const userEmail = user?.email || AuthUser?.email;  // Get user's email if logged in
            const loggedUser = { email: userEmail };
            setAuthUser(user);  // Set the user in the state
            setLoading(false);  // Stop loading once authentication state is determined
            
            if (user) {
                console.log(loggedUser);  // Log user data if logged in
            } else {
                console.log(loggedUser);  // Log empty or null user data if logged out
            }
        });

        return () => Unsubscribe();  // Unsubscribe from the auth listener when component unmounts
    }, [AuthUser, loading]);

    // The context value that will be provided to all components that consume this context
    const contextInfo = {
        AuthUser,        // Current authenticated user
        loading,         // Loading state
        createUser,      // Method to create a new user
        UpdateUser,      // Method to update user profile
        SignInUser,      // Method to sign in a user
        GoogleSignUp,    // Method to sign in using Google
        LogOut           // Method to log out
    };

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}  {/* Render children components that consume the context */}
        </AuthContext.Provider>
    );
};

export { AuthContext, ContextApi };
