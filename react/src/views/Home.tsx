import Navbar from "../components/sections/Navbar";
import MainHome from "../components/sections/MainHome";
import HeadlineCards from "../components/sections/HeadlineCards";
import ReservationSection from "../components/sections/ReservationSection";
import SpecialistSection from "../components/sections/SpecialistSection";
import AboutUsSection from "../components/sections/AboutUsSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <MainHome />
            <HeadlineCards />
            <ReservationSection />
            <SpecialistSection />
            <AboutUsSection />
        </>
    );
}
