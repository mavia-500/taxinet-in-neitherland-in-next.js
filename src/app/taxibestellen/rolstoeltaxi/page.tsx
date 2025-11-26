import React from "react";
import Hero2Buttons from "../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import ParticulierreserveringsformulierForm from "../../components/layout/taxibestellen/ParticulierreserveringsformulierForm";
import RolstoelTaxi from "../../components/layout/taxibestellen/RolstoelTaxi";
import TextwithBg from "../../components/layout/taxibestellen/TextwithBg";

const page = () => {
  return (
    <div>
      {" "}
      <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"0009e72ca1907416e754b8d66fa4e7a1a0394be7.png"}
      />
      <ServicesWithLogos />
      <TextwithBg />
       <RolstoelTaxi/>
      
      <div className="min-h-screen"></div>
    </div>
  );
};

export default page;
