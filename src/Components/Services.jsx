import Title from "./Title";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Feed Ingredient Supply",
      description:
        "SAS Corporation provides a wide range of feed ingredients to meet the needs of the poultry, livestock, and aquaculture industries.",
    },
    {
      id: 2,
      title: "ICT",
      description:
        "SAS Corporation offers a comprehensive range of ICT services, including software development, network solutions, and IT consulting.",
    },
    {
      id: 3,
      title: "Agriculture",
      description:
        "SAS Corporation provides a wide range of feed ingredients to meet the needs of the poultry, livestock, and aquaculture industries.",
    },
    {
      id: 4,
      title: "Macrofinancing",
      description:
        "SAS Corporation offers macrofinancing services to help businesses grow and expand their operations.",
    },
    {
      id: 5,
      title: "Garments",
      description:
        "SAS Corporation offers a wide range of garments, including textiles, clothing, and accessories.",
    },
    {
      id: 6,
      title: "Others",
      description:
        "SAS Corporation offers a wide range of other services, including marketing, logistics, and warehousing.",
    },
  ];

  return (
    <div>
      <Title title="Our Services" />
      <div className=" gap-4 w-10/12 mx-auto mt-4">
        {services.map((service) => (
          <div key={service.id} className="relative max-w-xs border border-solid border-gray-200 rounded-2xl p-4 transition-all duration-500 col-span-12 xl:p-7 lg:col-span-3 md:col-span-6">
            <div className="mb-6">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66699 12.8162L11.3501 15.4993C11.5616 15.7107 11.9043 15.7109 12.1158 15.4997L17.8753 9.75033M13.0003 23.8337C7.01724 23.8337 2.16699 18.9834 2.16699 13.0003C2.16699 7.01724 7.01724 2.16699 13.0003 2.16699C18.9834 2.16699 23.8337 7.01724 23.8337 13.0003C23.8337 18.9834 18.9834 23.8337 13.0003 23.8337Z" stroke="#0073E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500">{service.title}</h4>
            <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
