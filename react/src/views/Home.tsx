
import MainHome from "../components/sections/MainHome";
import HeadlineCards from "../components/sections/HeadlineCards";
import ReservationSection from "../components/sections/ReservationSection";
import SpecialistSection from "../components/sections/SpecialistSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import OpinionSection from "../components/sections/OpinionSection";
import MobileAppSection from "../components/sections/MobileAppSection";
import Navbar from "../components/sections/Navbar";

export default function Home() {
    return (
        <>
            <MainHome />
            <HeadlineCards />
            <ReservationSection />
            <SpecialistSection />
            <AboutUsSection />
            <OpinionSection />
            <MobileAppSection />
        </>
    );
}
