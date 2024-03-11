import { createBrowserRouter } from "react-router-dom";
import { lazy } from 'react'

const Home = lazy(() => import("./views/Home"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contact",
        element: <Home />
    },
])

export default router