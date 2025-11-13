import React from "react";

import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import ContactButton from "../../ui/ContactButton";
import Faq_Data from "../../ui/Faq_Data";

const Faqs: React.FC = () => {
  return (
    <div className="relative">
      <div className="px-4 sm:px-6 lg:px-10 py-10 flex justify-center container mx-auto">
        <div className="w-full relative bookBackground bg-cover bg-center rounded-lg">
          <div className="rounded-lg p-6 sm:p-10 flex flex-col justify-center liningBackground bg-opacity-70">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start relative">
              <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 lg:mb-0 text-center lg:text-left">
                Klaar Om Nu Uw Taxi Te Boeken?
              </h3>

              <img
                src="/aset/images/isolated_realistic_shiny_metalic_orange_luxury_city_taxi_cab_car_from_front_view copy 1.png"
                className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:w-[25vw] object-cover mt-6 lg:mt-0 lg:absolute lg:right-5"
                alt="Taxi"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center lg:justify-start">
              <ContactButton
                text="Call me"
                classname="w-full sm:w-1/2 lg:w-1/6 justify-center text-black font-semibold px-6 py-3 rounded-lg flex items-center shadow-amber-800 bg-[#ff8900]"
                icon={<IoCallOutline className="mr-3" />}
              />

              <ContactButton
                classname="w-full sm:w-1/2 lg:w-auto flex items-center justify-center bg-transparent border border-[#ff8900] hover:bg-yellow-500 hover:text-black text-white font-semibold px-6 py-3 rounded-lg"
                text="DIRECT RESERVEREN"
                icon2={<IoIosArrowForward className="ml-3" />}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <Faq_Data />
    </div>
  );
};

export default Faqs;
