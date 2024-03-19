import { MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import CircleSvg from "../components/elements/CircleSvg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "./axios-client";
import { setMessage } from "../state/notification/notificationSlice";


interface ServerErrors {
    [key: string]: string[];
}

export default function ResetPassword() {

    const { token } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.theme)

    const passwordConfirmationRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [dataFetched, setDataFetched] = useState(false)
    const [isPasswordSecondVisible, setIsPasswordSecondVisible] = useState(false)
    const [errors, setErrors] = useState<ServerErrors>({})

    const handleChangeVisible = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const handleChangeSecondVisible = () => {
        setIsPasswordSecondVisible(!isPasswordSecondVisible)
    }

    useEffect(() => {

        axiosClient.post("/check-expirationTime", { token: token })
            .then(({ data }) => {

                if (data.redirectMessage) {
                    navigate("/")
                }

            }).catch(err => {
                const response = err.response

                if (response && response.status === 500) {
                    alert("An error occurred while processing your request. Please try again later.")
                } else {
                    console.log(response.data)
                }
            }).finally(() => {
                setDataFetched(true)
            })
    }, [])


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const payload = {
            token: token,
            password: passwordRef.current?.value || '',
            password_confirmation: passwordConfirmationRef.current?.value || ''
        }

        setIsSubmitting(true)

        setErrors({})

        axiosClient.post("/reset-password", payload)
            .then(({ data }) => {

                navigate("/login")
                dispatch(setMessage("Password has been changed!"))

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
                } else if (response && response.status === 500) {
                    alert("An error occurred while processing your request. Please try again later.")
                } else {
                    console.log(response.data)
                }
            }).finally(() => {
                setIsSubmitting(false)
            })
    }

    return (
        <>
            {dataFetched &&
                <div className=" flex justify-center items-center bg-[#ebebeb] dark:bg-[#393939]  w-screen min-h-screen">

                    <form onSubmit={onSubmit}>
                        <div className="relative  w-[30rem]  bg-white  dark:bg-black/40  rounded-[4rem] shadow py-10 px-10 animate-fade-in">
                            <div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-4xl font-medium text-text_80 mb-6">Reset Password</h2>
                                </div>

                                <div className="flex items-center bg-[#e9e9e9] rounded-md w-full h-[3.2rem] mt-6 focus-within:border-black/30  focus-within:border-2 dark:focus-within:border-0 dark:focus-within:bg-[#c5c5c5]">
                                    <MdLockOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={27} className="ml-4" />
                                    <input onChange={() => setErrors({})} ref={passwordRef} type={isPasswordVisible ? "text" : "password"} placeholder="Password" className="w-full text-black/80 outline-none mx-4 text-lg bg-transparent dark:placeholder-[#737373]" />

                                    {isPasswordVisible ?
                                        <FiEyeOff onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                                        :
                                        <FiEye onClick={() => handleChangeVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                                    }
                                </div>
                                {errors.password && <p className="text-sm text-red-500 text-start mt-2">{errors.password[0]}</p>}


                                <div className="flex items-center bg-[#e9e9e9] rounded-md w-full h-[3rem] mt-4 focus-within:border-black/30 focus-within:border-2 dark:focus-within:border-0 dark:focus-within:bg-[#c5c5c5] ">
                                    <MdLockOutline color={theme === "dark" ? "#737373" : "#9e9e9e"} size={27} className="ml-4" />
                                    <input onChange={() => setErrors({})} ref={passwordConfirmationRef} type={isPasswordSecondVisible ? "text" : "password"} placeholder="Confirm Password" className="w-full text-black/80 outline-none mx-4 text-lg bg-transparent dark:placeholder-[#737373]" />

                                    {isPasswordSecondVisible ?
                                        <FiEyeOff onClick={() => handleChangeSecondVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                                        :
                                        <FiEye onClick={() => handleChangeSecondVisible()} size={30} color={theme === "dark" ? "#737373" : "#9e9e9e"} className="mr-4 cursor-pointer hover:scale-105" />
                                    }
                                </div>

                            </div>

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="h-[3rem] rounded-md bg-primary disabled:bg-[#373737] dark:disabled:bg-[#0c0c0c] px-4 mt-6 w-full hover:bg-primary_darker">

                                <div className="flex justify-center items-center">
                                    {isSubmitting && <CircleSvg color="white" secColor="white" />}
                                    <p className="text-white text-xl ">Reset Password</p>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}
