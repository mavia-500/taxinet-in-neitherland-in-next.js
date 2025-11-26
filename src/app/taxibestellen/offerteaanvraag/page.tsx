import React from "react";
import Hero2Buttons from "../../components/ui/Hero2Buttons";    
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import OfferteAanvraag from "../../components/layout/taxibestellen/OfferteAanvraag";
import TextwithBg from "../../components/layout/taxibestellen/TextwithBg";

const page = () => {
  return (
    <div>
      <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"c91ebce9520c1a14a77aa578033c821f44baa2dd.png"}
      />
      <ServicesWithLogos />
      <TextwithBg/>
      <OfferteAanvraag/>
      <div className="bg-black min-h-screen"></div>
    </div>
  );
};

export default page;
