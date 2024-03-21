import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo_light from "../../assets/images/logo_light.png";
import logo_dark from "../../assets/images/logo_dark.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import HeroLink from "../elements/HeroLink";
import SwitchDarkMode from "../elements/SwitchDarkMode";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../views/axios-client";
import { setToken, setUser } from "../../state/user/userSlice";
import CircleSvg from "../elements/CircleSvg";
import { useState } from "react";

interface NavbarProps {
    transparent: boolean;
}

export default function Navbar(props: NavbarProps) {
    const [isSubmittingLogout, setIsSubmittingLogout] = useState(false);
    const token = useSelector((state: RootState) => state.user.token);
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();

    const theme = useSelector((state: RootState) => state.theme.theme);
    const navigate = useNavigate();

    const onLogout = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        setIsSubmittingLogout(true);
        axiosClient
            .post("/logout")
            .then(() => {
                dispatch(setUser(null));
                dispatch(setToken(null));
            })
            .finally(() => {
                setIsSubmittingLogout(false);
            });
    };

    return (
        <div>
            <div className="flex  bg-primary h-12">
                <div className="flex items-center justify-between mx-auto w-[89rem]">
                    <div className="flex items-center h-full space-x-4">
                        <div className="border-white/30 border-l-2 h-full"></div>
                        <div className="flex items-center space-x-2">
                            <MdOutlineEmail color="white" />
                            <p className=" text-white text-sm ">
                                mentalwell@gmail.com
                            </p>
                        </div>
                        <div className="border-white/30 border-l-2 h-full"></div>

                        <div className="flex items-center space-x-2">
                            <FiPhoneCall color="white" />
                            <p className=" text-white text-sm ">
                                +48 501 876 546
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 h-full">
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookSquare
                                color="white"
                                size={25}
                                className="hover:scale-110 duration-300 ease-in-out"
                            />
                        </a>
                        <div className="border-white/30 border-l-2 h-full"></div>
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaSquareInstagram
                                color="white"
                                size={25}
                                className="hover:scale-110 duration-300 ease-in-out"
                            />
                        </a>
                        <div className="border-white/30 border-l-2 h-full"></div>
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaSquareXTwitter
                                color="white"
                                size={25}
                                className="hover:scale-110 duration-300 ease-in-out"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div
                className={`flex h-28 ${
                    props.transparent
                        ? "bg-transparent"
                        : "bg-background shadow-md"
                } items-center z-40`}
            >
                <div className=" flex items-center justify-between h-32 w-[89rem] mx-auto ">
                    <div onClick={() => navigate("/")}>
                        <LazyLoadImage
                            src={theme === "light" ? logo_light : logo_dark}
                            alt="Logo"
                            effect="blur"
                            className="w-[12rem] cursor-pointer"
                        />
                    </div>

                    <div className="flex space-x-16">
                        <HeroLink link="/" text="Home" />
                        <HeroLink link="/appointment" text="Book Appointment" />
                        <HeroLink link="/specialist" text="Specialists" />
                        <HeroLink link="/contact" text="Contact" />
                    </div>

                    <div className="flex space-x-4 items-center">
                        <SwitchDarkMode />

                        {!token ? (
                            <>
                                <button
                                    onClick={() => navigate("/login")}
                                    className="group w-[7rem] h-[3rem] rounded-md border-2 border-primary hover:bg-primary hover:text-white "
                                >
                                    <p className="text-primary dark:text-white group-hover:text-white ">
                                        Sign In
                                    </p>
                                </button>
                                <button
                                    onClick={() => navigate("/register")}
                                    className="w-[7rem] h-[3rem] rounded-md bg-primary hover:bg-primary_darker"
                                >
                                    <p className="text-white ">Sign Up</p>
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate("/profile")}
                                    className="w-[7rem] h-[3rem] rounded-md bg-primary hover:bg-primary_darker"
                                >
                                    <p className="text-white">My Profile</p>
                                </button>

                                <button
                                    disabled={isSubmittingLogout}
                                    onClick={onLogout}
                                    className="group w-[7rem] h-[3rem] rounded-md border-2 disabled:bg-primary  border-primary hover:bg-primary  "
                                >
                                    <div className="flex justify-center items-center">
                                        {isSubmittingLogout && (
                                            <CircleSvg
                                                color="white"
                                                secColor="white"
                                            />
                                        )}
                                        <p
                                            className={` dark:text-white ${
                                                isSubmittingLogout
                                                    ? "text-white"
                                                    : "text-primary group-hover:text-white"
                                            } `}
                                        >
                                            Logout
                                        </p>
                                    </div>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
