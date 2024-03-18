import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../state/store";
import { useEffect } from "react";

export default function GuestLayout() {

    const token = useSelector((state: RootState) => state.user.token)

    if (token) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}
