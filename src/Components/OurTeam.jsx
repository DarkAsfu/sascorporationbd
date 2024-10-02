import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype, FaGithub } from 'react-icons/fa'
import Title from './Title';
const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Md. Ashraful Islam",
            role: "Frontend Developer",
            imgSrc: "https://i.ibb.co.com/nLwZDWN/Ashraful.jpg", // Replace with actual image URL
            bio: "Passionate frontend developer with expertise in React.js, Next.js, and Tailwind CSS. Building seamless user experiences is my forte.",
            socialLinks: {
                linkedin: "https://linkedin.com/in/ashrafulislamm",
                github: "https://github.com/darkasfu",
                twitter: "https://twitter.com/ashraful_dev",
            },
        },
        {
            id: 2,
            name: "Sarah Ahmed",
            role: "UI/UX Designer",
            imgSrc: "https://i.ibb.co.com/PCv1bZB/pro.jpg", // Replace with actual image URL
            bio: "Creative UI/UX designer with a knack for crafting user-centric designs. I love turning ideas into intuitive interfaces.",
            socialLinks: {
                linkedin: "https://linkedin.com/in/sarahahmed",
                dribbble: "https://dribbble.com/sarahahmed",
                twitter: "https://twitter.com/sarahux",
            },
        },
        {
            id: 3,
            name: "Nirisha K",
            role: "Full Stack Developer",
            imgSrc: "https://i.ibb.co.com/PCv1bZB/pro.jpg", // Replace with actual image URL
            bio: "Skilled in both frontend and backend development. Always keen on solving complex problems and optimizing performance.",
            socialLinks: {
                linkedin: "https://linkedin.com/in/nirishak",
                github: "https://github.com/nirishak",
                twitter: "https://twitter.com/nirishak",
            },
        },
        {
            id: 4,
            name: "John Doe",
            role: "Backend Developer",
            imgSrc: "https://i.ibb.co.com/PCv1bZB/pro.jpg", // Replace with actual image URL
            bio: "Backend expert specializing in Node.js and Python, ensuring robust and scalable server-side solutions.",
            socialLinks: {
                linkedin: "https://linkedin.com/in/johndoe",
                github: "https://github.com/johndoe",
                twitter: "https://twitter.com/johndoe_dev",
            },
        },
    ]
    return (
        <div>
            <Title title="Our Creative Team"/>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-10/12 mx-auto'>
                {
                    teamMembers.map(member => <div className='py-10 px-2 rounded-md' key={member.id}>
                        <img className='rounded-full w-full h-[290px] object-cover grayscale hover:grayscale-0' src={member.imgSrc} alt="" />
                        <h2 className='text-center mt-4 font-bold text-[#444444]'>{member.name}</h2>
                        <p className='text-center'>{member.role}</p>
                        <div className='text-[#4c4c4c] text-center flex gap-2 justify-center mt-3'>
                            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn></FaLinkedinIn></a>
                            <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                            <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF></FaFacebookF></a>
                            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                            <a href={member.socialLinks.skype} target="_blank" rel="noopener noreferrer"><FaSkype/></a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default OurTeam;