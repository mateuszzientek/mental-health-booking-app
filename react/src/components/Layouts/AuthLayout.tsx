import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../state/store";

export default function AuthLayout() {

    const user = useSelector((state: RootState) => state.user.user)
    const token = useSelector((state: RootState) => state.user.token)

    if (!token) {
        window.location.replace("/login")
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}