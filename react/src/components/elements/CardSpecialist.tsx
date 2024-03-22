import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

interface CardSpecialistProps {
    data: {
        name: string;
        text: string;
        avatar: string;
    };
}

export default function CardSpecialist(props: CardSpecialistProps) {
    function getImageUrl(name: string) {
        return new URL(
            `../../assets/images/specialists/${name}.png`,
            import.meta.url
        ).href;
    }

    return (
        <div className=" relative group items-center justify-center  overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-xl blur-edge">
            <div className="h-[22rem] w-[16rem] bg-secondary background-contact">
                <img
                    className="absolute bottom-0 h-[90%] w-full group-hover:rotate-3 group-hover:scale-110 transition-transform duration-500"
                    src={getImageUrl(props.data.avatar)}
                />
            </div>
            {/* <div
                className={`absolute inset-0  ${
                    theme === "dark" ? "bg-black/50 " : "bg-white "
                } `}
            ></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-300">
                <h1 className="text-2xl font-bold text-white">
                    {props.data.name}
                </h1>
                <p className="text-lg italic text-white mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {props.data.text}
                </p>
                <button className="rounded-full shadow shadow-black/60 bg-primary py-2 px-3.5 text-sm capitalize text-white">
                    See more
                </button>
            </div>
        </div>
    );
}
