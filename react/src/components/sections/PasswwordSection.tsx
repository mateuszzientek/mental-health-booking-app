import { useState, useRef } from "react";
import { ServerErrors } from "../../resources/types";
import CircleSvg from "../elements/CircleSvg";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import axiosClient from "../../views/axios-client";
import { setMessage } from "../../state/notification/notificationSlice";
import { useDispatch } from "react-redux";
import { setErrorNotification } from "../../state/notification/errorNotificationSlice";

export default function PasswordSection() {

    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<ServerErrors>({});

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const oldPasswordRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmationRef = useRef<HTMLInputElement>(null);

    const handleChange = (name: string) => {
        const updatedErrors = { ...errors };

        delete updatedErrors[name];
        setErrors(updatedErrors);
    };

    const handleChangeVisible = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            oldPassword: oldPasswordRef.current?.value || "",
            password: passwordRef.current?.value || "",
            password_confirmation: passwordConfirmationRef.current?.value || "",
        };

        setIsSubmitting(true);
        setErrors({});

        axiosClient
            .put("/changePassword", payload)
            .then(({ data }) => {
                console.log(data);


                if (oldPasswordRef.current && passwordRef.current && passwordConfirmationRef.current) {
                    oldPasswordRef.current.value = ""
                    passwordRef.current.value = ""
                    passwordConfirmationRef.current.value = ""

                }

                dispatch(setMessage("Password has been changed!"))
            })
            .catch((err) => {
                const response = err.response;

                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    }

                    if (response.data.message) {
                        setErrors({
                            oldPassword: [response.data.message],
                        });
                    }

                } else {
                    dispatch(setErrorNotification("The error has appeared"));
                }
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };


    return (
        <div>
            <h2 className="text-2xl font-bold pb-2 text-text_80">
                Change Your Password
            </h2>
            <form onSubmit={onSubmit}>
                <div className="space-y-10 mt-10">
                    <div className="space-y-3">
                        <p className="text-md  text-text_60 font-medium">
                            OLD PASSWORD
                        </p>
                        <div className="flex space-x-4 items-center  h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 dark:border-white/30">
                            <input
                                onChange={() => handleChange("oldPassword")}
                                ref={oldPasswordRef}
                                type={isPasswordVisible ? "text" : "password"}
                                className="text-text_80 w-[90%] bg-transparent outline-none" />

                            {isPasswordVisible ? (
                                <FiEyeOff
                                    onClick={() => handleChangeVisible()}
                                    size={27}
                                    color={
                                        theme === "dark" ? "#737373" : "#9e9e9e"
                                    }
                                    className="mr-4 cursor-pointer hover:scale-105"
                                />
                            ) : (
                                <FiEye
                                    onClick={() => handleChangeVisible()}
                                    size={27}
                                    color={
                                        theme === "dark" ? "#737373" : "#9e9e9e"
                                    }
                                    className="mr-4 cursor-pointer hover:scale-105"
                                />
                            )}
                        </div>
                        {errors.oldPassword && (
                            <p className="text-sm text-red-500 text-start mt-2">
                                {errors.oldPassword[0]}
                            </p>
                        )}

                    </div>
                    <div className="space-y-3">
                        <p className="text-md  text-text_60 font-medium">
                            NEW PASSWORD
                        </p>
                        <div className="flex space-x-4 items-center  h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 dark:border-white/30">
                            <input
                                onChange={() => handleChange("password")}
                                ref={passwordRef}
                                type={isPasswordVisible ? "text" : "password"}
                                className="text-text_80 w-[90%] bg-transparent outline-none" />
                            {isPasswordVisible ? (
                                <FiEyeOff
                                    onClick={() => handleChangeVisible()}
                                    size={27}
                                    color={
                                        theme === "dark" ? "#737373" : "#9e9e9e"
                                    }
                                    className="mr-4 cursor-pointer hover:scale-105"
                                />
                            ) : (
                                <FiEye
                                    onClick={() => handleChangeVisible()}
                                    size={27}
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
                    <div className="space-y-3">
                        <p className="text-md  text-text_60 font-medium">
                            NEW PASSWORD CONFIRMATION
                        </p>
                        <div className="flex space-x-4 items-center   h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 dark:border-white/30">

                            <input
                                onChange={() => handleChange("password_confirmation")}
                                ref={passwordConfirmationRef}
                                type={isPasswordVisible ? "text" : "password"}
                                className="text-text_80 w-[90%] bg-transparent outline-none" />

                            {isPasswordVisible ? (
                                <FiEyeOff
                                    onClick={() => handleChangeVisible()}
                                    size={27}
                                    color={
                                        theme === "dark" ? "#737373" : "#9e9e9e"
                                    }
                                    className="mr-4 cursor-pointer hover:scale-105"
                                />
                            ) : (
                                <FiEye
                                    onClick={() => handleChangeVisible()}
                                    size={27}
                                    color={
                                        theme === "dark" ? "#737373" : "#9e9e9e"
                                    }
                                    className="mr-4 cursor-pointer hover:scale-105"
                                />
                            )}
                        </div>
                        {errors.password_confirmation && (
                            <p className="text-sm text-red-500 text-start mt-2">
                                {errors.password_confirmation[0]}
                            </p>
                        )}
                    </div>

                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="px-4 h-[3rem] disabled:bg-[#373737] dark:disabled:bg-[#0c0c0c] rounded-md bg-primary hover:bg-primary_darker mt-10"
                    >
                        <div className="flex justify-center items-center">
                            {isSubmitting && (
                                <CircleSvg color="white" secColor="white" />
                            )}
                            <p className="text-white">Change Password</p>
                        </div>

                    </button>
                </div>
            </form>
        </div>
    );
}
