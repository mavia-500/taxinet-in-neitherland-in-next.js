"use client";

import React, { useState } from "react";

const data = [
  {
    route: "Taxi Den Haag naar Schiphol",
    taxi: "€ 85,-",
    bus: "€ 104,-",
    highlight: true,
  },
  {
    route: "Taxi Schiphol naar Den Haag",
    taxi: "€ 90,-",
    bus: "€ 109,-",
  },
  {
    route: "Taxi Den Haag naar Rotterdam Airport",
    taxi: "€ 60,-",
    bus: "€ 70,-",
    highlight: true,
  },
  {
    route: "Taxi Rotterdam Airport naar Den Haag",
    taxi: "€ 60,-",
    bus: "€ 70,-",
  },
  {
    route: "Taxi Den Haag naar Eindhoven Airport",
    taxi: "€ 210,-",
    bus: "€ 230,-",
    highlight: true,
  },
  {
    route: "Taxi Eindhoven Airport naar Den Haag",
    taxi: "€ 225,-",
    bus: "€ 240,-",
  },
];

export default function PriceTableActies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto bg-black flex flex-col items-center py-10 px-4">
    
      <div className="mb-6">
          <input
            type="text"
            placeholder="Actie!! Schiphol vanaf 65,- Zondag t/m Donderdag van 22:00 tot 04:00 alleen brengen!!!"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" w-full lg:w-4xl bg-gray-500 px-4 py-3 text-white rounded-lg border border-amber-500 text-lg focus:outline-none focus:border-orange-500"
          />
        </div>

      {/* Table Container */}
      <div className="bg-[#FAEFE4] w-full lg:w-4xl rounded-xl p-6 shadow-lg">
        
        {/* Search Bar */}
        

        {/* Header */}
        <div className="grid grid-cols-3 text-center text-lg font-bold text-orange-600 border-b pb-4">
          <div></div>
          <div>TAXI</div>
          <div>BUS</div>
        </div>

        {/* Rows */}
        {filteredData.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 px-4 py-5 text-lg ${
              item.highlight ? "bg-[#3C3C3C] text-white" : "text-black"
            }`}
          >
            <div className="font-medium">{item.route}</div>
            <div className="text-center font-semibold">{item.taxi}</div>
            <div className="text-center font-semibold">{item.bus}</div>
          </div>
        ))}
      </div>
    </div>
  );
}