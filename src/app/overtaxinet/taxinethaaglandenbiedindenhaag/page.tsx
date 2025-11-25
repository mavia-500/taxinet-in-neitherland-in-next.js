import React from "react";
import HeroImageandText from "../../components/ui/HeroImageandText";
import ContactButton from "../../components/ui/ContactButton";
import { FaPhoneAlt } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <HeroImageandText
        headerText={"Taxinet Haaglanden Bied in Den Haag"}
        imgaeRootFolder={"overtaxinet"}
        headerImage={"d550256b6df1ed846810ef7ba99dfc26a7b520ad.jpg"}
      />

      <div className="container mx-auto text-white p-10">
        <div>
          <p className="text-lg md:text-xl my-6 lg:w-[50vw] ">
            Taxi Den haag Bied 10 % Korting aan op de dagen wanneer Nederland
            gaat wedstijd spelen.
          </p>
          <p>Bel en reserveer snel !!</p>
        </div>
        <ContactButton
          text="0858000365"
          icon={<FaPhoneAlt />}
          classname="bg-amber-500 mt-10 rounded-xl px-6 py-5"
        />
      </div>
    </div>
  );
};

export default page;
