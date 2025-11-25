import React from "react";
import Hero2Buttons from "../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import AirportserviceForm from "../../components/layout/taxibestellen/AirportserviceForm";

const page = () => {
  return (
    <div>
      <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"7429f96187e24caa41392ec303da5d82d5e859e5.png"}
      />
      <ServicesWithLogos />
      <AirportserviceForm/>
    </div>
  );
};

export default page;
