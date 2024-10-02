import { useEffect, useState } from "react";
import Title from "./Title";
import axios from "axios";

const OurClient = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        axios.get('https://api.sascorporationbd.com/api/our_clients/')
            .then(response => {
                setClients(response.data);
            })
            .catch(error => {
                console.error('Error fetching clients:', error);
            });
    }, []);

    return (
        <div className="bg-[#F3F4F6] pb-20 mt-10">
            <div className="w-full md:w-6/12 mx-auto">
            <Title title={"Our Clients"} />
            <div className="w-full text-5xl py-8 inline-flex  overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
                <ul className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                    {
                        clients.map(logo => <img data-aos="zoom-out" key={logo.id} className="w-32 ml-10 mix-blend-multiply" src={logo.image} />)
                    }
                </ul>
                <ul
                    className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
                    aria-hidden="true"
                >
                    {
                        clients.map(logo => <img data-aos="zoom-out" key={logo.id} className="w-32 ml-10 mix-blend-multiply" src={logo.image} />)
                    }
                </ul>
            </div>
        </div>
        </div>
    )
}

export default OurClient;