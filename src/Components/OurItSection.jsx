import { useEffect, useState } from "react";
import Title from "./Title";

const OurItSection = () => {
  const [ourIt, setOurIt] = useState([]);
  useEffect(() => {
    fetch('https://api.sascorporationbd.com/api/it_criticism/')
      .then(response => response.json())
      .then(data => setOurIt(data))
      .catch(error => console.error('Error fetching data:', error))
  }, []);
  const lastItem = ourIt.length;
  return (
    <div>
      <div className="bg-[#FFF]">
        <Title title="Our It Section" color="#B60000" />
        <div className="md:flex items-center gap-8 w-9/12 mx-auto py-10 rounded-xl space-y-4">
          <div className="order-1 md:order-2">
            <img
              className="object-cover rounded-xl"
              src={ourIt[lastItem-1]?.image}
              alt="it"
            />
          </div>
          <div className="text-base md:text-base">
            <div dangerouslySetInnerHTML={{ __html: ourIt[lastItem-1]?.criticism }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurItSection;
