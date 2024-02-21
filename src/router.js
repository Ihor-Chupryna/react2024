import { createBrowserRouter, Navigate } from "react-router-dom";

import { AuthLayout, MainLayout } from "./layouts";
import { PublicLayout } from "./layouts/PublicLayout";
import { CarsPage, LoginPage, RegisterPage } from "./pages";
import { AuthProvider } from "./hoc";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'login'}/>
            },
            {
                element: <PublicLayout/>, children: [
                    {
                        path: 'login', element: <LoginPage/>
                    },
                    {
                        path: 'register', element: <RegisterPage/>
                    }
                ]
            },
            {
                element: <AuthProvider><AuthLayout/></AuthProvider>, children: [
                    {
                        path: 'cars', element: <CarsPage/>
                    }
                ]
            }
        ]
    }
]);

export { router }