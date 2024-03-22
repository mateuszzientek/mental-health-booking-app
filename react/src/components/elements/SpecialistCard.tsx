import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface SpecialistCardProps {
    name: string;
    specialization: string;
    img: string;
    width: string;
}

export default function SpecialistCard(props: SpecialistCardProps) {
    return (
        <div className="group mx-auto bg-white dark:bg-white/80 w-[18rem] h-[23rem] shadow-xl rounded-xl  duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
            <div className="flex items-end justify-center h-[60%] bg-secondary rounded-t-xl group-hover:bg-primary">
                <LazyLoadImage
                    src={props.img}
                    alt="Photo of specialist"
                    effect="blur"
                    className={props.width}
                />
            </div>

            <p className="text-primary text-xl font-medium text-center mt-4">
                {props.name}
            </p>
            <p className="text-black/80 text-lg text-center mt-2">
                {props.specialization}
            </p>

            <div className="mx-auto text-center border-b-2 border-black/80 w-[10rem] mt-4">
                <p>Book an appointment</p>
            </div>
        </div>
    );
}
