import CircleReservation from "../elements/CircleReservation";
import couple from "../../assets/images/couple.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ReservationSection() {
    return (
        <div className="bg-background py-32">
            <div className="flex items-start justify-between w-[75rem] mx-auto  ">
                <div>
                    <div className=" bg-background_secondary items-center px-2 rounded-md inline-flex h-[2.5rem] mb-3">
                        <p className="text-primary font-medium">Don't hesitate!</p>
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold text-text_80 pb-2 mt-2 max-w-[30rem]">Book today an appointment</h2>
                        <h2 className="text-4xl font-bold text-text_80 max-w-[30rem] ">through our platform!</h2>

                        <p className="text-xl  text-text_60 max-w-[30rem] mt-6">On our platform, effortlessly book appointments with specialists tailored to your needs, ensuring a comfortable reservation process for you.</p>
                    </div>

                    <div className="flex-col mt-6 space-y-6 max-w-[30rem]">
                        <CircleReservation number="1" header="Choose a specialist" text="Choose a specialist who best suits your needs." />
                        <CircleReservation number="2" header="Choose date and time" text="Choose a date and time from the available options for the selected specialist." />
                        <CircleReservation number="3" header="Expect the visit" text="Now, all that's left is to await the reserved appointment." />
                    </div>
                </div>

                <LazyLoadImage
                    src={couple}
                    alt="Photo of couple"
                    effect="blur"
                    className="w-[40rem] rounded-tr-[8rem] mt-16"
                />
            </div >
        </div>
    );
}