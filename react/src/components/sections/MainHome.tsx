import man from "../../assets/images/man.png"

export default function MainHome() {
    return (
        <div className="flex justify-between h-[43rem] max-w-[89rem] mx-auto pt-20 ">
            <div className="">
                <div className=" bg-secondary items-center px-2 rounded-md inline-flex h-[2.5rem] mb-3">
                    <p className="text-primary font-medium">CERTIFICATED SPECIALISTS</p>
                    <img src={man} className="w-[1.5rem]" alt="Man icon" />
                </div>

                <div className="flex flex-col ">
                    <p className="text-clamp text-black">We Take Care of</p>
                    <p className="text-6xl text-black">Your Mental Health</p>
                    <p className="w-[32rem] mt-6 text-black/70 text-xl">Embark on a journey to better well-being with our team of dedicated professionals.
                        From stress management to individual therapy, we passionately support clients through life's challenges,
                        fostering mental equilibrium and resilience.</p>
                </div>

                <button className="h-[3rem] rounded-md bg-primary px-4 mt-6">
                    <p className="text-white ">Book Appointment</p>
                </button>

            </div>
            <div className="">

            </div>

        </div>
    );
}