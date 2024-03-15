import avatar_login from "../assets/images/avatar_login.png"
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { useSelector } from 'react-redux';
import { RootState } from "../state/store";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";


export default function Register() {
    const navigate = useNavigate();

    const theme = useSelector((state: RootState) => state.theme.theme)

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPasswordSecondVisible, setIsPasswordSecondVisible] = useState(false)

    const handleChangeVisible = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const handleChangeSecondVisible = () => {
        setIsPasswordSecondVisible(!isPasswordSecondVisible)
    }

    return (
        <div className=" flex justify-center items-center bg-[#ebebeb] dark:bg-[#393939]  w-screen h-screen">
            <div className="relative  w-[30rem]  bg-white  dark:bg-[#cccccc] rounded-[4rem] shadow py-10 px-10">
                <div className="flex flex-col items-center">
                    <img src={avatar_login} alt="Logo" className="absolute -top-20  w-[9rem] drop-shadow" />
                    <h2 className="text-4xl font-medium text-black/80  mt-14">Create Account</h2>

                    <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-14 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                        <IoPersonOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                        <input type="text" placeholder="Name" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373] " />
                    </div>

                    <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-4 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                        <IoPersonOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                        <input type="text" placeholder="Surname" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />
                    </div>

                    <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-4 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                        <MdOutlineEmail color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                        <input type="email" placeholder="Email" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />
                    </div>

                    <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-4 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                        <MdLockOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                        <input type={isPasswordVisible ? "text" : "password"} placeholder="Password" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />

                        {isPasswordVisible ?
                            <FiEyeOff onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                            :
                            <FiEye onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                        }
                    </div>
                    <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-4 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                        <MdLockOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                        <input type={isPasswordVisible ? "text" : "password"} placeholder="Confirm Password" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />

                        {isPasswordSecondVisible ?
                            <FiEyeOff onClick={() => handleChangeSecondVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                            :
                            <FiEye onClick={() => handleChangeSecondVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                        }
                    </div>
                </div>


                <button className="h-[3rem] rounded-md bg-primary px-4 mt-6 w-full hover:bg-primary_darker">
                    <p className="text-white text-xl ">Register</p>
                </button>

                <div className="flex justify-center items-center space-x-1 mt-3">
                    <p className="text-lg font-medium text-black/50 mt-4 text-end">Already have an account?</p>
                    <p onClick={() => navigate("/login")} className="text-lg font-medium text-primary mt-4 text-end cursor-pointer">Log in</p>
                </div>
            </div>
        </div>
    );
}