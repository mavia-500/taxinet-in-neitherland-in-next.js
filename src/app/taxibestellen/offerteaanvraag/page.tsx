import React from "react";
import Hero2Buttons from "../../components/ui/Hero2Buttons";    
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import TrouwvervoerForm from "../../components/layout/taxibestellen/TrouwvervoerForm";

const page = () => {
  return (
    <div>
      <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"7429f96187e24caa41392ec303da5d82d5e859e5.png"}
      />
      <ServicesWithLogos />
      <TrouwvervoerForm />
      <div className="bg-black min-h-screen"></div>
    </div>
  );
};

export default page;
