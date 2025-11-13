"use client";
import React from "react";
import { useState } from "react";
import { IoCallOutline, IoMenu, IoClose } from "react-icons/io5";
import ContactButton from "./ContactButton";
import Link from "next/link";

interface SelectGroup {
  placeHolder: string;
  options: string[];
}

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectGroups: SelectGroup[] = [
    {
      placeHolder: "taxi Diensten",
      options: ["Goedkope Taxi", "Luxe Taxi", "Groepsvervoer"],
    },
    {
      placeHolder: "Taxiprijzen",
      options: [
        "Taxi Den Haag",
        "Taxi Rijswijk",
        "taxi voorburg",
        "taxi scheveningen",
        "taxi wassenaar",
        "taxi leidschendam",
        " taxi nootdorp ",
        " taxi wateringen ",
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
      placeHolder: "Taxibedrijven",
      options: ["Schiphol", "Rotterdam The Hague", "Eindhoven"],
    },
    {
      placeHolder: "Over Taxinet",
      options: ["Taxinet", "HTMC", "CityTaxi"],
    },
  ];
  return (
    <div className="w-full  ">
      <nav className="">
        <div className="flex container mx-auto items-center  text-white justify-around p-10">
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
              gap-6  2xl:static top-20 left-0 w-full 2xl:w-auto 
                  p-6 2xl:p-0 z-10`}
          >
            {selectGroups.map((group, i) => (
              <select
                id={group.placeHolder}
                defaultValue={group.placeHolder}
                key={i}
                className=" text-white lg:w-auto"
              >
                <option key={i} hidden>
                  {group.placeHolder}
                </option>

                {group.options.map((opt, j) => (
                  <Link href={`/${group.placeHolder}/${opt}`}>
                    <option key={j} className="text-black">
                      {opt}
                    </option>
                  </Link>
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
    </div>
  );
};

export default Nav;
