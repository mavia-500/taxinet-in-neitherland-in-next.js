import React from "react";
import Hero2Buttons from "../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import { articelData } from "../../data/OverTaxinet";
import Articel from "../../components/layout/overtaxinet/Articel";
const page = () => {
  return (
    <div>
      <Hero2Buttons
        headerText={"Algemene voorwaarden"}
        headerImage={"b25f3b33b5d986b667af842f1421b65b0057c717.jpg"}
        imgaeRootFolder={"overtaxinet"}
      />
      <ServicesWithLogos />
      <Articel/>

      
    </div>
  );
};

export default page;
