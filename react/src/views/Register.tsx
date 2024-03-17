import avatar_login from "../assets/images/avatar_login.png"
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../state/store";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import axiosClient from "./axios-client";
import { setToken, setUser } from "../state/user/userSlice";

interface ServerErrors {
    [key: string]: string[];
}

export default function Register() {
    const navigate = useNavigate();
    const theme = useSelector((state: RootState) => state.theme.theme)

    const dispatch = useDispatch()

    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);


    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPasswordSecondVisible, setIsPasswordSecondVisible] = useState(false)
    const [errors, setErrors] = useState<ServerErrors>({})

    const handleChangeVisible = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const handleChangeSecondVisible = () => {
        setIsPasswordSecondVisible(!isPasswordSecondVisible)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const payload = {
            name: nameRef.current?.value || '',
            surname: surnameRef.current?.value || '',
            email: emailRef.current?.value || '',
            password: passwordRef.current?.value || '',
            password_confirmation: passwordConfirmationRef.current?.value || ''
        }

        axiosClient.post("/signup", payload)
            .then(({ data }) => {
                console.log(data)
                dispatch(setUser(data.user))
                dispatch(setToken(data.token))
            }).catch(err => {
                const response = err.response

                if (response && response.status === 422) {
                    console.log(response.data.errors)
                    setErrors(response.data.errors)
                } else {
                    console.log(err)
                }
            })
    }

    return (
        <div className=" flex justify-center items-center bg-[#ebebeb] dark:bg-[#393939]  w-screen h-screen">
            <form onSubmit={onSubmit}>
                <div className="relative  w-[30rem]  bg-white  dark:bg-[#cccccc] rounded-[4rem] shadow py-10 px-10 animate-fade-in">
                    <div>
                        <div className="flex flex-col items-center">
                            <img src={avatar_login} alt="Logo" className="absolute -top-20  w-[9rem] drop-shadow" />
                            <h2 className="text-4xl font-medium text-black/80  mt-14 mb-6">Create Account</h2>
                        </div>
                        {/* {Object.keys(errors).length > 0 && <div className="w-full bg-red-500 px-6 py-4 rounded-md">
                            {Object.keys(errors).map(key => (
                                <p className="text-white/90 text-medium " key={key}>{errors[key][0]}</p>
                            ))}
                        </div>} */}

                        <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-4 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                            <IoPersonOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                            <input ref={nameRef} type="text" placeholder="Name" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373] " />
                        </div>
                        {errors.name && <p className="text-sm text-red-500 text-start mt-2">{errors.name[0]}</p>}

                        <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-4 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                            <IoPersonOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                            <input ref={surnameRef} type="text" placeholder="Surname" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />
                        </div>
                        {errors.surname && <p className="text-sm text-red-500 text-start mt-2">{errors.surname[0]}</p>}

                        <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-4 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                            <MdOutlineEmail color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                            <input ref={emailRef} type="email" placeholder="Email" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />
                        </div>

                        {errors.email && <p className="text-sm text-red-500 text-start mt-2">{errors.email[0]}</p>}
                        <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-4 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                            <MdLockOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                            <input ref={passwordRef} type={isPasswordVisible ? "text" : "password"} placeholder="Password" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />

                            {isPasswordVisible ?
                                <FiEyeOff onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                                :
                                <FiEye onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                            }
                        </div>
                        {errors.password && <p className="text-sm text-red-500 text-start mt-2">{errors.password[0]}</p>}
                        <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-4 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                            <MdLockOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                            <input ref={passwordConfirmationRef} type={isPasswordVisible ? "text" : "password"} placeholder="Confirm Password" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />

                            {isPasswordSecondVisible ?
                                <FiEyeOff onClick={() => handleChangeSecondVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                                :
                                <FiEye onClick={() => handleChangeSecondVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                            }
                        </div>
                    </div>


                    <button type="submit" className="h-[3rem] rounded-md bg-primary px-4 mt-6 w-full hover:bg-primary_darker">
                        <p className="text-white text-xl ">Register</p>
                    </button>

                    <div className="flex justify-center items-center space-x-1 mt-3">
                        <p className="text-lg font-medium text-black/50 mt-4 text-end">Already have an account?</p>
                        <p onClick={() => navigate("/login")} className="text-lg font-medium text-primary mt-4 text-end cursor-pointer">Log in</p>
                    </div>
                </div>
            </form>
        </div>
    );
}
