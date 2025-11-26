import React from "react";
import Hero2Buttons from "../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import TrouwvervoerForm from "../../components/layout/taxibestellen/TrouwvervoerForm";
import TextwithBg from "../../components/layout/taxibestellen/TextwithBg";

const page = () => {
  return (
    <div>
      <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"acd562fdbd026dd22ddbe98b442bee1f48ba6271.jpg"}
      />
      <ServicesWithLogos />
      <TextwithBg/>
      <TrouwvervoerForm/>
      <div className="bg-black min-h-screen">

      </div>
    </div>
  );
};

export default page;
