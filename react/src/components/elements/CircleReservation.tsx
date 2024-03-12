interface CircleReservationProps {
    header: string,
    text: string,
    number: string
}

export default function CircleReservation(props: CircleReservationProps) {
    return (
        <div className="flex space-x-6 ">
            <div className="flex justify-center items-center w-[4rem] h-[4rem] rounded-full border-2 border-primary flex-shrink-0">
                <p className="text-primary text-4xl">{props.number}</p>
            </div>
            <div className="flex-col">
                <p className="font-medium text-black/80 text-2xl">{props.header}</p>
                <p className=" text-black/60 text-xl mt-2">{props.text}</p>

            </div>
        </div>
    );
}