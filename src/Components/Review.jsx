import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import Title from './Title';

const reviews = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        name: "Rai Raksa Muhamad",
        title: "Fullstack PHP Developer",
        imgSrc: "https://rairaksa.github.io/assets/img/rai.jpg"
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        name: "Rai Raksa Muhamad",
        title: "Fullstack PHP Developer",
        imgSrc: "https://rairaksa.github.io/assets/img/rai.jpg"
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        name: "Rai Raksa Muhamad",
        title: "Fullstack PHP Developer",
        imgSrc: "https://rairaksa.github.io/assets/img/rai.jpg"
    }
];

const Review = () => {
    return (
        <div>
            <Title title={"Our Client Review"}></Title>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper "
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-[400px]  flex flex-col items-center justify-center gap-8">
                            <h1 className="text-[20px] md:text-4xl text-gray-600 leading-relaxed text-center w-4/5">
                                {`"${review.text}"`}
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                                    <img src={review.imgSrc} />
                                </div>
                                <div className="flex flex-col tracking-wider">
                                    <label className="text-[#0073E6] font-bold text-base">{review.name}</label>
                                    <label className="text-gray-400 font-normal text-sm">{review.title}</label>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Review;