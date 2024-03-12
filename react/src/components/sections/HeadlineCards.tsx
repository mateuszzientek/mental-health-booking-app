import CardHome from "../elements/CardHome";
import { IoPerson } from "react-icons/io5";
import { FaNotesMedical, FaBookReader } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";


export default function HeadlineCards() {
    return (
        <>
            <div className="flex flex-col justify-center items-center z-10 mt-40 w-[75rem] mx-auto">
                <h2 className="text-4xl text-black/80">The <span className="font-bold">highest standard</span> of mental care!</h2>
                <p className="text-xl text-black/60 w-[42rem] text-center mt-6">Our mission is to ensure the highest standards of mental health care.
                    We are dedicated to supporting our patients on their journey to complete mental and emotional well-being.</p>
            </div>
            <div className="flex justify-between items-center space-x-12 mt-24 w-[75rem] mx-auto">
                <CardHome header="Specialists" text="Qualified specialists offer empathetic, personalized support." icon={<IoPerson color="white" size={35} />} />
                <CardHome header="Free Booking" text="Effortless, free scheduling with psychologists on our user-friendly platform." icon={<FaBookReader color="white" size={35} />} />
                <CardHome header="Personalized Care" text="Customized support tailored to individual needs." icon={<FaNotesMedical color="white" size={35} />} />
                <CardHome header="Progress Updates" text="Stay informed on your journey and be aware of your progress." icon={<GiProgression color="white" size={35} />} />

            </div>

        </>


    );
}