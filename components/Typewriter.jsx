"use client"
import Image from "next/image";


import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const words = [
    "Hello, Learners !",
    "Welcome to AlumNexus!",
    "Meet your Ideal Alumni and Learn from them .",
  ];

  const [currentWord, setCurrentWord] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      let word = words[i];
      if (isDeleting) {
        setCurrentWord(word.substring(0, j - 1));
        setJ(j - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI((i + 1) % words.length); // Move to the next word
        }
      } else {
        setCurrentWord(word.substring(0, j + 1));
        setJ(j + 1);
        if (j === word.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [i, j, isDeleting, words]); // Re-run the effect when these dependencies change

  return (
<>

<div className="  overflow-x-hidden relative w-[100vw] h-auto">
      <Image  className="  hidden lg:flex blur-[0px]"
 src="/assets/Images/large-pixabay-267885.jpg"        alt="My Image"
        width={100}  // Define the width you want
        height={80} // Define the height you want
        layout="responsive" // Automatically adjust the image size
        objectFit="cover" // Maintain aspect ratio and cover the container
      />
      
      <Image className="blur-[0px] flex lg:hidden "
 src="/assets/Images/pexels-pixabay-267885.jpg"        alt="My Image"
        width={100}  // Define the width you want
        height={80} // Define the height you want
        layout="responsive" // Automatically adjust the image size
        objectFit="cover" // Maintain aspect ratio and cover the container
      />
      
      <div className="  absolute inset-0  top-[-10vw]  flex justify-center flex-col items-center">
        <h1  id="typewriter" className="  px-2 py-2 text-2xl font-mono md:text-4xl  font-bold text-gray-200 border-0">
          {currentWord}
        </h1>
        <div className="flex   flex-row gap-6">
      <button  className=" text-xs lg:text-xl outline_btn px-5 py-2" >
        learn more
      </button>
      <button  className="black_btn rounded-[40px] px-5 py-2" >
        Join the network 
      </button>
        </div>
      </div>
    </div>
    
</>
  );
};

export default Typewriter;
