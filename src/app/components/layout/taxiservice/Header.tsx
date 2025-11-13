"use client";
import React from "react";
import ContactButton from "../../ui/ContactButton";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header: React.FC = () => {
  const headerImage = "Rectangle 47.png";
  const headrText = "Taxi den haag";
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center sm:h-[70vh]"
      style={{
        backgroundImage: "url('/aset/taxiServiceImages/Rectangle 47.png')",
      }}
    >
      {/* Dark overlay */}

      <div className="  text-center text-white px-4">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-10">TAXI DEN HAAG</h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Call button */}

          <ContactButton
            text="0858000365"
            classname="text-white bg-amber-500 rounded-lg"
            icon={<FaPhoneAlt />}
          />

          {/* Acties button */}
          <ContactButton
            text="Acties Bekijken"
            classname="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition"
          />

          {/* Direct Reserveren button */}

          <ContactButton
            text="Direct Reserveren"
            classname=" bg-white text-black border hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition text-sm"
            icon2={<MdKeyboardArrowRight />}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
