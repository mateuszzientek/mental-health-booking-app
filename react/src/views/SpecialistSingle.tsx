import { useEffect, useState } from "react";
import axiosClient from "./axios-client";
import { useParams } from "react-router-dom";
import { Specialist } from "../resources/types";
import LoadingAnimationPage from "../components/sections/LoadingAnimationPage";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/sections/Navbar";

export default function SpecialistSingle() {
    const [dataFetched, setDataFetched] = useState(false);

    const { id } = useParams();
    const [specialist, setSpecialist] = useState<Specialist | null>(null);
    const navigate = useNavigate();

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
                    </div>
                </>
            ) : (
                <LoadingAnimationPage />
            )}
        </>
    );
}
