import { ReactNode } from 'react';


interface CardHomeProps {
    header: string,
    text: string
    icon: ReactNode
}

export default function CardHome(props: CardHomeProps) {
    return (
        <div className="relative flex flex-col justify-start items-center w-[17rem] h-[16rem] border-2 border-black/10 dark:border-white/10 rounded-md">
            <div className="flex justify-center items-center absolute -top-10 w-[5rem] h-[5rem] bg-primary rounded-full">
                {props.icon}
            </div>

            <p className="text-2xl text-text_80 font-medium mt-16">{props.header}</p>
            <p className="text-center text-lg w-[80%] text-text_60 mt-2">{props.text}</p>
        </div>
    );
}