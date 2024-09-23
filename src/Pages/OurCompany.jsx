import { useEffect, useState } from "react";
import Title from "../Components/Title";

const OurCompany = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/sas_gallery/')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error))
  }, [])

  // const images = [
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  //     alt: "",
  //   },
  //   {
  //     src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  //     alt: "",
  //   },
  // ];

  return (
    <div className="bg-[#F3F4F6] pb-20">
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
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 w-10/12 mx-auto">
        {images.map((image, index) => (
          <div key={index}>
            <img
              class="h-auto max-w-full rounded-lg"
              src={image.picture}
              alt={image.picture}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCompany;
