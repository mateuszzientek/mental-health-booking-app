import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { ReactNode } from 'react';
import ButtonToUp from "./components/elements/ButtonToUp";
import LoadingAnimationPage from "./components/sections/LoadingAnimationPage";

const Home = lazy(() => import("./views/Home"))
const Footer = lazy(() => import("./components/sections/Footer"))
const PageNotFound = lazy(() => import("./views/PageNotFound"))
const Login = lazy(() => import("./views/Login"))



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
        path: "/login",
        element:
            <Suspense fallback={<LoadingAnimationPage />}>
                <Login />
            </Suspense>
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