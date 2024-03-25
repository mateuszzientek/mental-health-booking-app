import React, { useState } from "react";
import axiosClient from "../../views/axios-client";
import CircleSvg from "../elements/CircleSvg";
import { setMessage } from "../../state/notification/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { ServerErrors } from "../../resources/types";
import { setUser } from "../../state/user/userSlice";
import { RootState } from "../../state/store";


interface PersonalDataSectionProps {
    name: string | undefined;
    surname: string | undefined;
    email: string | undefined;
    phoneNumber: string | undefined;
    gender: string | undefined;
    dateOfBirth: Date | undefined;
}


export default function PersonalDataSection(props: PersonalDataSectionProps) {

    const user = useSelector((state: RootState) => state.user.user);
    const [name, setName] = useState(props.name || "")
    const [surname, setSurname] = useState(props.surname || "")
    const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber || "")
    const [gender, setGender] = useState(props.gender || "")
    const [dateOfBirth, setDateOfBirth] = useState(props.dateOfBirth || null)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<ServerErrors>({});

    const dispatch = useDispatch();

    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 26, 27, 28, 29, 30, 31,
    ];

    const years = [];
    for (let i = 2024; i >= 1940; i--) {
        years.push(i);
    }

    const genders = ["man", "woman", "other"];

    const months = [
        { name: "January", number: 1 },
        { name: "February", number: 2 },
        { name: "March", number: 3 },
        { name: "April", number: 4 },
        { name: "May", number: 5 },
        { name: "June", number: 6 },
        { name: "July", number: 7 },
        { name: "August", number: 8 },
        { name: "September", number: 9 },
        { name: "October", number: 10 },
        { name: "November", number: 11 },
        { name: "December", number: 12 },
    ];

    const deleteError = (name: string) => {
        const updatedErrors = { ...errors };

        delete updatedErrors[name];
        setErrors(updatedErrors);
    };



    const changeName = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setName(event.target.value)
        deleteError(name)
    }


    const changePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setPhoneNumber(event.target.value)
        deleteError(name)
    }

    const changeSurname = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setSurname(event.target.value)
        deleteError(name)
    }

    const changeGender = (event: React.ChangeEvent<HTMLSelectElement>, name: string) => {
        setGender(event.target.value);
        deleteError(name)
    };


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            name: name || "",
            surname: surname || "",
            gender: gender || "",
            phoneNumber: phoneNumber || ""
        }

        setIsSubmitting(true);
        setErrors({})

        axiosClient.put("/changePersonalData", payload)
            .then((response) => {
                const userData = response.data;

                dispatch(setUser(userData))
                dispatch(setMessage("Data has been changed"));
            })
            .catch((err) => {
                const response = err.response;

                if (response && response.status === 422) {
                    console.log(response.data.errors)
                    setErrors(response.data.errors);
                } else {
                    console.log(response);
                }
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    return (
        <div>
            <h2 className="text-2xl font-bold pb-2 text-text_80">
                General Info
            </h2>
            <form onSubmit={onSubmit}>
                <div className="flex  mt-8 space-x-10">
                    <div className="space-y-3">
                        <p className="text-md  text-text_60 font-medium">
                            FIRST NAME
                        </p>
                        <input
                            onChange={(event) => changeName(event, "name")}
                            value={name}
                            className="text-text_80 bg-transparent h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 dark:border-white/30 outline-none" />
                        {errors.name && (
                            <p className="text-sm text-red-500 text-start mt-2">
                                {errors.name[0]}
                            </p>
                        )}

                    </div>
                    <div className="space-y-3">
                        <p className="text-md  text-text_60 font-medium">
                            LAST NAME
                        </p>
                        <input
                            onChange={(event) => changeSurname(event, "surname")}
                            value={surname}
                            className="text-text_80 bg-transparent h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 dark:border-white/30 outline-none" />
                        {errors.surname && (
                            <p className="text-sm text-red-500 text-start mt-2">
                                {errors.surname[0]}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex  mt-10 space-x-10">
                    <div className="space-y-3">
                        <p className="text-md  text-text_60 font-medium">
                            EMAIL
                        </p>
                        <div className="flex items-center h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 dark:border-white/30 outline-none" >
                            <p className="text-text_80 text-xl  ">{props.email}</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="text-md text-text_60 font-medium">
                            PHONE NUMBER
                        </p>
                        <input
                            onChange={(event) => changePhoneNumber(event, "phoneNumber")}
                            value={phoneNumber}
                            maxLength={9} className="text-text_80 bg-transparent h-[3.5rem] text-lg px-4 w-[24rem] rounded-lg border-2 border-black/20 dark:border-white/30 outline-none" />
                        {errors.phoneNumber && (
                            <p className="text-sm text-red-500 text-start mt-2">
                                {errors.phoneNumber[0]}
                            </p>
                        )}

                    </div>
                </div>



                <div className="flex mt-10">
                    <div>
                        <p className=" text-md text-text_60 font-medium mb-3">
                            DATE OF BIRTH
                        </p>
                        <div className="flex space-x-2">
                            <select
                                className=" text-text_80 bg-transparent cursor-pointer h-[3.5rem] text-lg px-4 w-[10rem] rounded-lg border-2 border-black/20 dark:border-white/30 outline-none">
                                <option value="">Month</option>
                                {months.map((month, index) => (
                                    <option
                                        key={index}
                                        value={month.name}
                                        className="text-black"
                                    >
                                        {month.name}
                                    </option>
                                ))}
                            </select>




                            <select className=" text-text_80 bg-transparent cursor-pointer h-[3.5rem] text-lg px-4 w-[7rem] rounded-lg border-2 border-black/20 dark:border-white/30 outline-none">
                                <option value="">Day</option>
                                {days.map((day, index) => (
                                    <option
                                        key={index}
                                        className="text-black"
                                    >
                                        {day}
                                    </option>
                                ))}
                            </select>

                            <select className="text-text_80 bg-transparent cursor-pointer h-[3.5rem] text-lg px-4 w-[7rem] rounded-lg border-2 border-black/20 dark:border-white/30 outline-none">
                                <option value="">Year</option>
                                {years.map((year, index) => (
                                    <option
                                        key={index}
                                        className="text-black"
                                    >
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className=" pl-10">
                        <p className="text-md  text-text_60 font-medium mb-3">
                            GENDER
                        </p>
                        <select
                            value={gender}
                            onChange={(event) => changeGender(event, "gender")}
                            className="text-text_80 bg-transparent cursor-pointer h-[3.5rem] text-lg px-4 w-[14rem] rounded-lg border-2 border-black/20 dark:border-white/30 outline-none">
                            <option value=""></option>
                            {genders.map((gender, index) => (
                                <option
                                    key={index}
                                    value={gender}
                                    className="text-black"
                                >
                                    {gender
                                        .charAt(0)
                                        .toUpperCase() +
                                        gender.slice(1)}
                                </option>
                            ))}
                        </select>
                        {errors.gender && (
                            <p className="text-sm text-red-500 text-start mt-2">
                                {errors.gender[0]}
                            </p>
                        )}
                    </div>
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
                        <p className="text-white">Save Changes</p>
                    </div>

                </button>
            </form>
        </div>
    );
}
