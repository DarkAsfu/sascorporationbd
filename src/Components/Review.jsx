import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import Title from './Title';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/testimonials/')
            .then(response => {
                setReviews(response.data);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
            });
    }, []);
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
                                {`"${review.message}"`}
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                                    <img src={review.image} />
                                </div>
                                <div className="flex flex-col tracking-wider">
                                    <label className="text-[#0073E6] font-bold text-base">{review.name}</label>
                                    <label className="text-gray-400 font-normal text-sm">{review.designation}</label>
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