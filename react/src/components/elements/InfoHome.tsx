interface InfoHomeProps {
    text1: string,
    text2: string
}

export default function InfoHome(props: InfoHomeProps) {
    return (
        <div className="flex flex-col items-center justify-center font-medium space-y-2">
            <p className="text-primary text-3xl ">{props.text1}</p>
            <p className="text-black/80 text-xl ">{props.text2}</p>
        </div>
    );
}