import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

import ContactButton from "./ui/ContactButton";
import BerkenForm from "./ui/BerkenForm";

import ImageLogs from "./ui/ImageLogs";

const Main = () => {
  return (
    <div className="bg-black  text-white ">
      <div className="bg-black text-white">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-6 sm:p-10 lg:p-16 xl:p-20 items-center">
          {/* LEFT SECTION */}
          <div>
            <h3 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Welkom bij
            </h3>

            <h3 className="text-[#ff8900] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Taxinet
            </h3>
            <h3 className="text-[#ff8900] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Haaglanden
            </h3>

            <p className="mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base md:text-lg max-w-[600px]">
              Als u op zoek bent naar een goedkope en betrouwbare taxi in Den
              Haag en omstreken, dan bent u bij Taxinet Haaglanden aan het
              juiste adres. Wij bieden zowel particulier als zakelijk
              taxivervoer.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
              <ContactButton
                text="0858000365"
                icon={<IoCallOutline className="w-5 h-5 mr-1" />}
                classname="bg-[#ff8900] text-white"
              />

              <ContactButton
                text="Direct Reserveren"
                classname="bg-white text-black font-bold"
              />

              <ContactButton
                text="Acties Bekijken"
                icon={<IoEyeSharp className="w-5 h-5 mr-1" />}
                classname="bg-black text-white border-2 border-[#874b07] rounded-2xl"
              />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full">
            <div className="text-center mb-4">
              <h2 className="font-bold text-xl sm:text-2xl">
                Bereken uw prijs
              </h2>
              <p className="text-xs sm:text-sm font-normal">
                Reserveer minimaal 3 uur van tevoren
              </p>
            </div>

            <div className="">
              <BerkenForm />
            </div>
          </div>
        </div>
      </div>

      <ImageLogs />
    </div>
  );
};

export default Main;
