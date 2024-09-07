import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Products from "../pages/products/products";
import Order from "../pages/order/Order";

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
            {
                path: '/cart',
                element: <Order/>
            }

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