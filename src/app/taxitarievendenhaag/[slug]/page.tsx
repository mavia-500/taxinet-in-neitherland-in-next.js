import React from "react";
import Nav from "../../components/ui/Nav";
import Footer from "../../components/layout/home/Footer";
import Section2buttons from "../../components/ui/Section2buttons";
import Hero2Buttons from "../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import TaxiPriceTable from "../../components/layout/taxitarievendenhaag/TaxiPriceTable";

const page = () => {
 

  return (
    <div>
      <div className="bg-black">
        <Nav />
      </div>

      <Hero2Buttons
        headerText={"Taxi Tarieven Den Haag"}
        imgaeRootFolder={"taxitarievendenhaag"}
        headerImage={"5118eab7497f4df13dacbe3d53f9479b427953a2.png"}
      />
      <ServicesWithLogos />

      <TaxiPriceTable/>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
