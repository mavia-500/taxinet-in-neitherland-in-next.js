import React from "react";
import Link from "next/link";
import Additional_Footer from "../../ui/Additional_Footer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 container ">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src="/aset/logo/Taxinet logo 1 6.png"
            alt="Taxinet Logo"
            className="w-32 h-auto mb-4"
          />
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
            <li>
              <Link href="/">Groepsvervoer</Link>
            </li>
            <li>
              <Link href="/">Rolstoel Taxi</Link>
            </li>
            <li>
              <Link href="/">Hotel Taxi Service</Link>
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

      <Additional_Footer />
    </footer>
  );
};

export default Footer;
