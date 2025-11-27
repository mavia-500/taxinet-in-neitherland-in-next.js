import React from "react";
import HeroSide2Btn from "../../../components/layout/taxibestellen/HeroSide2Btn";
import ServicesWithLogos from "../../../components/layout/taxiservice/ServicesWithLogos";
import TextWithBlackbg from "../../../components/layout/taxibestellen/TextWithBlackbg";
import AutoverhuurForm from "../../../components/layout/taxibestellen/AutoverhuurForm";
import NavigationBtns from "../../../components/layout/taxibestellen/NavigationBtns";

const page = () => {
  return (
    <div>
      <HeroSide2Btn
        imgaeRootFolder={"taxibestellen"}
        headerImage={"65444800dead0c37c4861f335e154979e48d9df8.png"}
        headerText={"Online  reserveren"}
      />
      <ServicesWithLogos/>
      <TextWithBlackbg/>
<NavigationBtns/>
      <AutoverhuurForm/>

          </div>
  );
};

export default page;
