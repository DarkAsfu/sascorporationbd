import Title from "../Components/Title";

const OurCompany = () => {
  const images = [
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      alt: "",
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
      alt: "",
    },
  ];

  return (
    <div>
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
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {images.map((image, index) => (
          <div key={index}>
            <img
              class="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCompany;
