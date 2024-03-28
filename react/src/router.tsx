import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ReactNode } from "react";
import ButtonToUp from "./components/elements/ButtonToUp";
import LoadingAnimationPage from "./components/sections/LoadingAnimationPage";
import { ErrorBoundary } from "react-error-boundary";

const GuestLayout = lazy(() => import("./components/Layouts/GuestLayout"));
const AuthLayout = lazy(() => import("./components/Layouts/AuthLayout"));
const Contact = lazy(() => import("./views/Contact"));
const Home = lazy(() => import("./views/Home"));
const Footer = lazy(() => import("./components/sections/Footer"));
const PageNotFound = lazy(() => import("./views/PageNotFound"));
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));
const ResetPassword = lazy(() => import("./views/ResetPassword"));
const Specialists = lazy(() => import("./views/Specialists"));
const SpecialistSingle = lazy(() => import("./views/SpecialistSingle"));
const Profile = lazy(() => import("./views/Profile"));

const Layout = ({ children }: { children: ReactNode }) => (
    <Suspense fallback={<LoadingAnimationPage />}>
        <ButtonToUp />
        {children}
    </Suspense>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: "/specialist",
        element: (
            <Layout>
                <Specialists />
            </Layout>
        ),
    },
    {
        path: "/specialist/:id",
        element: (
            <Suspense fallback={<LoadingAnimationPage />}>
                <SpecialistSingle />
            </Suspense>
        ),
    },
    {
        path: "/contact",
        element: (
            <Layout>

                <Contact />

            </Layout>
        ),
    },
    {
        element: (
            <Suspense fallback={<LoadingAnimationPage />}>
                <GuestLayout />
            </Suspense>
        ),
        children: [
            {
                path: "/login",
                element: (
                    <Suspense fallback={<LoadingAnimationPage />}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: "/register",
                element: (
                    <Suspense fallback={<LoadingAnimationPage />}>
                        <Register />
                    </Suspense>
                ),
            },
            {
                path: "/reset-password/:token",
                element: (
                    <Suspense fallback={<LoadingAnimationPage />}>
                        <ResetPassword />
                    </Suspense>
                ),
            },
        ],
    },
    {
        element: (
            <Suspense fallback={<LoadingAnimationPage />}>
                <AuthLayout />
            </Suspense>
        ),
        children: [
            {
                path: "/profile",
                element: (
                    <Suspense fallback={<LoadingAnimationPage />}>
                        <Profile />
                    </Suspense>
                ),
            },
        ],
    },

    {
        path: "*",
        element: (
            <Suspense fallback={<LoadingAnimationPage />}>
                <PageNotFound />
            </Suspense>
        ),
    },
]);

export default router;
