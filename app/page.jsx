"use client"

import React from 'react'
import Typewriter from '@components/Typewriter'
import AboutUs from "@components/AboutUs";
import alumniProfiles from './StaticData';
import Alumni from '@components/Alumni';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
const Home = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [noOfImage,setNoOfImage]=useState(4)
  const theme=useSelector((state)=>state.theme);
  useEffect(() => {
    // Simulate an API call
    const setSomethingForScreenWidth = () => {
      const screenWidth = window.innerWidth;
      
      if (screenWidth >= 450 && screenWidth <= 768) {
        setNoOfImage(6);
      } else {
        setNoOfImage(4);
      }
    };
    
    

    const fetchData = async () => {
      // const data = [
      //   { name: 'John Doe', type: 'Alumni' , title: 'CEO', company: 'TechCorp', image: '/assets/Images/large-pixabay-267885.jpg' },
      //   { name: 'Jane Smith', type: 'Alumni' , title: 'CTO', company: 'Innovatech', image: '/assets/Images/pexels-pavel-danilyuk-7942437.jpg' },
      //   { name: 'John Doe', type: 'Alumni' , title: 'CEO', company: 'TechCorp', image: '/assets/Images/large-pixabay-267885.jpg' },
      //   { name: 'Jane Smith', type: 'Alumni' , title: 'CTO', company: 'Innovatech', image: '/assets/Images/pexels-pavel-danilyuk-7942437.jpg' },
      //   { name: 'John Doe', type: 'Alumni' , title: 'CEO',  company: 'TechCorp', image: '/assets/Images/large-pixabay-267885.jpg' },
      //   { name: 'Jane Smith', type: 'Alumni' , title: 'CTO', company: 'Innovatech', image: '/assets/Images/pexels-pavel-danilyuk-7942437.jpg' },
      //   // more alumni objects...
      // ];
      setAlumniData(alumniProfiles);
    };

    setSomethingForScreenWidth();
    
    // Optionally, you can add an event listener to handle screen resizing
    window.addEventListener('resize', setSomethingForScreenWidth);
    fetchData();
  }, []);

  return (
    <section className={`hide- w-full z-9000  flex-center flex-col ${theme==='dark'? "bg-gray-900" :"bg-white"} `}>
        <Typewriter/>
        <AboutUs/>
        <Alumni renderAll={false} numToShow={noOfImage} />
    </section>
)

}

export default Home