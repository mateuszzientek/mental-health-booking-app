import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll"
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ButtonToUp() {

    const [backToUpButton, setBackToUpButton] = useState(false)

    const scrollUp = () => {
        scroll.scrollToTop({
            smooth: true,
            duration: 500
        })
    }

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 800) {
                setBackToUpButton(true)
            } else {
                setBackToUpButton(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return (
        <>
            {backToUpButton && (
                <button
                    onClick={scrollUp}
                    className={`bg-primary fixed bottom-[30px] right-[30px] z-10 rounded-full p-2 shadow-button transform hover:scale-125 hover:bg-[#347855] transition ease-out duration-300`}
                >
                    <AiOutlineArrowUp size={25} color="white" />
                </button>
            )}

        </>
    );
}