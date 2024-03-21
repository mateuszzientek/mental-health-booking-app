import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { MdOutlineEmail } from "react-icons/md";
import React, { useState, ChangeEvent, useRef } from "react";
import CircleSvg from "../components/elements/CircleSvg";
import FaqItem from "../components/elements/FaqItem";
import faqs from "../resources/faqs";
import axiosClient from "./axios-client";
import { setMessage } from "../state/notification/notificationSlice";

interface ServerErrors {
    [key: string]: string[];
}

export default function Contact() {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const dispatch = useDispatch();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [text, setText] = useState("");
    const maxCharCount = 150;

    const name = useRef<HTMLInputElement>(null);
    const surname = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const [errors, setErrors] = useState<ServerErrors>({});

    const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = event.target.value;
        setText(inputText);

        if (inputText.length <= maxCharCount) {
            setText(inputText);
        }

        setErrors({});
    };

    const onChange = () => {
        setErrors({});
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            email: email.current?.value || "",
            name: name.current?.value || "",
            surname: surname.current?.value || "",
            content: text || "",
        };

        setIsSubmitting(true);
        setErrors({});

        axiosClient
            .post("/emailQuestion", payload)
            .then(({ data }) => {
                dispatch(setMessage("Email has been sent!"));

                if (email.current && name.current && surname.current) {
                    email.current.value = "";
                    name.current.value = "";
                    surname.current.value = "";
                }
                setText("");
            })
            .catch((err) => {
                const response = err.response;
                console.log(response.data);

                if (response.data.errors && response.status === 422) {
                    setErrors(response.data.errors);
                } else if (response && response.status === 500) {
                    alert(
                        "An error occurred while processing your request. Please try again later."
                    );
                } else {
                    console.log(response.data);
                }
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <>
            <div className="w-screen min-h-screen ">
                <div className="background-contact bg-secondary dark:bg-[#181818] dark:border-b-2 border-black/20 ">
                    <Navbar transparent={false} />

                    <div className="flex justify-between  w-[89rem] mx-auto pt-28 pb-36 ">
                        <div>
                            <h2 className="text-6xl font-medium  text-text_80 ">
                                Contact Us
                            </h2>
                            <p className="w-[25rem] mt-6  text-text_80 text-xl">
                                Not sure what you need? The team at MentalWell
                                will be happy to listen to you and suggest
                                therapy you hadn't considered.
                            </p>
                            <div className="flex items-center mt-10 space-x-4">
                                <IoMdMail
                                    color={theme === "dark" ? "white" : "black"}
                                    size={25}
                                />
                                <p className="w-[25rem]  text-text_80 text-xl">
                                    {" "}
                                    mentalwell@gmail.com{" "}
                                </p>
                            </div>
                            <div className="flex items-center mt-6 space-x-4">
                                <FaPhoneAlt
                                    color={theme === "dark" ? "white" : "black"}
                                    size={23}
                                />
                                <p className="w-[25rem]  text-text_80 text-xl">
                                    {" "}
                                    +48 501 876 546{" "}
                                </p>
                            </div>

                            <div className="flex mt-20 space-x-14">
                                <div className="flex flex-col space-y-4">
                                    <p className="text-xl font-medium text-text_80 ">
                                        Customer Support
                                    </p>
                                    <p className="text-lg text-text_80 w-[16rem]">
                                        Our support team is available around
                                        clock to address any concerns or queries
                                        you may have.
                                    </p>
                                </div>

                                <div className="flex flex-col space-y-4">
                                    <p className="text-xl font-medium text-text_80 ">
                                        Feedback and Suggestions
                                    </p>
                                    <p className="text-lg  text-text_80 w-[22rem]">
                                        We value your feedback and are
                                        continuously working to improve
                                        MentalWell. Your input is crucial in
                                        shaping the future of MentalWell.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="bg-white dark:bg-[#cfcfcf] rounded-3xl  w-[27rem] shadow p-6">
                                <h2 className="text-4xl font-medium  text-black/90 ">
                                    Get in Touch
                                </h2>
                                <p className="w-[25rem] mt-3 text-black/80 text-lg">
                                    You can reach us anytime
                                </p>
                                <div className="flex justify-between items-center mt-8">
                                    <input
                                        type="text"
                                        onChange={onChange}
                                        ref={name}
                                        placeholder="First Name"
                                        className="bg-transparent rounded-full w-[49%]  px-4 h-[2.8rem] border-2 border-black/10 outline-none placeholder:dark:text-black/50"
                                    />
                                    <input
                                        type="text"
                                        onChange={onChange}
                                        ref={surname}
                                        placeholder="Last Name"
                                        className="bg-transparent rounded-full w-[49%] px-4 h-[2.8rem] border-2 border-black/10 outline-none placeholder:dark:text-black/50"
                                    />
                                </div>
                                <div className="flex items-center bg-transparent  mt-4 rounded-full w-full px-4 h-[2.8rem] border-2 border-black/10  ">
                                    <MdOutlineEmail
                                        color={
                                            theme === "dark"
                                                ? "#737373"
                                                : "#9e9e9e"
                                        }
                                        size={22}
                                        className="mr-2"
                                    />
                                    <input
                                        ref={email}
                                        type="email"
                                        onChange={onChange}
                                        placeholder="Your email"
                                        className="outline-none bg-transparent placeholder:dark:text-black/50"
                                    />
                                </div>

                                <div className="relative">
                                    <textarea
                                        placeholder="How can we help you?"
                                        className="placeholder:dark:text-black/50 bg-transparent mt-4 rounded-xl w-full h-[12rem] px-4 py-2 border-2 border-black/10 outline-none"
                                        value={text}
                                        onChange={handleChangeTextArea}
                                    />
                                    <span className="absolute bottom-4 right-4 text-text_60">
                                        {text.length}/{maxCharCount}
                                    </span>
                                </div>

                                {errors && (
                                    <div>
                                        {Object.keys(errors).map((key) => (
                                            <p className="text-sm text-red-500 text-start mt-2">
                                                {errors[key][0]}
                                            </p>
                                        ))}
                                    </div>
                                )}

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="h-[2.8rem] rounded-full bg-primary disabled:bg-[#373737]  dark:disabled:bg-[#0c0c0c] px-4 mt-4 w-full hover:bg-primary_darker"
                                >
                                    <div className="flex justify-center items-center">
                                        {isSubmitting && (
                                            <CircleSvg
                                                color="white"
                                                secColor="white"
                                            />
                                        )}
                                        <p className="text-white text-xl ">
                                            Send Email
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="bg-background">
                    <div className="flex w-[89rem] py-20 mx-auto ">
                        <div className="flex space-x-14 items-center">
                            <iframe
                                className="rounded-2xl h-[30rem] w-[40rem]"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.8508608704433!2d21.075171897645895!3d52.28481344988806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ece8ec3191371%3A0xa1d53455e0212eaa!2sCha%C5%82upnicza%209%2C%2003-689%20Warszawa!5e0!3m2!1spl!2spl!4v1710939106382!5m2!1spl!2spl"
                                width="600"
                                height="450"
                                loading="lazy"
                            ></iframe>
                            <div>
                                <p className=" mt-3 text-text_80 text-xl font-medium">
                                    Our Location
                                </p>
                                <h2 className=" mt-3 text-text_80 text-4xl font-medium">
                                    You Can Find Us Here!
                                </h2>

                                <h2 className=" mt-10 text-text_80 text-xl ">
                                    MentalWell Ltd.
                                </h2>
                                <h2 className=" mt-2 text-text_80 text-xl ">
                                    Chałupnicza Street 9
                                </h2>
                                <h2 className=" mt-2 text-text_80 text-xl ">
                                    03-689, Warsaw
                                </h2>
                                <h2 className=" mt-2 text-text_80 text-xl ">
                                    Poland
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-background">
                    <div className="flex justify-between w-[89rem] pt-6  pb-20 mx-auto ">
                        <div>
                            <p className="text-text_80 text-xl font-medium">
                                FAQs
                            </p>
                            <h2 className=" mt-4 text-text_80 text-4xl font-medium w-[28rem]">
                                We're here to answer all your questions.
                            </h2>
                            <p className=" mt-6 text-text_60 text-xl w-[25rem]">
                                If you're new to MentalWell or looking answers
                                for some of your questions, this section will
                                help you learn more about platform and our work.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((item, key) => (
                                <FaqItem key={key} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer width="w-[89rem] " />
        </>
    );
}
