import React from "react";
import Nav from "../../components/ui/Nav";
import Hero2Buttons from "../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import Section2buttons from "../../components/ui/Section2buttons";
import BookYourTaxiBtn from "../../components/ui/BookYourTaxiBtn";
import PriceTableActies from "../../components/layout/taxitarievendenhaag/PriceTableActies";
import ContactButton from "../../components/ui/ContactButton";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import Footer from "../../components/layout/home/Footer";

const page = () => {
  return (
    <div className="bg-black">
      <div className="bg-black">
        <Nav />
      </div>
      <Hero2Buttons
        headerText="Acties"
        headerImage="81548c5dbd54d00aafd4a70b96649546145522f9.jpg"
        imgaeRootFolder="taxitarievendenhaag"
      />

      <ServicesWithLogos />
      <Section2buttons />

      <div className="bg-black">
        <PriceTableActies />
      </div>
      <div className="bg-black text-white flex items-center justify-center">
        <p>voor meer infomatie of gebruik maken van onze actie en taxi diensten bel ons of maak direct reservering !</p>
      </div>
      <div className="bg-black block md:flex items-center justify-center space-x-6  mt-10 container mx-auto ">
    <ContactButton text="0858000365" classname="bg-amber-500 px-5 py-3 rounded-xl text-white" icon={<MdOutlineWifiCalling3/>}/>
    <ContactButton text="Book Now" classname="bg-white text-black px-6 py-3 rounded-xl"/>
      </div>

      <BookYourTaxiBtn />
      <Footer/>
    </div>
  );
};

export default page;
