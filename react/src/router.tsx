import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { ReactNode } from 'react';
import ButtonToUp from "./components/elements/ButtonToUp";
import LoadingAnimationPage from "./components/sections/LoadingAnimationPage";

const Home = lazy(() => import("./views/Home"))
const Footer = lazy(() => import("./components/sections/Footer"))
const Navbar = lazy(() => import("./components/sections/Navbar"))


const Layout = ({ children }: { children: ReactNode }) => (
    <Suspense fallback={<LoadingAnimationPage />}>
        <Navbar />
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
        path: "/contact",
        element: <Layout><Home /></Layout>
    },
]);

export default router