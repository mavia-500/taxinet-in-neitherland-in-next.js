"use client";
import React from "react";
import ContactButton from "../../ui/ContactButton";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const TaxiServiceHero = ({
  headerText,
  headerImage,
  imgaeRootFolder
  
}) => {
 console.log("root",imgaeRootFolder)

  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center sm:h-[70vh]"
      style={{
        backgroundImage: `url("/aset/${imgaeRootFolder}\/${headerImage}")`,
      }}
    >
      {/* Dark overlay */}

      <div className="  text-center text-white px-4">
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
          

          {/* Direct Reserveren button */}

          
            <ContactButton
              text="DIRECT RESERVEREN"
              classname=" bg-white text-black border hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition text-sm"
              icon2={<MdKeyboardArrowRight />}
            />
          
        </div>
      </div>
    </section>
  );
};

export default TaxiServiceHero;
