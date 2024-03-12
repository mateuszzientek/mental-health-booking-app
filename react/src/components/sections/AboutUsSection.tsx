import aboutus from "../../assets/images/aboutus.png"
import mental from "../../assets/images/mental.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

export default function AboutUsSection() {
    return (
        <div className="relative flex items-center justify-between w-[75rem] mx-auto pb-32">

            <LazyLoadImage
                src={aboutus}
                alt="Photo of crew"
                effect="blur"
                className="w-[40rem] rounded-tl-[8rem] "
            />

            <div className="w-[26rem] mr-20">
                <h2 className="text-4xl font-bold text-black/80  max-w-[30rem]">Discover more <span className="text-primary">About</span> Us</h2>
                <p className="text-xl text-justify text-black/60 max-w-[30rem] mt-6 break-words">Our specialists are not only experienced and qualified but, above all, they are empathetic and understanding. We're here to listen, comprehend your emotions, and explore paths to mental health. Our passion lies in building deep relationships based on trust. We're dedicated to inspiring positive changes for improved well-being. Together, we create a safe space for open expression, guiding you towards balance and fulfillment.</p>
            </div>

            <img src={mental} className="absolute top-0 right-0 w-[3.5rem] rotate-[20deg]" />

        </div>
    );
}