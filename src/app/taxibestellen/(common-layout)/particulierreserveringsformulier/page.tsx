"use client";
import { useState } from "react";
import React from "react";
import Hero2Buttons from "../../../components/ui/Hero2Buttons";
import ServicesWithLogos from "../../../components/layout/taxiservice/ServicesWithLogos";
import ParticulierreserveringsformulierForm from "../../../components/layout/taxibestellen/ParticulierreserveringsformulierForm";
import TextwithBg from "../../../components/layout/taxibestellen/TextwithBg";
import NavigationBtns from "../../../components/layout/taxibestellen/NavigationBtns";

const page = () => {
  return (
    <div>
      <Hero2Buttons
        headerText={"Online taxi reserveren"}
        imgaeRootFolder={"taxibestellen"}
        headerImage={"7429f96187e24caa41392ec303da5d82d5e859e5.png"}
      />
      <ServicesWithLogos />
      <TextwithBg />
      <NavigationBtns/>
      <ParticulierreserveringsformulierForm />
      <div className="min-h-screen"></div>
    </div>
  );
};

export default page;
