import React from "react";
import FormSolliciteren from "../../components/layout/overtaxinet/FormSolliciteren";
import Section2buttons from "../../components/ui/Section2buttons";
import Hero2Buttons from "../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";

const page = () => {
  return (
    <div >
      <Hero2Buttons
        headerText="Solliciteren"
        headerImage="98d848ca6b18e9437e06ddf996e5be8de83abe92.jpg"
        imgaeRootFolder="overtaxinet"
      />
      <ServicesWithLogos />
      <div className="bg-black">
        <FormSolliciteren />
      </div>
    </div>
  );
};

export default page;
