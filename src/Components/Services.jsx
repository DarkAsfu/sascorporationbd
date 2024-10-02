import { useEffect, useState } from "react";
import Title from "./Title";
import { Image } from "@nextui-org/react";

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('https://api.sascorporationbd.com/api/services/');
      const data = await response.json();
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <div id="services" className="bg-gray-100 py-10">
      <Title title={`Our Products & Services`} />
      <div className="gap-4 w-10/12 mx-auto my-10 grid grid-cols-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative max-w-xs border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 col-span-12 xl:p-7 lg:col-span-3 md:col-span-6 hover:shadow-2xl hover:scale-105 hover:z-10 bg-white"
          >
            <div className="mb-6 flex justify-center items-center" style={{ backgroundColor: service.bgColor, borderRadius: '50%', width: '50px', height: '50px' }}>
              <Image src={service.icon} alt={service.title} width={50} height={50} />
            </div>
            <h4
              className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500"
            >
              {service.title}
            </h4>
              {/* <p
                className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5"
              >
                {service.description}
              </p> */}
              <div className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5" dangerouslySetInnerHTML={{ __html: service.description }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
