import React from 'react'
import AlumniCard from './AlumniCard';
import alumniProfiles from '@app/StaticData';
import { useSelector } from 'react-redux';
const Alumni = ({ renderAll, numToShow }) => {
  const theme=useSelector((state)=>state.theme)
    // E
    const dataToRender = renderAll ? alumniProfiles : alumniProfiles.slice(0, numToShow);

    
    const data = [
      { name: 'Alice Johnson', type: 'Alumni', title: 'Founder', company: 'EcoInnovate', image: 'https://example.com/images/alice.jpg' },
      { name: 'Alice Johnson', type: 'Alumni', title: 'Founder', company: 'EcoInnovate', image: 'https://example.com/images/alice.jpg' },
      { name: 'Bob Williams', type: 'Alumni', title: 'Head of AI', company: 'TechGenius', image: 'https://example.com/images/bob.jpg' },
      { name: 'Carol Lee', type: 'Alumni', title: 'Marketing Director', company: 'CreativeAds', image: 'https://example.com/images/carol.jpg' },
      { name: 'Bob Williams', type: 'Alumni', title: 'Head of AI', company: 'TechGenius', image: 'https://example.com/images/bob.jpg' },

      { name: 'Dave Brown', type: 'Alumni', title: 'Data Scientist', company: 'DataMinds', image: 'https://example.com/images/dave.jpg' },
      { name: 'Eve Martinez', type: 'Alumni', title: 'Cybersecurity Expert', company: 'SecureTech', image: 'https://example.com/images/eve.jpg' },
      { name: 'Alice Johnson', type: 'Alumni', title: 'Founder', company: 'EcoInnovate', image: 'https://example.com/images/alice.jpg' },
      { name: 'Frank Thompson', type: 'Alumni', title: 'UX Designer', company: 'DesignMasters', image: 'https://example.com/images/frank.jpg' },
      { name: 'Carol Lee', type: 'Alumni', title: 'Marketing Director', company: 'CreativeAds', image: 'https://example.com/images/carol.jpg' },
      // more alumni objects...
    ];
    
    return (
      <div className=   {`w-[100vw] ${theme==="dark" ? "bg-gray-900" : "bg-white"} `}>
         <div className='max-w-[1500px] m-auto px-[2vw] md:px-4 ' >

        <h2 className=' font-extrabold font-mono text-3xl mt-[5vw] '> Alumni </h2>
        <div className="flex w-[full] flex-wrap justify-around md:justify-between   gap-1 ">
        {data.map((alum) => (
                <AlumniCard
                    allAlumni={data}
                    name={alum.name}
                    title={alum.title}
                    company={alum.company}
                    image={alum.image}
                    id={alum.id}
                />
            ))}
      </div>
      </div>
      </div>
    );
  };
export default Alumni