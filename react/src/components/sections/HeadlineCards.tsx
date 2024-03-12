import CardHome from "../elements/CardHome";
import { IoPerson } from "react-icons/io5";
import { FaNotesMedical, FaBookReader } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";


export default function HeadlineCards() {
    return (

        <div className="flex flex-col justify-center items-center z-10 m-40 ">
            <p className="text-3xl text-black/80">The <span className="font-bold">highest standard</span> of mental care!</p>
            <p className="text-xl text-black/70 w-[38rem] text-center mt-6">Our mission is to ensure the highest standards of mental health care.
                We are dedicated to supporting our patients on their journey to complete mental and emotional well-being.</p>

            <div className="flex items-center space-x-12 mt-24">
                <CardHome header="Specialists" text="Qualified specialists offer empathetic, personalized support." icon={<IoPerson color="white" size={35} />} />
                <CardHome header="Free Booking" text="Effortless, free scheduling with psychologists on our user-friendly platform." icon={<FaBookReader color="white" size={35} />} />
                <CardHome header="Personalized Care" text="Customized support tailored to individual needs." icon={<FaNotesMedical color="white" size={35} />} />
                <CardHome header="Progress Updates" text="Stay informed on your journey and be aware of your progress." icon={<GiProgression color="white" size={35} />} />

            </div>
        </div>


    );
}