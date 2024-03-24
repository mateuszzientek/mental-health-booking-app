import Navbar from "../components/sections/Navbar";
import { GoPerson } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import Footer from "../components/sections/Footer";

export default function Profile() {
    const [selectedOption, setSelectedOption] = useState("account");
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 26, 27, 28, 29, 30, 31,
    ];

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

    const selectOption = (type: string) => {
        setSelectedOption(type);
    };

    return (
        <>
            <div className="w-screen min-h-screen bg-[hsl(0,0%,95%)]">
                <Navbar transparent={false} />
                <div className="pt-14 pb-20 w-[89rem] mx-auto">
                    <h2 className="text-4xl font-bold pb-2 mt-2  text-text_80">
                        Account Settings
                    </h2>
                    <p className="text-xl text-text_60 mt-4">
                        Change your profile and account settings
                    </p>

                    <div className="flex bg-white shadow w-full h-[40rem] px-10  rounded-md mt-14">
                        <div className="w-[25%] border-r-2 border-black/10 space-y-12">
                            <div
                                onClick={() => selectOption("account")}
                                className="flex items-center space-x-4 mt-10 cursor-pointer"
                            >
                                <GoPerson
                                    size={30}
                                    color={
                                        selectedOption === "account"
                                            ? "#449c6f"
                                            : "#666666"
                                    }
                                />
                                <p
                                    className={`text-2xl   ${
                                        selectedOption === "account"
                                            ? "text-black/80 font-bold"
                                            : "text-black/70"
                                    } `}
                                >
                                    Account
                                </p>
                            </div>
                            <div
                                onClick={() => selectOption("questions")}
                                className="flex items-center space-x-4 cursor-pointer"
                            >
                                <AiOutlineQuestionCircle
                                    size={30}
                                    color={
                                        selectedOption === "questions"
                                            ? "#449c6f"
                                            : "#666666"
                                    }
                                />
                                <p
                                    className={`text-2xl   ${
                                        selectedOption === "questions"
                                            ? "text-black/80 font-bold"
                                            : "text-black/70"
                                    } `}
                                >
                                    Questions
                                </p>
                            </div>
                            <div
                                onClick={() => selectOption("password")}
                                className="flex items-center space-x-4 cursor-pointer"
                            >
                                <IoLockClosedOutline
                                    size={30}
                                    color={
                                        selectedOption === "password"
                                            ? "#449c6f"
                                            : "#666666"
                                    }
                                />
                                <p
                                    className={`text-2xl   ${
                                        selectedOption === "password"
                                            ? "text-black/80 font-bold"
                                            : "text-black/70"
                                    } `}
                                >
                                    {" "}
                                    Password
                                </p>
                            </div>
                        </div>

                        <div className="py-10 px-16">
                            <div
                                className={` ${
                                    selectedOption === "account"
                                        ? "block"
                                        : "hidden"
                                }`}
                            >
                                <h2 className="text-3xl font-medium pb-2 text-text_80">
                                    General Info
                                </h2>
                                <div className="flex items-center mt-8 space-x-10">
                                    <div className="space-y-3">
                                        <p className="text-lg text-text_60 font-medium">
                                            FIRST NAME
                                        </p>
                                        <input className="h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 outline-none" />
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-lg text-text_60 font-medium">
                                            LAST NAME
                                        </p>
                                        <input className="h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 outline-none" />
                                    </div>
                                </div>
                                <div className="flex items-center mt-10 space-x-10">
                                    <div className="space-y-3">
                                        <p className="text-lg text-text_60 font-medium">
                                            EMAIL
                                        </p>
                                        <input
                                            type="email"
                                            className="h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-lg text-text_60 font-medium">
                                            PHONE NUMBER
                                        </p>
                                        <input className="h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 outline-none" />
                                    </div>
                                </div>
                                <div className="flex items-end mt-10 space-x-4">
                                    <div className="space-y-3">
                                        <p className="text-lg text-text_60 font-medium">
                                            DATE OF BIRTH
                                        </p>
                                        <select className="h-[3.5rem] text-xl px-4 w-[10rem] rounded-lg border-2 border-black/20 outline-none">
                                            <option value="">Month</option>
                                            {months.map((month, index) => (
                                                <option
                                                    key={index}
                                                    value={month.name}
                                                >
                                                    {month.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <select className="h-[3.5rem] text-xl px-4 w-[7rem] rounded-lg border-2 border-black/20 outline-none">
                                            <option value="">Day</option>
                                            {days.map((day, index) => (
                                                <option key={index}>
                                                    {day}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-lg text-text_60 font-medium">
                                            GENDER
                                        </p>
                                        <input className="h-[3.5rem] text-xl px-4 w-[24rem] rounded-lg border-2 border-black/20 outline-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer width="w-[89rem] " />
        </>
    );
}
