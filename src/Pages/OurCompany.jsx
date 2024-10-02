import { useEffect, useState } from "react"
import Title from "../Components/Title"
import SliderModal from "../others/SliderModal"
import OurTeam from "../Components/OurTeam"


const OurCompany = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch('https://api.sascorporationbd.com/api/sas_gallery/')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error))
  }, [])
  return (
    <>
      <div className="bg-[#F3F4F6]">
        <div className="pb-20">
          <div className="relative">
            <img
              src="https://i.ibb.co.com/rMzX6pc/contact.jpg"
              alt="Banner Image"
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center text-white">
              <h1 className="text-5xl font-bold">Our Company</h1>
            </div>
          </div>
          <Title title="Our Gallery" />
          <div className="columns-2 md:columns-4 w-10/12 mx-auto mt-6">
            {images.map((item, index) => (
              <SliderModal key={index} item={item} itemArr={images} uniqueId={`id-${index}`} />
            ))}
          </div>
        </div>
      </div>
      <OurTeam/>
    </>
  )
}

export default OurCompany;
