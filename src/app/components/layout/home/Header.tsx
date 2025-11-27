"use client";
import React, { useState } from "react";
import ContactButton from "../../ui/ContactButton";

import { useTranslations } from "next-intl";
import Main from "./Main";
import Section from "./Section";
import Nav from "../../ui/Nav";

const Header: React.FC = () => {
  const t = useTranslations("home");

  return (
    <div>
      <div className="overflow-hidden relative h-full ">
        {" "}
        <video
          className=" min-w-full  object-cover -z-10 absolute  h-full "
          src="/aset/videos/Comp 1_1 (1).mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        ></video>
        <div className="text-white">
          <Nav />
        </div>
        <Main />
        {/* <Section /> */}
      </div>
    </div>
  );
};

export default Header;
