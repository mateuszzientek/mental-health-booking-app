import { useEffect, useState } from "react";
import axiosClient from "./axios-client";
import { useParams } from "react-router-dom";
import { Specialist } from "../resources/types";
import LoadingAnimationPage from "../components/sections/LoadingAnimationPage";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import circle from "../assets/images/circle.png";

export default function SpecialistSingle() {
    const [dataFetched, setDataFetched] = useState(false);

    const { id } = useParams();
    const [specialist, setSpecialist] = useState<Specialist | null>(null);
    const navigate = useNavigate();

    function getImageUrl(name: string) {
        return new URL(
            `../assets/images/specialists/${name}.png`,
            import.meta.url
        ).href;
    }

    useEffect(() => {
        axiosClient
            .get(`/getSingleSpecialist/${id}`)
            .then(({ data }) => {
                if (data.redirectMessage) {
                    navigate("/");
                } else {
                    setDataFetched(true);
                    setSpecialist(data);
                }
            })
            .catch((err) => {
                const response = err.response;

                if (response && response.status === 500) {
                    alert(
                        "An error occurred while processing your request. Please try again later."
                    );
                } else {
                    console.log(response.data);
                }
            });
    }, []);

    return (
        <>
            {dataFetched && specialist !== null ? (
                <>
                    <div className="w-screen min-h-screen bg-background">
                        <Navbar transparent={false} />
                        <div className="flex justify-between py-20 w-[89rem] mx-auto">
                            <div>
                                <div className=" bg-background_secondary items-center px-4 rounded-md inline-flex h-[2.5rem] mb-3">
                                    <p className="text-primary font-medium">
                                        Profile
                                    </p>
                                </div>
                                <h2 className="text-4xl font-bold pb-2 mt-2 max-w-[30rem] text-primary">
                                    {specialist.name}
                                </h2>
                                <p className="text-xl  text-text_60 max-w-[30rem] mt-4">
                                    As a psychologist, I empower individuals
                                    through empathy and evidence-based methods,
                                    aiming to support their well-being while
                                    advocating for mental health awareness and
                                    access to care.
                                </p>

                                <div className="flex items-center space-x-12">
                                    <div className="flex flex-col space-y-4 mt-10">
                                        <p className="text-xl  text-text_80 font-medium ">
                                            Experience
                                        </p>

                                        <p className="text-xl  text-text_80 font-medium ">
                                            Languages
                                        </p>

                                        <p className="text-xl  text-text_80 font-medium ">
                                            Appointments
                                        </p>
                                    </div>

                                    <div className="flex flex-col space-y-4 mt-10">
                                        <p className="text-xl  text-text_80  ">
                                            {specialist.experience} Years+
                                        </p>
                                        <p className="text-xl text-text_80">
                                            {specialist.languages.join(", ")}
                                        </p>
                                        <p className="text-xl  text-text_80  ">
                                            {specialist.quantity_appointments}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xl  text-text_80 font-medium mt-10">
                                    Speciality
                                </p>

                                <div className="grid grid-cols-2 max-w-[80%]">
                                    {specialist.specializations.map(
                                        (specialization, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-center items-center rounded-full border border-black/40 text-text_80 dark:border-white/40 w-[10rem] h-[2.5rem] mt-4"
                                            >
                                                {specialization}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="relative">
                                <img src={circle} className="w-[40rem]" />
                                <img
                                    src={getImageUrl(specialist.avatar)}
                                    className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-[28rem] h-[35rem]"
                                />
                            </div>
                        </div>
                    </div>
                    <Footer width="w-[89rem] " />
                </>
            ) : (
                <LoadingAnimationPage />
            )}
        </>
    );
}
