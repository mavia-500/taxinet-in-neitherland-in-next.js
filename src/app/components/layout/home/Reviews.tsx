'use client';   // <-- add this if you are in the app directory

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  img: string;
}

const Reviews: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Mike T.",
      role: "Project Manager",
      text: "Increasy has been a game-changer for our team. We save hours each week and the collaboration tools are fantastic.",
      img: "/aset/images/24-hours-support (1) 1 1 (1).png",
    },
    {
      name: "John P.",
      role: "Marketing Director",
      text: "The automation features alone have saved us so much time. Increasy is a must-have for any growing team.",
      img: "/aset/logo/Taxinet logo 1 6.png",
    },
    {
      name: "David K.",
      role: "Sales Executive",
      text: "Since adopting Increasy, I’ve seen a big boost in my productivity. It keeps me organized and lets me focus.",
      img: "/aset/images/vercel.svg",
    },
    {
      name: "Phillip W.",
      role: "Operations Lead",
      text: "Our productivity has never been higher. Increasy’s tracking tools keep us aligned and motivated.",
      img: "/aset/images/window.svg",
    },
    {
      name: "Carlos R.",
      role: "Software Engineer",
      text: "With Increasy, our productivity soared. I spend less time on repetitive tasks and more on real development work. It’s a game changer!",
      img: "/aset/images/world forum 4.png",
    },
  ];

  /* Duplicate the array so the marquee never shows a gap */
  const infinite = [...testimonials, ...testimonials];

  return (
    <section className="relative text-black mt-15 overflow-hidden p-10">
      <h2 className="text-center text-3xl font-bold p-10">
        beoordelingen van klanten
      </h2>

      {/* ---------- MARQUEE CONTAINER ---------- */}
      <div className="overflow-hidden">
        <div className="flex animate-right">
          {infinite.map((t, i) => (
            <div
              key={i}
              className="lg:min-w-1/4 bg-black p-6 rounded-2xl shadow-lg border border-gray-700 mx-4"
                 // keep cards from collapsing
            >
              <p className="text-gray-300 mb-4 border-b border-gray-600 pb-5">
                {t.text}
              </p>

              <div className="flex items-center gap-4 mt-4">  
                <div className="relative w-12 h-12 rounded-full overflow-hidden text-white">
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>

                  <div className="flex text-yellow-400 mt-1">
                    {Array(5)
                      .fill(null)
                      .map((_, idx) => (
                        <FaStar key={idx} className="mx-1" />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="overflow-hidden  mt-10">
        <div className="flex animate-left translate-x-[-50%] ">
          {infinite.map((t, i) => (
            <div
              key={i}
              className="lg:min-w-1/4 bg-black p-6 rounded-2xl shadow-lg border border-gray-700 mx-4  "
                 // keep cards from collapsing
            >
              <p className="text-gray-300 mb-4 border-b border-gray-600 pb-5  ">
                {t.text}
              </p>

              <div className="flex items-center gap-4 mt-4">  
                <div className="relative w-12 h-12 rounded-full overflow-hidden text-white">
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>

                  <div className="flex text-yellow-400 mt-1">
                    {Array(5)
                      .fill(null)
                      .map((_, idx) => (
                        <FaStar key={idx} className="mx-1" />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- TAILWIND ANIMATION ---------- */}
      
    </section>
  );
};

export default Reviews;