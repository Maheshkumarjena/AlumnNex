import React from 'react'
import AlumniCard from './AlumniCard';
import alumniProfiles from '@app/StaticData';
import { useSelector } from 'react-redux';
const Alumni = ({ renderAll, numToShow }) => {
  const theme=useSelector((state)=>state.theme)
    // E
    const dataToRender = renderAll ? alumniProfiles : alumniProfiles.slice(0, numToShow);

    return (
      <div className=   {`w-[100vw] ${theme==="dark" ? "bg-gray-900" : "bg-white"} `}>
         <div className='max-w-[1500px] m-auto px-[2vw] md:px-4 ' >

        <h2 className=' font-extrabold font-mono text-3xl mt-[5vw] '> Alumni </h2>
        <div className="flex w-[full] flex-wrap justify-around md:justify-between   gap-1 ">
        {dataToRender.map((alum) => (
                <AlumniCard
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