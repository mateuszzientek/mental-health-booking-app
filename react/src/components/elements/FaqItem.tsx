import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

interface FaqItemState {
    item: {
        main: string,
        text: string
    }
}

export default function FaqItem(props: FaqItemState) {

    const [isOpen, setIsOpen] = useState(false);
    const theme = useSelector((state: RootState) => state.theme.theme)

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="rounded-xl w-[45rem] border p-5 border-black/20 dark:border-white/20 cursor-pointer">
            <div className="flex items-center justify-between  ">
                <h1 className="text-text_80 text-2xl ">{props.item.main}</h1>
                <LuPlus size={30} color={theme === "dark" ? "white" : "black"} />
            </div>
            {isOpen &&
                <div className="mt-6">
                    <p className="text-text_80 text-lg ">{props.item.text}</p>
                </div>
            }

        </div >
    );
}
