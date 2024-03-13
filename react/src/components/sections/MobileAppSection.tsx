import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import apple from "../../assets/images/apple.png"
import google from "../../assets/images/google.png"
import phone from "../../assets/images/phone.png"

export default function MobileAppSection() {
    return (
        <div className="flex items-center justify-between w-[75rem] mx-auto py-20">

            <div>
                <h2 className="text-4xl font-bold text-black/80 pb-2 mt-2 ">Download out app to get</h2>
                <h2 className="text-4xl font-bold text-black/80 ">most out of it</h2>
                <p className="text-lg text-black/60 max-w-[28rem] mt-6 ">Get the most out of our service by downloading our app! Unlock exclusive features, receive personalized recommendations, and stay connected on-the-go.</p>

                <div className='flex items-center mt-6 space-x-4'>
                    <img
                        src={google}
                        alt="Google photo"
                        className="w-[9rem] hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                    />
                    <img
                        src={apple}
                        alt="Apple photo"
                        className="w-[9rem] hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                    />
                </div>
            </div>
            <LazyLoadImage
                src={phone}
                alt="Photo of phone"
                effect="blur"
                className="w-[30rem] mr-32"
            />


        </div>
    );
}
