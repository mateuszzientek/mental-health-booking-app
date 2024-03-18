import avatar_login from "../assets/images/avatar_login.png"
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { RootState } from "../state/store";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "./axios-client";
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setToken } from "../state/user/userSlice";
import CircleSvg from "../components/elements/CircleSvg";


interface ServerErrors {
    [key: string]: string[];
}

export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const theme = useSelector((state: RootState) => state.theme.theme)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<ServerErrors>({})

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleChangeVisible = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const payload = {
            email: emailRef.current?.value || '',
            password: passwordRef.current?.value || '',
        }

        setIsSubmitting(true)

        setErrors({})
        axiosClient.post("/login", payload)
            .then(({ data }) => {
                console.log(data)
                dispatch(setUser(data.user))
                dispatch(setToken(data.token))
            }).catch(err => {
                const response = err.response

                console.log(err.response)
                if (response && response.status === 422) {

                    if (response.data.errors) {
                        setErrors(response.data.errors)
                    } else {
                        setErrors({
                            password: [response.data.message]
                        })
                    }


                } else {
                    console.log(err)
                }
            }).finally(() => {
                setIsSubmitting(false)
            })

    }

    return (
        <div className=" flex justify-center items-center bg-[#ebebeb] dark:bg-[#393939]  w-screen h-screen">
            <form onSubmit={onSubmit}>
                <div className="relative  w-[30rem]  bg-white  dark:bg-[#cccccc] rounded-[4rem] shadow py-10 px-10 animate-fade-in">
                    <div>
                        <div className="flex flex-col items-center">

                            <img src={avatar_login} alt="Logo" className="absolute -top-20  w-[9rem] drop-shadow" />
                            <h2 className="text-4xl font-medium text-black/80  mt-14">Login</h2>
                        </div>

                        <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-14 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                            <MdOutlineEmail color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                            <input ref={emailRef} type="email" placeholder="Email" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />
                        </div>

                        {errors.email && <p className="text-sm text-red-500 text-start mt-2">{errors.email[0]}</p>}

                        <div className="flex items-center border-[#cfcfcf] dark:border-[#929292] border-2 rounded-md w-full h-[3.5rem] mt-6 focus-within:border-black/50 dark:focus-within:border-black/70 ">
                            <MdLockOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={30} className="ml-4" />
                            <input ref={passwordRef} type={isPasswordVisible ? "text" : "password"} placeholder="Password" className="w-full text-black/80 outline-none mx-4 text-xl bg-transparent dark:placeholder-[#737373]" />

                            {isPasswordVisible ?
                                <FiEyeOff onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                                :
                                <FiEye onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                            }
                        </div>

                        {errors.password && <p className="text-sm text-red-500 text-start mt-2">{errors.password[0]}</p>}
                    </div>

                    <p className="text-lg font-medium text-primary mt-4 text-end">Forgot password?</p>

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="h-[3rem] rounded-md bg-primary disabled:bg-[#373737] px-4 mt-6 w-full hover:bg-primary_darker">

                        <div className="flex justify-center items-center">
                            {isSubmitting && <CircleSvg color="white" secColor="white" />}
                            <p className="text-white text-xl ">Log in</p>
                        </div>
                    </button>

                    <div className="flex justify-center items-center space-x-1 mt-3">
                        <p className="text-lg font-medium text-black/50 mt-4 text-end">Don't have an account?</p>
                        <p onClick={() => navigate("/register")} className="text-lg font-medium text-primary mt-4 text-end cursor-pointer ">Register</p>
                    </div>
                </div>
            </form>
        </div>
    );
}
