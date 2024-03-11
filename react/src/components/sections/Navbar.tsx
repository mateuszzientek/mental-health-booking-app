import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo_light from "../../assets/images/logo_light.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Navbar() {
    return (
        <>
            <div className="bg-[#449c6f] flex items-center justify-between px-[10rem] mx-auto h-12">
                <div className="flex items-center h-full space-x-6">
                    <div className="border-white/30 border-l-2 h-full"></div>
                    <div className="flex items-center space-x-2">
                        <FiPhoneCall color="white" />
                        <p className=" text-white text-sm ">mentalwell@gmail.com</p>
                    </div>
                    <div className="border-white/30 border-l-2 h-full"></div>

                    <div className="flex items-center space-x-2">
                        <MdOutlineEmail color="white" />
                        <p className=" text-white text-sm ">+48 501 876 546</p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 h-full">
                    <FaFacebookSquare color="white" size={25} />
                    <div className="border-white/30 border-l-2 h-full"></div>
                    <FaSquareInstagram color="white" size={25} />
                    <div className="border-white/30 border-l-2 h-full"></div>
                    <FaSquareXTwitter color="white" size={25} />
                </div>

            </div>

            <div className='flex items-center justify-between h-32 max-w-[89rem] mx-auto'>

                <LazyLoadImage
                    src={logo_light}
                    alt="Logo"
                    effect="blur"
                    className="w-[12rem]"
                />

                <div className="flex space-x-16">
                    <p className="text-lg text-black/80 font-bold">Home</p>
                    <p className="text-lg text-black/80 font-bold">About</p>
                    <p className="text-lg text-black/80 font-bold">Doctors</p>
                    <p className="text-lg text-black/80 font-bold">Book Appointment</p>
                </div>


                <div className="flex space-x-4">
                    <button className="w-[7rem] h-[3rem] rounded-md border-2 border-primary">
                        <p className="text-primary font-bold">Sign In</p>
                    </button>
                    <button className="w-[7rem] h-[3rem] rounded-md bg-primary">
                        <p className="text-white font-bold">Sign Up</p>
                    </button>
                </div>

            </div>
        </>
    );
}