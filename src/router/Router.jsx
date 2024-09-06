import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Products from "../pages/products/products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Products/>
            },
            {
                path: '/products',
                element: <Products/>
            },

        ]
    },
    {
        path: '/SignIn',
        element: <LogIn />
    },
    {
        path: '/SignUp',
        element: <SignUp />
    }
]);