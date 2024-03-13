import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Autoplay } from 'swiper/modules';
import ReviewCard from "../elements/ReviewCard";
import comments from "../../resources/comments";


export default function OpinionSection() {

    return (
        <div className="py-14 bg-secondary">

            <div className='max-w-[75rem] mx-auto'>

                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-black/80 ">What our patients say</h2>
                    <p className="text-xl text-center text-black/60 max-w-[30rem] mt-6 ">We value your feedback, which is why we strive to ensure that our services are of the highest quality.</p>
                </div>

                <Swiper
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1300: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    {comments.map((comment) => (
                        <SwiperSlide>
                            <ReviewCard key={comment.id} text={comment.text} name={comment.name} avatar={comment.avatar} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}