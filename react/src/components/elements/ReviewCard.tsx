import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
    text: string;
    name: string;
    avatar: string;
}


export default function ReviewCard(props: ReviewCardProps) {

    function getImageUrl(name: string) {
        return new URL(`../../assets/images/avatars/${name}.jpg`, import.meta.url).href
    }

    return (
        <div className="mx-auto mt-14 mb-14  w-[23rem] h-[10rem] rounded-md bg-white">
            <div className="flex flex-col p-6 space-y-5">

                <div className="flex space-x-4">
                    <img
                        src={getImageUrl(props.avatar)}
                        alt="Avatar"
                        className="w-[2.5rem] h-[2.5rem] rounded-md "
                    />
                    <div className="space-y-1">
                        <p className="text-black/70 font-medium">{props.name}</p>

                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} color="#ffd04f" size={11} />
                            ))}
                        </div>

                    </div>
                </div>

                <p className="text-black/50 text-sm font-medium">"{props.text}"</p>

            </div>

        </div>
    );
}