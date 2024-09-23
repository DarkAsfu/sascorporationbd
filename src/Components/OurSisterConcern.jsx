import Title from "./Title";
import { Button } from "@nextui-org/react";

const OurSisterConcern = () => {
    const sisterConcerns = [
        {
            id: 1,
            title: "Trading on Feed Ingredients",
            description: "Import and Supply Food Ingredients like Wheat, Maize, Soybean, Rice Husk, Fish Meal, Fish Oil, Poultrymeal, Soybeanmeal, DDGS and more",
            url: "",
            imageUrl: "https://images.unsplash.com/photo-1596883072150-f5d25584e064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8NXx8ZmVlZHxlbnwwfHx8fDE2NDI2MTE3ODg&ixlib=rb-1.2.1&q=80&w=1080&utm_source=endurance-innovation&utm_medium=referral"
        },
        {
            id: 2,
            title: "Integrated Farming",
            description: "Integrated farming is a new way of raising chickens, fish, goats, ducks and cows in one place. Bangladesh ranks fourth in the world in freshwater fish production, SAS Corporation is also a proud partner in this success.",
            url: "",
            imageUrl: "https://storage.googleapis.com/production-ipage-v1-0-9/249/1230249/NvxLnCy6/5681c839d7ec4f05add92e5bcb5814b3"
        },
        {
            id: 3,
            title: "Feed Manufacturing",
            description: "Floating fish feed and poultry feed manufacturing industries.",
            url: "",
            imageUrl: "https://storage.googleapis.com/production-ipage-v1-0-9/249/1230249/NvxLnCy6/2d0075a16fbf4f138e5391b636073cdc"
        },
        {
            id: 4,
            title: "Hotels & Resorts",
            description: "Turagh Resort & Travel Limited. We do online booking for hotels and resorts nationally and internationally. Apart from this we have our own eco type resorts on the banks of river Turag in Mouchak-Phulbaria Road, Chabagan, Kaliakair, Gazipur.",
            url: "",
            imageUrl: "https://images.unsplash.com/photo-1614505287952-b44d7ddc00dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTg2fHxyZXNvcnR8ZW58MHx8fHwxNjQyNzA2Nzk2&ixlib=rb-1.2.1&q=80&w=1080"
        },
        {
            id: 5,
            title: "Fuel Supply",
            description: "We supply all types of fuel and lubricants like petrol, octane, diesel and lubricants.",
            url: "",
            imageUrl: "https://images.unsplash.com/photo-1589631203395-32debde167a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8NTZ8fGZ1ZWx8ZW58MHx8fHwxNjQyNzA0NzE2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=endurance-innovation&utm_medium=referral"
        },
        {
            id: 6,
            title: "Consulting & Micro Financing Services",
            description: "We advise companies that have fallen behind to get back on their feet and arrange funding as needed.",
            url: "",
            imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8MTR8fGNvbnN1bHRpbmd8ZW58MHx8fHwxNjQyNzA2MjAw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=endurance-innovation&utm_medium=referral"
        },
        {
            id: 7,
            title: "E-Commerce on Vehicle Spare Parts",
            description: "All types of car engines, engine parts and car body parts are available online. Apart from this any problem of the vehicle is completely solved by consulting highly experienced engineers.",
            url: "",
            imageUrl: "https://images.unsplash.com/photo-1598858068804-7c04c9fc4a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8NzV8fG1vdG9yJTIwcGFydHN8ZW58MHx8fHwxNjQyNzAwNDY3&ixlib=rb-1.2.1&q=80&w=1080"
        },
        {
            id: 8,
            title: "Students and Teachers Portal",
            description: "Knowledge Bank of Academic Studies and Research, School and University Admissions and more.",
            url: "",
            imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw1NTEzfDB8MXxzZWFyY2h8OXx8Q29uc3VsdGluZyUyMHNlcnZpY2VzfGVufDB8fHx8MTY0MjcwMDM5Mw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=endurance-innovation&utm_medium=referral"
        }
    ]
    return (
        <div>
            <Title title="Our Sister Concern" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-10/12 mx-auto py-10">
                {sisterConcerns.map((concern, index) => (
                    <div key={concern.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-lg flex flex-col h-full transform transition-transform hover:scale-105 hover:shadow-2xl">
                        <img src={concern.imageUrl} alt={concern.title} className="w-full h-48 object-cover" />
                        <div className="p-4 flex flex-col flex-grow bg-[#F3F8FE]">
                            <h3 className="text-xl font-semibold mb-2 text-blue-900">{concern.title}</h3>
                            <p className="text-gray-700 mb-4 flex-grow">{concern.description}</p>
                            <Button className={`mt-${index % 2 === 0 ? 'auto' : '0'} bg-[#0073E6] text-white max-w-max`} href={concern.url}>Learn More</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurSisterConcern;
