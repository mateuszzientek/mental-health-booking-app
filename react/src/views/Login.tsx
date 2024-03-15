import avatar_login from "../assets/images/avatar_login.png"
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { useSelector } from 'react-redux';
import { RootState } from "../state/store";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const theme = useSelector((state: RootState) => state.theme.theme)

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const handleChangeVisible = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <div className=" flex justify-center items-center bg-[#ebebeb] dark:bg-[#393939]  w-screen h-screen">
            <div className="relative  w-[30rem]  bg-white  dark:bg-[#cccccc] rounded-[4rem] shadow py-10 px-10">
                <div className="flex flex-col items-center">
                    <img src={avatar_login} alt="Logo" className="absolute -top-20  w-[9rem] drop-shadow" />
                    <h2 className="text-4xl font-medium text-black/80  mt-14">Login</h2>



                    <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-14 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                        <MdOutlineEmail color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                        <input type="email" placeholder="Email" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />
                    </div>

                    <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-6 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                        <MdLockOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                        <input type={isPasswordVisible ? "text" : "password"} placeholder="Password" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />

                        {isPasswordVisible ?
                            <FiEyeOff onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                            :
                            <FiEye onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                        }
                    </div>
                </div>

                <p className="text-lg font-medium text-primary mt-4 text-end">Forgot password?</p>

                <button className="h-[3rem] rounded-md bg-primary px-4 mt-6 w-full hover:bg-primary_darker">
                    <p className="text-white text-xl ">Log in</p>
                </button>

                <div className="flex justify-center items-center space-x-1 mt-3">
                    <p className="text-lg font-medium text-black/50 mt-4 text-end">Don't have an account?</p>
                    <p onClick={() => navigate("/register")} className="text-lg font-medium text-primary mt-4 text-end cursor-pointer ">Register</p>
                </div>
            </div>
        </div>
    );
}