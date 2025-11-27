"use client";
import React, { useState } from "react";
import { IoCallOutline, IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import ContactButton from "./ContactButton";
import Link from "next/link";

interface SelectGroup {
  placeHolder: string;
  options: string[];
}

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };
  const selectGroups: SelectGroup[] = [
    {
      placeHolder: "taxi Diensten",
      options: [
        "Leerlingenvervoer",
        "Trouwvervoer",
        "Taxi den haag _ schiphol",
        "Groepsvervoer",
        "Zakelijk vervoer",
        "Rolstoel taxi",
        "Hotel taxi service",
      ],
    },
    {
      placeHolder: "Taxi Service",
      options: [
        "Taxi Den Haag",
        "Taxi Rijswijk",
        "Taxi voorburg",
        "Taxi scheveningen",
        "Taxi wassenaar",
        "Taxi leidschendam",
        "Taxi nootdorp",
        "Taxi wateringen",
      ],
    },
    {
      placeHolder: "Taxi Tarieven Den Haag",
      options: ["Taxi Tarieven Den Haag", "Acties"],
    },
    {
      placeHolder: "Taxi Bestellen",
      options: [
        "Particulier reserveringsformulier",
        "Zakelijk reserveringsformulier",
        "Hotel reserveringsformulier",
        "Rolstoel Taxi",
        "Trouw Vervoer",
        "offerte aanvraag",
        "Airport Service",
        "sleepdienst",
        "auto verhuur"
      ],
    },
    {
      placeHolder: "Airport Taxi",
      options: [
        "Taxi Service den haag to Airport",
        "Taxi Service Rotterdam to Airport",
        "Taxi Service Barendrecht to Airport",
        "Taxi Service schiedam to airport",
        "Taxi Service Hoogvliet to airport",
        "Taxi Service spijkenisse to airport",
        "Taxi Service brielle to airport",
        "Taxi Service geervliet to airport",
      ],
    },
    {
      placeHolder: "Taxibedrijven",
      options: ["Taxi bedrijven", "Taxi verhuur"],
    },

    {
      placeHolder: "Over Taxinet",
      options: [
        "Over ons",
        "Algemene voorwaarden",
        "Solliciteren",
        "Nieuws",
        "Taxinet Haaglanden Bied in Den Haag",
        "Dagje uit in Leidschendam",
        "Op vakantie in Nederland met de taxi",
        "Veelgestelde vragen beantwoord door taxibedrijf Taxinet",
        "Een taxi reserveren waar moet u op letten?",
        "Voordelen van een zakelijke taxi reserveren",
        "Hoeveel kost het reserveren van een taxi?",
        "Voordelen van het reizen per taxi",
        "Uw post en pakketten vervoeren met Taxinet",
        "Wat is het verschil tussen een bestelde taxi en een straattaxi?",
        "Coronamaatregelen in de taxi",
        "Luchthavenvervoer via Taxinet Haaglanden",
        "Uitje in Den Haag Reis per taxi",
      ],
    },
  ];

  return (
    <div className="">
      <nav className=" ">
        <div className="flex container mx-auto items-center  justify-around p-10">
          {/* Logo */}
          <Link href={"/home"}>
            <img
              src="/aset/logo/Taxinet logo 1 6.png"
              className="w-30 h-auto"
              alt="Taxinet Logo"
            />
          </Link>

          {/* Hamburger Icon */}
          <div className="2xl:hidden">
            <button onClick={toggleMenu} className="">
              {isMenuOpen ? (
                <IoClose className="w-8 h-8 text-gray-400" />
              ) : (
                <IoMenu className="w-8 h-8 text-gray-400" />
              )}
            </button>
          </div>

          {/* Navigation Items */}
          <div
            className={`${
              isMenuOpen
                ? "flex absolute top-20 bg-gray-300 w-full p-10"
                : "hidden"
            } 2xl:flex flex-col 2xl:flex-row 2xl:items-center items-start  
              gap-6 2xl:static      `}
          >
            {/* Dropdown Menus */}
            {selectGroups.map((group, i) => (
              <div key={i} className="relative">
                {/* Top Level Button */}
                <button
                  onClick={() => toggleDropdown(i)}
                  className={`flex items-center gap-2  ${
                    openDropdown === i ? "text-[#ff8900]" : ""
                  }`}
                >
                  {group.placeHolder}
                  <IoChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown List */}
                {openDropdown === i && (
                  <ul className="absolute bg-gray-500  mt-2 rounded shadow-md p-2  w-max z-50">
                    {group.options.map((opt, j) => (
                      <li
                        key={j}
                        className="py-1 px-2 hover:bg-gray-100 relative z-50"
                        onClick={closeDropdown}
                      >
                        <Link
                          href={`/${group.placeHolder
                            .toLowerCase()
                            .replace(/\s+/g, "")}/${opt
                            .toLowerCase()
                            .replace(/\s+/g, "")}`}
                          className="block"
                        >
                          {opt}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* <h3 className="text-white">Over Taxinet</h3> */}

            <Link href="/taxidenhaagcontact" className="text-white">
              <ContactButton
                text="Taxi Den Haag Contact"
                classname="bg-[#ff8900] text-white"
                icon={<IoCallOutline className="w-5 h-5" />}
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
