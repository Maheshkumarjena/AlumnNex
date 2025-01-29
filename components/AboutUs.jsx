"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';import { useDispatch,useSelector } from "react-redux";
import { toggleTheme } from '@store/features/theme/themeSlice';

const AboutUs = () => {
  const theme = useSelector((state) => state.theme);

    const images = [
        '/assets/Images/large-pixabay-267885.jpg',
        '/assets/Images/pexels-pavel-danilyuk-7942437.jpg',
        '/assets/Images/large-pixabay-267885.jpg',
        '/assets/Images/pexels-pavel-danilyuk-7942437.jpg'
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 2000); // Auto-slide every 2 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, [currentIndex]);
    
      const showSlide = (index) => {
        setCurrentIndex(index);
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

  return (
    <div
  className={`flex max-w-[1500px] m-auto flex-col md:flex-row items-center justify-between gap-2 px-[2vw] md:px-4  mt-4 ${
    theme === "light" ? "bg-white text-gray-900" : " text-gray-100"
  }`}
>
  <div className="md:w-2/3 text-left">
    <h2
      className={`text-3xl font-bold mb-4 ${
        theme === "light" ? "text-gray-900" : "text-gray-100"
      }`}
    >
      About Us
    </h2>
    <p
      className={`text-lg mb-4 ${
        theme === "light" ? "text-gray-700" : "text-gray-300"
      }`}
    >
      The Technical Education Department, Government of Rajasthan, is committed to providing high-quality technical education to students across the state. Our mission is to empower students with the skills and knowledge necessary to succeed in an ever-evolving technological landscape.
    </p>
    <Link
      href='About'
      className={`mt-4 gap-3 flex flex-row w-[fit-content] align-center justify-center py-2 px-4 border rounded-full black_btn ${
        theme === "light"
          ? "border-black text-black hover:bg-black hover:text-white"
          : "border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
      } transition`}
    >
      <p>More</p>
      <p>
        <FontAwesomeIcon icon={faArrowRight} />
      </p>
    </Link>
  </div>
  <div className="relative w-[100%] h-[60%] sm:h-[70%] md:w-64 md:h-80 overflow-hidden rounded-xl">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {images.map((image, index) => (
        <div key={index} className="min-w-full">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>

    {/* Navigation Dots */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          className={`w-2.5 h-2.5 ${
            index === currentIndex ? "bg-white" : "bg-gray-400"
          } rounded-full`}
          onClick={() => showSlide(index)}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default AboutUs;
