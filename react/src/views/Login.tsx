import avatar_login from "../assets/images/avatar_login.png";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { RootState } from "../state/store";
import { FiEye, FiEyeOff } from "react-icons/fi";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "./axios-client";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setToken } from "../state/user/userSlice";
import CircleSvg from "../components/elements/CircleSvg";
import { IoMdClose } from "react-icons/io";
import { setMessage } from "../state/notification/notificationSlice";
import { ServerErrors } from "../resources/types";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useSelector((state: RootState) => state.theme.theme);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmittingResetPassword, setIsSubmittingResetPassword] =
        useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [errors, setErrors] = useState<ServerErrors>({});
    const [errorsReset, setErrorsReset] = useState<ServerErrors>({});

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailResetRef = useRef<HTMLInputElement>(null);

    const handleChangeVisible = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleChange = (name: string) => {
        const updatedErrors = { ...errors };

        delete updatedErrors[name];
        setErrors(updatedErrors);
    };

    const handleSendLInk = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            emailReset: emailResetRef.current?.value || "",
        };

        setIsSubmittingResetPassword(true);

        setErrorsReset({});

        axiosClient
            .post("/forgot-password", payload)
            .then(({ data }) => {
                dispatch(setMessage("Reset link sent!"));
                setShowForgotPassword(false);
            })
            .catch((err) => {
                const response = err.response;
                console.log(response.data);

                if (response && response.status === 422) {
                    setErrorsReset({
                        email: [response.data.message],
                    });
                } else if (response && response.status === 500) {
                    alert(
                        "An error occurred while processing your request. Please try again later."
                    );
                } else {
                    console.log(response.data);
                }
            })
            .finally(() => {
                setIsSubmittingResetPassword(false);
            });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            email: emailRef.current?.value || "",
            password: passwordRef.current?.value || "",
        };

        setIsSubmitting(true);

        setErrors({});

        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                console.log(data);
                dispatch(setUser(data.user));
                dispatch(setToken(data.token));
                navigate(-1);
            })
            .catch((err) => {
                const response = err.response;

                console.log(err.response);
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({
                            password: [response.data.message],
                        });
                    }
                } else {
                    console.log(err);
                }
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className=" flex justify-center items-center bg-[#ebebeb] dark:bg-[#181818]  w-screen min-h-screen">
            {showForgotPassword && (
                <div className="bg-black/40 backdrop-blur-sm fixed w-full min-h-screen z-10 flex justify-center items-center">
                    <div className="relative  rounded-md py-10 bg-background ">
                        <IoMdClose
                            onClick={() =>
                                setShowForgotPassword(!showForgotPassword)
                            }
                            className="absolute top-5 right-5 cursor-pointer"
                            size={35}
                            color={theme === "dark" ? "white" : "black"}
                        />

                        <form onSubmit={handleSendLInk}>
                            <div className="w-[80%] mx-auto">
                                <p className="text-text_80 text-3xl text-center">
                                    Reset Your Password
                                </p>
                                <p className="text-text_60 text-xl   text-center mt-6">
                                    Enter the email address to which we will
                                    send the password reset link.
                                </p>

                                <input
                                    onChange={() => setErrorsReset({})}
                                    ref={emailResetRef}
                                    type="email"
                                    placeholder="Email*"
                                    className="mt-6 w-full text-black/80 bg- outline-none h-[3rem] text-lg px-4 bg-[#e9e9e9]  focus-within:bg-[#d4d4d4]  rounded-md "
                                />
                                {errorsReset.email && (
                                    <p className="text-sm text-red-500 text-start mt-2">
                                        {errorsReset.email[0]}
                                    </p>
                                )}
                                <button
                                    disabled={isSubmittingResetPassword}
                                    type="submit"
                                    className="h-[3rem] rounded-md bg-primary disabled:bg-[#373737]  dark:disabled:bg-[#0c0c0c] px-4 mt-6 w-full hover:bg-primary_darker"
                                >
                                    <div className="flex justify-center items-center">
                                        {isSubmittingResetPassword && (
                                            <CircleSvg
                                                color="white"
                                                secColor="white"
                                            />
                                        )}
                                        <p className="text-white text-xl ">
                                            Send Link
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <form onSubmit={onSubmit}>
                <div className="relative  w-[30rem]  bg-white  dark:bg-black/40  rounded-[4rem] shadow py-10 px-10 animate-fade-in">
                    <div>
                        <div className="flex flex-col items-center">
                            <img
                                src={avatar_login}
                                alt="Logo"
                                className="absolute -top-20  w-[9rem] drop-shadow"
                            />
                            <h2 className="text-4xl font-medium text-text_80 mt-14">
                                Login
                            </h2>
                        </div>

                        <div className="flex items-center bg-[#e9e9e9]  rounded-md w-full h-[3.2rem] mt-14 focus-within:border-black/30  focus-within:border-2 dark:focus-within:border-0 dark:focus-within:bg-[#c5c5c5] ">
                            <MdOutlineEmail
                                color={theme === "dark" ? "#737373" : "#9e9e9e"}
                                size={27}
                                className="ml-4"
                            />
                            <input
                                onChange={() => handleChange("email")}
                                ref={emailRef}
                                type="email"
                                placeholder="Email"
                                className="w-full text-black/80 outline-none mx-4 text-lg bg-transparent dark:placeholder-[#737373]"
                            />
                        </div>

                        {errors.email && (
                            <p className="text-sm text-red-500 text-start mt-2">
                                {errors.email[0]}
                            </p>
                        )}

                        <div className="flex items-center bg-[#e9e9e9] rounded-md w-full h-[3.2rem] mt-6 focus-within:border-black/30  focus-within:border-2 dark:focus-within:border-0 dark:focus-within:bg-[#c5c5c5]">
                            <MdLockOutline
                                color={theme === "dark" ? "#737373" : "#9e9e9e"}
                                size={27}
                                className="ml-4"
                            />
                            <input
                                onChange={() => handleChange("password")}
                                ref={passwordRef}
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Password"
                                className="w-full text-black/80 outline-none mx-4 text-lg bg-transparent dark:placeholder-[#737373]"
                            />

                            {isPasswordVisible ? (
                                <FiEyeOff
                                    onClick={() => handleChangeVisible()}
                                    size={30}
                                    color={
                                        theme === "dark" ? "#737373" : "#9e9e9e"
                                    }
                                    className="mr-4 cursor-pointer hover:scale-105"
                                />
                            ) : (
                                <FiEye
                                    onClick={() => handleChangeVisible()}
                                    size={30}
                                    color={
                                        theme === "dark" ? "#737373" : "#9e9e9e"
                                    }
                                    className="mr-4 cursor-pointer hover:scale-105"
                                />
                            )}
                        </div>

                        {errors.password && (
                            <p className="text-sm text-red-500 text-start mt-2">
                                {errors.password[0]}
                            </p>
                        )}
                    </div>

                    <p
                        onClick={() =>
                            setShowForgotPassword(!showForgotPassword)
                        }
                        className="text-lg font-medium text-primary mt-4 text-end cursor-pointer"
                    >
                        Forgot password?
                    </p>

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="h-[3rem] rounded-md bg-primary disabled:bg-[#373737] dark:disabled:bg-[#0c0c0c] px-4 mt-6 w-full hover:bg-primary_darker"
                    >
                        <div className="flex justify-center items-center">
                            {isSubmitting && (
                                <CircleSvg color="white" secColor="white" />
                            )}
                            <p className="text-white text-xl ">Log in</p>
                        </div>
                    </button>

                    <div className="flex justify-center items-center space-x-1 mt-3">
                        <p className="text-lg font-medium text-text_60 mt-4 text-end">
                            Don't have an account?
                        </p>
                        <p
                            onClick={() => navigate("/register")}
                            className="text-lg font-medium text-primary mt-4 text-end cursor-pointer "
                        >
                            Register
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}
