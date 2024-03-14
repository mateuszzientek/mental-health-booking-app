import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";
import logo_light from "../../assets/images/logo_light.png"
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className=" bg-background_secondary">
            <div className="py-12 flex mx-auto  justify-between w-[75rem]  bg-background_secondary">

                <div>
                    <LazyLoadImage
                        src={logo_light}
                        alt="Photo of logo"
                        effect="blur"
                        className="w-[10rem]"
                    />

                    <p className="text-base text-black/60 max-w-[15rem] mt-2">For years, we've been dedicated to promoting mental well-being for our patients.</p>
                    <div className='flex items-center space-x-4 mt-4'>
                        <CiFacebook color="black" size={25} />
                        <CiInstagram color="black" size={25} />
                        <CiTwitter color="black" size={25} />
                    </div>
                </div>

                <div className='flex space-x-20'>

                    <div className='flex flex-col space-y-1 text-black/80'>
                        <p className="text-xl text-black/80 font-medium mb-2">Quick Links</p>
                        <NavLink to="/" className=""> Home</NavLink>
                        <NavLink to="/appointment"> Book Appointment</NavLink>
                        <NavLink to="/specialist"> Specialist</NavLink>
                        <NavLink to="/contact"> Contact</NavLink>
                    </div>

                    <div className='space-y-1 text-black/80'>
                        <p className="text-xl  font-medium mb-3">Working Hours</p>
                        <p >Mon - Fri: 9:00AM - 9:PM</p>
                        <p >Sat: 9:00AM - 1AM</p>
                        <p >Sun: Closed</p>
                    </div>

                </div>

            </div>
        </div>
    );
}