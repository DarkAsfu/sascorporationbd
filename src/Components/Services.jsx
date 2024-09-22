import Title from "./Title";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Feed Ingredient Supply",
      description:
        "SAS Corporation provides a wide range of feed ingredients to meet the needs of the poultry, livestock, and aquaculture industries.",
      color: "#0073E6",
      bgColor: "#E6F4FF",
    },
    {
      id: 2,
      title: "ICT",
      description:
        "SAS Corporation offers a comprehensive range of ICT services, including software development, network solutions, and IT consulting.",
      color: "#F7DC6F",
      bgColor: "#FFF9E6",
    },
    {
      id: 3,
      title: "Agriculture",
      description:
        "SAS Corporation provides a wide range of feed ingredients to meet the needs of the poultry, livestock, and aquaculture industries.",
      color: "#8BC34A",
      bgColor: "#F0F9E6",
    },
    {
      id: 4,
      title: "Macrofinancing",
      description:
        "SAS Corporation offers macrofinancing services to help businesses grow and expand their operations.",
      color: "#03A9F4",
      bgColor: "#E6F7FF",
    },
    {
      id: 5,
      title: "Garments",
      description:
        "SAS Corporation offers a wide range of garments, including textiles, clothing, and accessories.",
      color: "#FFC107",
      bgColor: "#FFFBE6",
    },
    {
      id: 6,
      title: "Others",
      description:
        "SAS Corporation offers a wide range of other services, including marketing, logistics, and warehousing.",
      color: "#9C27B0",
      bgColor: "#F9E6FF",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <Title title="Our Services" />
      <div className="gap-4 w-10/12 mx-auto my-10 grid grid-cols-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative max-w-xs border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 col-span-12 xl:p-7 lg:col-span-3 md:col-span-6 hover:shadow-2xl hover:scale-105 hover:z-10 bg-white"
          >
            <div className="mb-6 flex justify-center items-center" style={{ backgroundColor: service.bgColor, borderRadius: '50%', width: '50px', height: '50px' }}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.66699 12.8162L11.3501 15.4993C11.5616 15.7107 11.9043 15.7109 12.1158 15.4997L17.8753 9.75033M13.0003 23.8337C7.01724 23.8337 2.16699 18.9834 2.16699 13.0003C2.16699 7.01724 7.01724 2.16699 13.0003 2.16699C18.9834 2.16699 23.8337 7.01724 23.8337 13.0003C23.8337 18.9834 18.9834 23.8337 13.0003 23.8337Z"
                  stroke={service.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h4
              className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500"
            >
              {service.title}
            </h4>
            <p
              className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5"
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
