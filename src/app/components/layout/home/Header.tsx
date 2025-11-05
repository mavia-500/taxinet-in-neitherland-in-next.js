"use client";
import React, { useState } from "react";
import ContactButton from "../../ui/ContactButton";
import { IoCallOutline, IoMenu, IoClose } from "react-icons/io5";
import { useTranslations  }   from "next-intl" ;

interface SelectGroup {
  placeHolder: string;
  options: string[];
}

const Header: React.FC = () => {
  const t=useTranslations("home")
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectGroups: SelectGroup[] = [
    {
      placeHolder: t('nav1'),
      options: ["Goedkope Taxi", "Luxe Taxi", "Groepsvervoer"],
    },
    {
      placeHolder: "taxi service",
      options: ["24/7 Service", "Zakelijke Taxi", "Privé Chauffeur"],
    },
    {
      placeHolder: "Taxi Tarieven Den Haag",
      options: ["Binnenstad", "Luchthaven", "Langere ritten"],
    },
    {
      placeHolder: "Taxi Bestellen",
      options: ["Online", "Telefonisch", "App"],
    },
    {
      placeHolder: "Airport Taxi",
      options: ["Schiphol", "Rotterdam The Hague", "Eindhoven"],
    },
    {
      placeHolder: "Taxi Bedrijven",
      options: ["Taxinet", "HTMC", "CityTaxi"],
    },
  ];

  return (
    <nav className="bg-[#1d1d1d] ">
      <div className="flex container mx-auto items-center bg-[#1d1d1d] text-white justify-around p-10">
        {/* Logo */}
        <img
          src="/aset/logo/Taxinet logo 1 6.png"
          className="w-30 h-auto"
          alt="Taxinet Logo"
        />

        {/* Hamburger Icon for medium and small screens */}
        <div className="2xl:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <IoClose className="w-8 h-8" />
            ) : (
              <IoMenu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <div
          className={`${isMenuOpen ? "flex" : "hidden"}
    2xl:flex flex-col 2xl:flex-row 2xl:items-center items-start text-white 
       gap-6  
    absolute 2xl:static top-20 left-0 w-full 2xl:w-auto 
    bg-[#1d1d1d]  p-6 2xl:p-0 z-10`}
        >
          {selectGroups.map((group, i) => (
            <select
              id={group.placeHolder}
              defaultValue={group.placeHolder}
              key={i}
              className="bg-[#1d1d1d] text-white lg:w-auto"
            >
              <option key={i} hidden>
                {group.placeHolder}
              </option>
              {group.options.map((opt, j) => (
                <option key={j} className="text-black">
                  {opt}
                </option>
              ))}
            </select>
          ))}

          <h3 className="text-white">Over Taxinet</h3>

          <ContactButton
            text="Taxi Den Haag Contact"
            classname="bg-[#ff8900] text-white"
            icon={<IoCallOutline className="w-5 h-5" />}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
