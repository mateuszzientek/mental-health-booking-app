import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import axiosClient from "../../views/axios-client";
import { setUser } from "../../state/user/userSlice";
import { RootState } from "../../state/store";
import LoadingAnimationPage from "../sections/LoadingAnimationPage";
import Navbar from "../sections/Navbar";


export default function AuthLayout() {


    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user)
    const token = useSelector((state: RootState) => state.user.token)

    const [isDataFatched, setIsDataFatched] = useState(false)

    if (!token) {
        return <Navigate to="/login" />
    }

    useEffect(() => {

        if (!user) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    dispatch(setUser(data))
                })
                .finally(() => {
                    setIsDataFatched(true)
                })
        } else {
            setIsDataFatched(true)
        }

    }, [])




    return (
        <>
            {!isDataFatched
                ?
                <LoadingAnimationPage />
                :
                <div>
                    <Navbar />
                    <Outlet />
                </div>
            }




        </>

    );
}
