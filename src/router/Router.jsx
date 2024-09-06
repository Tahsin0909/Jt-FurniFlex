import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <p>Error ...</p>,
        children: [
            {
                path: '/',
                element: <p>Home</p>
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