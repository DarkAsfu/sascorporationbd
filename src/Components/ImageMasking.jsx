import { MediaModal } from "../others/image-modal";

const ImageMasking = () => {
  return (
    <div className="relative h-full">
      <div className="h-[40vh] md:h-[80vh]">
        {/* <MediaModal
          imgSrc={
            'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/two_cosolk.jpg'
          }
        /> */}
        <MediaModal
          
          videoSrc={
            'https://videos.pexels.com/video-files/8061743/8061743-uhd_1440_2560_25fps.mp4'
          }
        />
      </div>
    </div>
  );
};

export default ImageMasking;
