import man from "../../assets/images/man.png"
import InfoHome from "../elements/InfoHome";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import main_image from "../../assets/images/main_image.png"

export default function MainHome() {
    return (
        <div className="relative flex justify-between h-[43rem] max-w-[89rem] mx-auto z-40">
            <div className="pt-20">
                <div className=" bg-secondary items-center px-2 rounded-md inline-flex h-[2.5rem] mb-3">
                    <p className="text-primary font-medium">CERTIFICATED SPECIALISTS</p>
                    <img src={man} className="w-[1.5rem]" alt="Man icon" />
                </div>

                <div className="flex flex-col ">
                    <p className="text-clamp text-black">We Take Care of</p>
                    <p className="text-6xl text-black">Your Mental Health</p>
                    <p className="w-[32rem] mt-6 text-black/70 text-xl">Embark on a journey to better well-being with our team of dedicated professionals.
                        From stress management to individual therapy, we passionately support clients through life's challenges,
                        fostering mental equilibrium and resilience.</p>
                </div>

                <button className="h-[3rem] rounded-md bg-primary px-4 mt-6">
                    <p className="text-white ">Book Appointment</p>
                </button>
            </div>

            <div className="absolute -bottom-10 bg-white rounded-lg left-1/2 transform -translate-x-1/2 w-full h-[8rem] shadow px-40 flex justify-between">
                <InfoHome text1="6 +" text2="Specialist" />
                <InfoHome text1="1000 +" text2="Reservations" />
                <InfoHome text1="300 +" text2="Patient Capacity" />
                <InfoHome text1="100 +" text2="Positive Opinions" />
            </div>

            <div>
                <LazyLoadImage
                    src={main_image}
                    alt="Main image"
                    effect="blur"
                    className="w-[40rem] pt-10 mr-14"
                />
            </div>
        </div>
    );
}