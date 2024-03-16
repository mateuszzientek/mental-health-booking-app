import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { ReactNode } from 'react';
import ButtonToUp from "./components/elements/ButtonToUp";
import LoadingAnimationPage from "./components/sections/LoadingAnimationPage";

import GuestLayout from "./components/Layouts/GuestLayout";
import AuthLayout from "./components/Layouts/AuthLayout";

const Contact = lazy(() => import("./views/Contact"))
const Home = lazy(() => import("./views/Home"))
const Footer = lazy(() => import("./components/sections/Footer"))
const PageNotFound = lazy(() => import("./views/PageNotFound"))
const Login = lazy(() => import("./views/Login"))
const Register = lazy(() => import("./views/Register"))


const Layout = ({ children }: { children: ReactNode }) => (
    <Suspense fallback={<LoadingAnimationPage />}>
        <ButtonToUp />
        {children}
        <Footer />
    </Suspense>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home /></Layout>
    },
    {
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element:
                    <Suspense fallback={<LoadingAnimationPage />}>
                        <Login />
                    </Suspense>
            },
            {
                path: "/register",
                element:
                    <Suspense fallback={<LoadingAnimationPage />}>
                        <Register />
                    </Suspense>
            },
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/contact",
                element:
                    <Suspense fallback={<LoadingAnimationPage />}>
                        <Contact />
                    </Suspense>
            },
        ]
    },

    {
        path: "*",
        element:
            <Suspense fallback={<LoadingAnimationPage />}>
                <PageNotFound />
            </Suspense>
    }
]);

export default router