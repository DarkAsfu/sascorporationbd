import Title from "./Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const OurProjects = () => {
    const projects = [
        {
            id: 1,
            title: "Project Alpha",
            description: "A comprehensive project focused on developing sustainable agricultural practices.",
            imageUrl: "https://images.unsplash.com/photo-1596883072150-f5d25584e064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8NXx8YWdyaWN1bHR1cmV8ZW58MHx8fHwxNjQyNzA2Nzk2&ixlib=rb-1.2.1&q=80&w=1080",
            url: "https://www.google.com"
        },
        {
            id: 2,
            title: "Project Beta",
            description: "An innovative ICT project aimed at enhancing network solutions and IT consulting services.",
            imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTR8fElUJTJDJTIwcHJvamVjdHxlbnwwfHx8fDE2NDI3MDYyMDA&ixlib=rb-1.2.1&q=80&w=1080",
            url: "https://www.google.com"
        },
        {
            id: 3,
            title: "Project Gamma",
            description: "A macrofinancing initiative to support small and medium-sized enterprises in expanding their operations.",
            imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTR8fG1hY3JvZmluYW5jaW5nfGVufDB8fHx8MTY0MjcwNjIwMA&ixlib=rb-1.2.1&q=80&w=1080",
            url: "https://www.google.com"
        },
        {
            id: 4,
            title: "Project Delta",
            description: "A garments project that focuses on producing high-quality textiles and clothing for the global market.",
            imageUrl: "https://images.unsplash.com/photo-1589631203395-32debde167a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8NTZ8fGdhcm1lbnRzfGVufDB8fHx8MTY0MjcwNDcxNg&ixlib=rb-1.2.1&q=80&w=1080",
            url: "https://www.google.com",
        },
        {
            id: 5,
            title: "Project Beta",
            description: "An innovative ICT project aimed at enhancing network solutions and IT consulting services.",
            imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTR8fElUJTJDJTIwcHJvamVjdHxlbnwwfHx8fDE2NDI3MDYyMDA&ixlib=rb-1.2.1&q=80&w=1080",
            url: "https://www.google.com"
        }
    ];

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
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={600}
                                    height={600}
                                    className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
                                />
                            </div>
                            <article className="p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-[#000] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
                                    <h1 className="md:text-2xl font-semibold text-white">{project.title}</h1>
                                    <p className="sm:text-base text-sm text-white">{project.description}</p>
                                    <a href={project.url} className="p-2 bg-[#0073E6] flex rounded-md text-white max-w-max">
                                        Learn More
                                    </a>
                                </div>
                            </article>
                            <article className="px-2 py-10 w-full h-[50%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#000] opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300">
                                <h1 className="md:text-2xl font-semibold text-white">{project.title}</h1>
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