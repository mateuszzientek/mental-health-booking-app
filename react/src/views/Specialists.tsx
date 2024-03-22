import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import CardSpecialist from "../components/elements/CardSpecialist";
import background_photo from "../assets/images/background_photo.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import specialist from "../resources/specialist";

export default function Specialists() {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const root = document.documentElement;
    root.style.setProperty(
        "--bg-color",
        theme === "dark" ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.8)"
    );

    return (
        <>
            <Navbar transparent={false} />
            <div className="w-screen min-h-screen background-specialists">
                <div className="flex flex-col items-center ">
                    <h2 className="text-5xl text-text_80 font-semibold z-20 mt-20">
                        Meet Our Specialist!
                    </h2>
                    <p className="text-xl text-text_80 z-20 text-center mt-6 w-[35rem]">
                        Meet our diverse team of psychologists, each with unique
                        expertise and approaches tailored to your needs.
                        Discover the perfect match for you.
                    </p>
                </div>
                <div className="flex items-center justify-center mt-16">
                    <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
                        {specialist.map((specialist, key) => (
                            <CardSpecialist key={key} data={specialist} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer width="w-[89rem] " />
        </>
    );
}
