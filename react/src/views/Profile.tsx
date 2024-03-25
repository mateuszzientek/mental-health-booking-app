import Navbar from "../components/sections/Navbar";
import { GoPerson } from "react-icons/go";
import { IoLockClosedOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import Footer from "../components/sections/Footer";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
import PersonalDataSection from "../components/sections/PersonalDataSection";

export default function Profile() {
    const [selectedOption, setSelectedOption] = useState("account");

    const theme = useSelector((state: RootState) => state.theme.theme);
    const user = useSelector((state: RootState) => state.user.user);

    const selectOption = (type: string) => {
        setSelectedOption(type);
    };

    return (
        <>
            <div className="w-screen min-h-screen bg-[hsl(0,0%,95%)] dark:bg-[#181818]">
                <Navbar transparent={false} />
                <div className="pt-14 pb-20 w-[89rem] mx-auto">
                    <h2 className="text-4xl font-bold  mt-2  text-text_80">
                        Hello, {user?.name}
                    </h2>
                    <p className="text-xl text-text_60 mt-3">
                        Explore appointments and update profile settings
                    </p>

                    <div
                        className={`flex bg-white dark:bg-[#2d2d2d] ${theme === "light" && "shadow "
                            }w-full  px-10  rounded-md mt-14`}
                    >
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
                                            : theme === "dark"
                                                ? "#d1d1d1"
                                                : "#4a4a4a"
                                    }
                                />
                                <p
                                    className={`text-xl text-text_80  ${selectedOption === "account"
                                        ? "font-bold"
                                        : ""
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
                                            : theme === "dark"
                                                ? "#d1d1d1"
                                                : "#4a4a4a"
                                    }
                                />
                                <p
                                    className={`text-xl text-text_80  ${selectedOption === "questions"
                                        ? "font-bold"
                                        : ""
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
                                            : theme === "dark"
                                                ? "#d1d1d1"
                                                : "#4a4a4a"
                                    }
                                />
                                <p
                                    className={`text-xl text-text_80  ${selectedOption === "password"
                                        ? "font-bold"
                                        : ""
                                        } `}
                                >
                                    {" "}
                                    Password
                                </p>
                            </div>
                        </div>

                        <div className=" py-10 px-16">

                            {selectedOption === "account" &&
                                <PersonalDataSection />
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer width="w-[89rem] " />
        </>
    );
}
