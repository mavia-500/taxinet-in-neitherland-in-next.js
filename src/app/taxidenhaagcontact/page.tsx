import React from "react";
import ContactButton from "../components/ui/ContactButton";
import { LuPhoneCall } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import Textwith2Btns from "../components/layout/taxidenhaggcontact/Textwith2Btns";

import Nav from "../components/ui/Nav";
import Footer from "../components/layout/home/Footer";
import FormandSideText from "../components/layout/taxidenhaggcontact/FormandSideText";
import Map from "../components/layout/taxidenhaggcontact/Map";

const page = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <Nav />

        <Textwith2Btns />

        {/* <div className="min-h-screen bg-black text-white px-4 py-12 container mx-auto"> */}

        <div className="mt-10">
          <FormandSideText />
        </div>

        {/* MAP SECTION */}

        <div className="mt-20 mb-20">
          <Map />
        </div>

        {/* </div> */}
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
