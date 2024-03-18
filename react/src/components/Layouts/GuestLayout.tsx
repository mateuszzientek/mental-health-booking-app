import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../state/store";

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
