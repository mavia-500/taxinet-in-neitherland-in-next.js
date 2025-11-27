import React from "react";
import Hero2Buttons from "../../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../../components/layout/taxiservice/ServicesWithLogos";
// import ParticulierreserveringsformulierForm from '../../components/layout/taxibestellen/ParticulierreserveringsformulierForm'
import ZakelijkreserveringsformulierForm from "../../../components/layout/taxibestellen/ZakelijkreserveringsformulierForm";
import TextwithBg from "../../../components/layout/taxibestellen/TextwithBg";
import NavigationBtns from "../../../components/layout/taxibestellen/NavigationBtns";

const page = () => {
  return (
    <div>
      
      <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"71f54fe136376a2496cb22d447e45f7f4147d326.jpg"}
      />
      <ServicesWithLogos />

     <TextwithBg/>
     <NavigationBtns/>
      <ZakelijkreserveringsformulierForm />
      <div className="min-h-screen bg-black"></div>
    </div>
  );
};

export default page;
