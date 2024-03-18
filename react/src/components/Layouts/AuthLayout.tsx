import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import axiosClient from "../../views/axios-client";
import { setUser } from "../../state/user/userSlice";
import { RootState } from "../../state/store";
import LoadingAnimationPage from "../sections/LoadingAnimationPage";
import Navbar from "../sections/Navbar";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthLayout() {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);
    const token = useSelector((state: RootState) => state.user.token);
    const [isDataFetched, setIsDataFetched] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    useEffect(() => {

        if (!user && token) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    dispatch(setUser(data));
                })
                .finally(() => {
                    setIsDataFetched(true);
                });
        } else {
            setIsDataFetched(true);
        }
    }, [user, token, dispatch]);


    if (!isDataFetched) {
        return <LoadingAnimationPage />;
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
