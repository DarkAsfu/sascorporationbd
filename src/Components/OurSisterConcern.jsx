import { useEffect, useState } from "react";
import Title from "./Title";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const OurSisterConcern = () => {
    const [sisterConcerns, setSisterConcerns] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/business_partners/')
            .then(response => response.json())
            .then(data => setSisterConcerns(data))
            .catch(error => console.error('Error fetching sister concerns:', error))
    }, [])

    return (
        <div>
            <Title title="Our Sister Concern" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-10/12 mx-auto py-10">
                {sisterConcerns.map((concern, index) => (
                    <div key={concern.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg flex flex-col h-full transform transition-transform hover:scale-105 hover:shadow-2xl">
                        <img src={concern.image} alt={concern.title} className="w-full h-48 object-cover" />
                        <div className="p-4 flex flex-col flex-grow bg-[#F3F8FE]">
                            <h3 className="text-xl font-semibold mb-2 text-blue-900">{concern.name}</h3>
                            <p className="text-gray-700 mb-4 flex-grow">{concern.description}</p>
                            <Button className={`mt-${index % 2 === 0 ? 'auto' : '0'} bg-[#0073E6] text-white max-w-max`} as={Link} to={concern.website_link} target="_blank">Learn More</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurSisterConcern;
