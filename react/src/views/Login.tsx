import avatar_login from "../assets/images/avatar_login.png"
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { useSelector } from 'react-redux';
import { RootState } from "../state/store";

export default function Login() {

    const theme = useSelector((state: RootState) => state.theme.theme)

    return (
        <div className=" flex justify-center items-center bg-[#ebebeb] dark:bg-[#393939]  w-screen h-screen">
            <div className="relative  w-[30rem] h-[35rem] bg-white  dark:bg-[#cccccc] rounded-[4rem] shadow py-10 px-10">
                <div className="flex flex-col items-center">
                    <img src={avatar_login} alt="Logo" className="absolute -top-20  w-[9rem] drop-shadow" />
                    <h2 className="text-4xl font-medium text-black/80  mt-14">Login</h2>

                    <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-14">
                        <MdOutlineEmail color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                        <input type="email" placeholder="Email" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />
                    </div>

                    <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-6">
                        <MdLockOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                        <input type="password" placeholder="Password" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />
                    </div>
                </div>

                <p className="text-lg font-medium text-primary mt-4 text-end">Forgot password?</p>

                <button className="h-[3rem] rounded-md bg-primary px-4 mt-6 w-full">
                    <p className="text-white text-xl ">Log in</p>
                </button>

                <div className="flex justify-center items-center space-x-1 mt-3">
                    <p className="text-lg font-medium text-black/50 mt-4 text-end">Don't have an account?</p>
                    <a href="/register" className="text-lg font-medium text-primary mt-4 text-end">Register</a>
                </div>
            </div>
        </div>
    );
}