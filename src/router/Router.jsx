import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Order from "../pages/order/Order";
import CheckOut from "../pages/checkOut/CheckOut";
import ProductsH from "../pages/products/ProductsH";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <ProductsH/>
            },
            {
                path: '/products',
                element: <ProductsH/>
            },
            {
                path: '/cart',
                element: <Order/>
            },
            {
                path: '/checkout',
                element: <CheckOut/>
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