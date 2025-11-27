import React from "react";
import HeroSide2Btn from "../../../components/layout/taxibestellen/HeroSide2Btn";
import ServicesWithLogos from "../../../components/layout/taxiservice/ServicesWithLogos";
import TextWithBlackbg from "../../../components/layout/taxibestellen/TextWithBlackbg";
import SleepdienstForm from "../../../components/layout/taxibestellen/SleepdienstForm";
import NavigationBtns from "../../../components/layout/taxibestellen/NavigationBtns";

const page = () => {
  return (
    <div>
      <HeroSide2Btn
        headerImage={"e3813605e0e8f909dbf71ab2818bb6c3e640d9c2.png"}
        headerText={"Online  Reserveren"}
        imgaeRootFolder={"taxibestellen"}
      />
      <ServicesWithLogos/>

      <TextWithBlackbg/>
      <NavigationBtns/>
      <SleepdienstForm/>
    </div>
  );
};

export default page;
