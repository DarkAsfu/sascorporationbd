import { Button } from "@nextui-org/react";
import ImageMasking from "./ImageMasking";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <section className="py-4" style={{ background: "linear-gradient(to right, #F3F8FE, #F3F8FE)" }}>
      <div className="md:flex justify-center items-center">
        <div className="md:w-[40vw] mx-4 md:mx-0 my-4 md:my-0 order-2 md:order-1">
          <ImageMasking />
        </div>
        <div
          className="md:w-[60vw] md:h-[80vh] py-10"
          
        >
          <div className="mx-4 md:w-6/12 md:mx-auto flex flex-col justify-center h-full text-[#333333] space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Empower every worker at the edge of your business
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <Button className="w-fit flex items-center gap-2 bg-[#0073E6] text-white">
              <span>Get Started</span>
              <FaArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
