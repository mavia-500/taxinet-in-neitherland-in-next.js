import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImagewithLinks = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center px-6">
      <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg w-[380px]">
            <Image
              src="/aset/overtaxinet/3d16990a6836644e18494a9dea9bd60a44ad0aee.png" // put your file in /public
              alt="Taxi"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Taxiklacht</h2>

          <ul className="space-y-2 text-lg">
            <li>
              <Link className="hover:underline" href="https://www.knv.nl/">
                KNV
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="https://www.rijksoverheid.nl/onderwerpen/taxi/nieuws">
                Rijksoverheid
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="https://www.ilent.nl/">
                KVW Taxi
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="https://nl.wikipedia.org/wiki/Taxi_(vervoer)">
                Taxi-Wikipedia
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="https://taxi.startpagina.nl/">
                Taxi Startpagina
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImagewithLinks;
