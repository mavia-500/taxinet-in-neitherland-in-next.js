import React from "react";

import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import ContactButton from "../../ui/ContactButton";
import Faq_Data from "../../ui/Faq_Data";

const Faqs: React.FC = () => {
  return (
    <div className="bg-[#2a2a2a]">
      <div className="p-10 flex justify-center container mx-auto">
        <div className="bg-black border-2 rounded-lg w-[90%] p-10 flex flex-col items-center text-center">
          <h3 className="text-white font-bold text-4xl mb-10">
            Klaar Om Nu Uw Taxi Te Boeken?
          </h3>
          <div className="text-white flex gap-6">
            <ContactButton
              text="0858000365"
              classname="text-black font-semibold px-6 py-3 rounded-lg item items-center shadow-amber-800 bg-[#ff8900]"
              icon={<IoCallOutline className="mr-3" />}
            />

            <ContactButton
              classname="items-center bg-transparent border border-[#ff8900] hover:bg-yellow-500 hover:text-black text-white font-semibold px-6 py-3 rounded-lg"
              text=" DIRECT RESERVEREN"
              icon2={<IoIosArrowForward className="ml-3" />}
            />
          </div>
        </div>
      </div>

      {/* /////////////fqs */}

      <Faq_Data />
    </div>
  );
};

export default Faqs;
