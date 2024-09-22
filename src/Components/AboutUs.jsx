import Title from "./Title";
import { Button } from "@nextui-org/react";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#FFF]">
        <Title title="About Us" color="#B60000" />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-10/12 mx-auto py-10 rounded-xl">
          <div className="">
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://i.ibb.co.com/qWnVrZb/aboutus.jpg"
              alt="about us"
            />
          </div>
          <div className="text-base md:text-base">
            <p>
              <span className="text-[#0073E6] font-semibold">SAS Corporation</span> is a multifaceted company that specializes in a
              wide range of business sectors. With a diverse portfolio of
              services, SAS Corporation is committed to meeting the needs of
              their customers in a variety of industries. Their areas of
              expertise include feed ingredient supply, ICT, agriculture
              (including fisheries, poultry, and animal fattening),
              macrofinancing, garments and many more.
            </p>
            <p className="mt-4">
              SAS Corporation takes pride in providing high-quality products and
              services that are tailored to meet the unique needs of each of
              their clients. With a strong focus on innovation and customer
              satisfaction, SAS Corporation is dedicated to delivering
              exceptional results and building long-lasting partnerships with
              their clients.
            </p>
            <Button className="px-10 py-6 border-2 border-[#0073e634] text-[#0073E6] bg-[#0073e60f] mt-10 font-semibold">Get in touch</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
