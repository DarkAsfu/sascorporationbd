import { Button } from "../Ui/moving-border";
import ImageMasking from "./ImageMasking";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <>
      {/* <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div> */}
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
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
              {/* <Button className="w-fit flex items-center gap-2 bg-[#0073E6] text-white">
                <span>Get Started</span>
                <FaArrowRight className="w-4 h-4" />
              </Button> */}
              <Button
                borderRadius="1.75rem"
                className="bg-white text-[#0073E6]  border-neutral-200 font-bold "
              >
                <span>Get Started</span>
                <FaArrowRight className="ml-6 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
