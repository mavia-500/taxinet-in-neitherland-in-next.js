import React from "react";
import Link from "next/link";
import { GrMap } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { SiGmail } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-10 relative container mx-auto rounded-2xl mt-20">
      <img
            src="/aset/images/Group 1000001863 (1).png"
            alt="Taxinet Logo"
            className="w-52 h-auto mb-4 absolute top rounded-2xl bg-white left-1/3 top-[-55]"
          />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 container ">
        {/* Logo Section */}
        <div className="flex flex-col items-start relative">
          <Link
            href="https://www.google.com/maps/place/Rederijkerstraat+159,+2531+VK+Den+Haag,+Netherlands"
            className="flex items-center gap-2"
          >
            <GrMap className="text-xl" />
            <span>Rederijkerstraat 159, 2531VK Den Haag, Nederland</span>
          </Link>

          <ul className="space-y-2 text-gray-300 md:absolute bottom-0 underline relative">
            <li>
              <Link href="/">Voorwaarden</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
            <li>
              <Link href="/">Sitemap</Link>
            </li>
            <li></li>
          </ul>

          
        </div>

        {/* Taxi Services */}
        <div>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/">Leerlingenvervoer</Link>
            </li>
            <li>
              <Link href="/">Trouwvervoer</Link>
            </li>
            <li>
              <Link href="/">Taxi Den Haag - Schiphol</Link>
            </li>
           
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/">Taxi service Den haag</Link>
            </li>
            <li>
              <Link href="/">Taxi service Rotterdam</Link>
            </li>
            <li>
              <Link href="/">Taxi service Barendrecht</Link>
            </li>
            <li>
              <Link href="/">Taxi service schiedam</Link>
            </li>
            <li>
              <Link href="/">Taxi service Hoogvliet</Link>
            </li>
            <li>
              <Link href="/">Taxi service spijkenisse</Link>
            </li>
            <li>
              <Link href="/">Taxi service brielle</Link>
            </li>
            <li>
              <Link href="/">Taxi service geervliet</Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/">Overons</Link>
            </li>
            <li>
              <Link href="/">Nieuws</Link>
            </li>
            <li>
              <Link href="/">Direct Reserveren</Link>
            </li>
            <li>
              <Link href="/">Taxi Den Haag-Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
