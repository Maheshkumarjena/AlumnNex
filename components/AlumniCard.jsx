import React from 'react';
import Link from 'next/link';

import { useDispatch,useSelector } from "react-redux";
import { toggleTheme } from '@store/features/theme/themeSlice';

const AlumniCard = ({image ,name , title, company,href ,id}) => {
    const theme = useSelector((state) => state.theme);

  return (

    <div
    className={`w-[40vw] xsm:w-[30vw] md:w-1/5 lg:w-1/5 min-w-[120px] md:min-w-[150px] ${
      theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-gray-100"
    } rounded-lg shadow-lg text-center mt-4 max-h-[250px] md:max-h-[280px] lg:max-h-[450px]`}
  >
    <Link href={`Alumni/alumniProfile/${id}`} >
      <img
        src={image}
        alt={name}
        className={`w-full max-h-[150px] md:max-h-[170px] lg:max-h-[270px] rounded-t-lg object-cover ${
          theme === "light" ? "bg-white" : "bg-gray-700"
        }`}
      />
      <div className={`p-4 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
        <p className={`font-bold text-sm md:text-md lg:text-lg ${
          theme === "light" ? "text-gray-900" : "text-gray-100"
        }`}>
          {name}
        </p>
        <p className={`text-[8px] md:text-sm ${
          theme === "light" ? "text-gray-600" : "text-gray-400"
        }`}>
          {title} at {company}
        </p>
      </div>
    </Link>
  </div>
  
 )
}

export default AlumniCard