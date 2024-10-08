import { FaFacebookF, FaTwitter, FaLinkedinIn, FaSkype, FaGithub } from 'react-icons/fa'
import Title from './Title';
import { useEffect, useState } from 'react';
const OurTeam = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        fetch('https://api.sascorporationbd.com/api/our_team/')
            .then(response => response.json())
            .then(data => setTeamMembers(data))
            .catch(error => console.error('Error fetching team members:', error))
    }, [])
    console.log(teamMembers);
    return (
        <div>
            <Title title="Our Creative Team"/>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-10/12 mx-auto'>
                {
                    teamMembers.map(member => <div className='py-10 px-2 rounded-md' key={member.id}>
                        <img className='rounded-full w-full h-[290px] object-cover grayscale hover:grayscale-0' src={member.picture} alt="" />
                        <h2 className='text-center mt-4 font-bold text-[#444444]'>{member.name}</h2>
                        <p className='text-center'>{member.designation}</p>
                        <div className='text-[#4c4c4c] text-center flex gap-2 justify-center mt-3'>
                            <a href={member?.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn></FaLinkedinIn></a>
                            <a href={member?.github} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                            <a href={member?.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF></FaFacebookF></a>
                            <a href={member?.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                            <a href={member?.skype} target="_blank" rel="noopener noreferrer"><FaSkype/></a>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default OurTeam;