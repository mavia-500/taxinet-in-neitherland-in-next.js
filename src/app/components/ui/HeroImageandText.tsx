"use client";
import React from "react";
// import ContactButton from "@??/ui/ContactButton";


const  HeroImageandText = ({
  headerText,
  headerImage,
  imgaeRootFolder
  
}) => {
  // console.log(buttonClassName);
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center sm:h-[70vh] "
      style={{
        backgroundImage: `url("/aset/${imgaeRootFolder}/${headerImage}")`,
      }}
    >
      {/* Dark overlay */}

      <div className="  text-center text-white px-4">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-10 lg:w-[40vw]">{headerText}</h1>

        {/* Buttons */}
        
      </div>
    </section>
  );
};

export default HeroImageandText;
