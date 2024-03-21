import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo_light from "../../assets/images/logo_light.png";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import HeroLinkFooter from "../elements/HeroLinkFooter";

interface FooterProps {
    width: string;
}

export default function Footer(props: FooterProps) {
    return (
        <div className=" bg-background_secondary">
            <div
                className={`py-12 flex mx-auto  justify-between ${props.width} bg-background_secondary`}
            >
                <div>
                    <LazyLoadImage
                        src={logo_light}
                        alt="Photo of logo"
                        effect="blur"
                        className="w-[10rem]"
                    />

                    <p className="text-base text-black/60 max-w-[15rem] mt-2">
                        For years, we've been dedicated to promoting mental
                        well-being for our patients.
                    </p>
                    <div className="flex items-center space-x-4 mt-4">
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CiFacebook
                                color="black"
                                size={25}
                                className="hover:scale-110 duration-300 ease-in-out"
                            />
                        </a>
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CiInstagram
                                color="black"
                                size={25}
                                className="hover:scale-110 duration-300 ease-in-out"
                            />
                        </a>
                        <a
                            href="https://react.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CiTwitter
                                color="black"
                                size={25}
                                className="hover:scale-110 duration-300 ease-in-out"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex space-x-20">
                    <div className="flex flex-col space-y-1 text-black/80">
                        <p className="text-xl text-black/80 font-medium mb-2">
                            Quick Links
                        </p>
                        <HeroLinkFooter link="/" text="Home" />
                        <HeroLinkFooter
                            link="/appointment"
                            text="Book Appointment"
                        />
                        <HeroLinkFooter link="/specialist" text="Specialist" />
                        <HeroLinkFooter link="/contact" text="Contact" />
                    </div>

                    <div className="space-y-1 text-black/80">
                        <p className="text-xl  font-medium mb-3">
                            Working Hours
                        </p>
                        <p>Mon - Fri: 9:00AM - 9:PM</p>
                        <p>Sat: 9:00AM - 1AM</p>
                        <p>Sun: Closed</p>
                    </div>

                    <div className="space-y-1 text-black/80">
                        <p className="text-xl  font-medium mb-3">Location</p>
                        <p>Chałupnicza Street 9</p>
                        <p>03-689, Warsaw</p>
                        <p>Poland</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
