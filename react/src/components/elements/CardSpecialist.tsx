import person from "../../assets/images/person.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

interface CardSpecialistProps {
    data: {
        name: string;
        text: string;
    };
}

export default function CardSpecialist(props: CardSpecialistProps) {
    const theme = useSelector((state: RootState) => state.theme.theme);

    return (
        <div className=" relative group items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-xl blur-edge">
            <div className="h-[23rem] w-[17rem] ">
                <img
                    className="h-full  w-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-transform duration-500"
                    src={person}
                />
            </div>
            <div
                className={`absolute inset-0  ${
                    theme === "dark" ? "bg-black " : "bg-white "
                } opacity-15`}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
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
