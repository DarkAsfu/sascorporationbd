import Title from "./Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";

const OurProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/projects/')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error))
    }, [])

    return (
        <div className="bg-[#F3F4F6] pb-10">
            <Title title="Our Projects" />
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => {
                    swiper.el.addEventListener('mouseenter', () => {
                        swiper.autoplay.stop();
                    });
                    swiper.el.addEventListener('mouseleave', () => {
                        swiper.autoplay.start();
                    });
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper w-10/12 mx-auto mt-6"
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="w-[] relative mt-4 h-[350px] overflow-hidden group mx-auto dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
                            <div className="w-full h-full">
                                <img
                                    src={project.project_image}
                                    alt={project.title}
                                    width={600}
                                    height={600}
                                    className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
                                />
                            </div>
                            <article className="p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-[#000] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
                                    <h1 className="md:text-2xl font-semibold text-white">{project.project_name}</h1>
                                    <p className="sm:text-base text-sm text-white">{project.description}</p>
                                    <a href={project.project_link} className="p-2 bg-[#0073E6] flex rounded-md text-white max-w-max">
                                        Learn More
                                    </a>
                                </div>
                            </article>
                            <article className="px-2 py-10 w-full h-[50%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#000] opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300">
                                <h1 className="md:text-2xl font-semibold text-white">{project.project_name}</h1>
                                <p className="sm:text-base text-sm text-white">{project.description}</p>
                            </article>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurProjects;