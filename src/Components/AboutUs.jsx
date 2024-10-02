import { useEffect, useState } from "react";
import Title from "./Title";
import { Button } from "@nextui-org/react";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);
  useEffect(() => {
    fetch('https://api.sascorporationbd.com/api/about_sas/')
      .then(response => response.json())
      .then(data => setAboutUs(data))
      .catch(error => console.error('Error fetching about us:', error))
  }, []);
  const lastItem = aboutUs.length;
  return (
    <div>
      <div className="bg-[#FFF]">
        <Title title="About Us" color="#B60000" />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-10/12 mx-auto py-10 rounded-xl">
          <div className="">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={aboutUs[lastItem-1]?.image}
              alt="about us"
            />
          </div>
          <div className="text-base md:text-base">
            <div dangerouslySetInnerHTML={{ __html: aboutUs[lastItem-1]?.description }}></div>
            
            <Button className="px-10 py-6 border-2 border-[#0073e634] text-[#0073E6] bg-[#0073e60f] mt-10 font-semibold">Get in touch</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
