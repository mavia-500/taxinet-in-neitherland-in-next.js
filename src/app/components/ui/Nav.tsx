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
      placeHolder: "Boek een rit",
      options: ["Binnenstad", "Luchthaven", "Langere ritten"],
    },
    {
      placeHolder: "Luchthaventaxi",
      options: ["Online", "Telefonisch", "App"],
    },
    {
      placeHolder: "Airport Taxi",
      options: ["Taxi Service den haag to Airport", "Taxi Service Rotterdam to Airport", "Taxi Service Barendrecht to Airport","Taxi Service schiedam to airport","Taxi Service Hoogvliet to airport","Taxi Service spijkenisse to airport","Taxi Service brielle to airport","Taxi Service geervliet to airport"],
    },
    {
      placeHolder: "Over Taxinet",
      options: ["Taxinet", "HTMC", "CityTaxi"],
    },
  ];

  return (
    <div className="w-full">
      <nav>
        <div className="flex container mx-auto items-center text-white justify-around p-10">
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
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } 2xl:flex flex-col 2xl:flex-row 2xl:items-center items-start text-white 
              gap-6 2xl:static top-20 left-0 w-full 2xl:w-auto p-6 2xl:p-0 z-10`}
          >
            {/* Dropdown Menus */}
            {selectGroups.map((group, i) => (
              <div key={i} className="relative">
                {/* Top Level Button */}
                <button
                  onClick={() => toggleDropdown(i)}
                  className={`flex items-center gap-2  ${
                    openDropdown === i ? "text-[#ff8900]" : "text-white"
                  }`}
                >
                  {group.placeHolder}
                  <IoChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown List */}
                {openDropdown === i && (
                  <ul className="absolute bg-white text-black mt-2 rounded shadow-md p-2 w-40">
                    {group.options.map((opt, j) => (
                      <li key={j} className="py-1 px-2 hover:bg-gray-100">
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

            <h3 className="text-white">Over Taxinet</h3>

            <ContactButton
              text="Taxi Den Haag Contact"
              classname="bg-[#ff8900] text-white"
              icon={<IoCallOutline className="w-5 h-5" />}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
