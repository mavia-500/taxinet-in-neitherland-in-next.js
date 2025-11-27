import React from "react";
import Hero2Buttons from "../../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../../components/layout/taxiservice/ServicesWithLogos";
import AirportserviceForm from "../../../components/layout/taxibestellen/AirportserviceForm";
import TextwithBg from "../../../components/layout/taxibestellen/TextwithBg";
import NavigationBtns from "../../../components/layout/taxibestellen/NavigationBtns";

const page = () => {
  return (
    <div>
      <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"de675e83c8c1569e136fccaad1746108808becd7.jpg"}
      />
      <ServicesWithLogos />
      
      <TextwithBg/>
      <NavigationBtns/>
      <AirportserviceForm />
      <div className="min-h-screen bg-black"></div>
    </div>
  );
};

export default page;
