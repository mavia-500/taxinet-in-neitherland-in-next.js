"use client";
import React from "react";
// import ContactButton from "@??/ui/ContactButton";
import ContactButton from "../../ui/ContactButton";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroSide2Btn = ({
  headerText,
  headerImage,
  imgaeRootFolder
  
}) => {
  // console.log(buttonClassName);
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center  sm:h-[70vh]  "
      style={{
        backgroundImage: `url("/aset/${imgaeRootFolder}/${headerImage}")`,
      }}
    >
      {/* Dark overlay */}

      <div className="  text-center text-white px-4 translate-y-1/2 translate-x-1/5">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-10">{headerText}</h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Call button */}

     
            <ContactButton
              text="0858000365"
              classname="text-white bg-amber-500 rounded-lg px-6 py-3"
              icon={<FaPhoneAlt />}
            />
       

          {/* Acties button */}

          
            <ContactButton
              text="Acties Bekijken"
              classname="hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition bg-black"
            />
          

          
          
        </div>
      </div>
    </section>
  );
};

export default HeroSide2Btn;
