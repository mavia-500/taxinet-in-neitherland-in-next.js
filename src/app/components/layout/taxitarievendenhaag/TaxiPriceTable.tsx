"use client";
import React from "react";

// Example JSON structure (replace with your real JSON)
import { useState, useMemo } from "react";
import { CiSearch } from "react-icons/ci";

export default function TaxiPriceTable() {
  const data = [
    {
      from: "Taxi Van Den Haag Naar",
      to: "Aalsmeer",
      price_1_4: 85,
      price_5_8: 105,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Abbenbroek",
      price_1_4: 88,
      price_5_8: 105,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Abbenes",
      price_1_4: 71,
      price_5_8: 94,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Abcoude",
      price_1_4: 118,
      price_5_8: 141,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Aerdenhout",
      price_1_4: 92,
      price_5_8: 118,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Amersfoort",
      price_1_4: 165,
      price_5_8: 205,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Amsterdam",
      price_1_4: 150,
      price_5_8: 185,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Amsterdam Bijlmer",
      price_1_4: 145,
      price_5_8: 178,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Amsterdam Noord",
      price_1_4: 155,
      price_5_8: 190,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Amsterdam Zuid",
      price_1_4: 152,
      price_5_8: 187,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Arnhem",
      price_1_4: 215,
      price_5_8: 260,
    },
    {
      from: "Taxi Van Den Haag Naar",
      to: "Assendelft",
      price_1_4: 178,
      price_5_8: 215,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    const lowerSearch = searchTerm.toLowerCase();
    return data.filter(
      (item: any) =>
        item.from.toLowerCase().includes(lowerSearch) ||
        item.to.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm]);

  return (
    <div className="w-full container mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <div className="relative w-full md:w-96">
          {/* Search Icon inside input */}
          <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white w-6 h-6 pointer-events-none" />

          {/* Input */}
          <input
            type="text"
            placeholder="Zoek op Plaatsnaam"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border-4 border-amber-500 rounded-xl focus:outline-none focus:border-orange-500 transition placeholder-white bg-gray-500 text-white"
          />
        </div>
      </div>

      {/* Results count */}
      {searchTerm && (
        <p className="text-gray-600 mb-4">
          {filteredData.length} resultaat{filteredData.length !== 1 ? "en" : ""}{" "}
          gevonden
          {searchTerm && ` voor "${searchTerm}"`}
        </p>
      )}

      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
        {/* Header */}
        <div className="grid grid-cols-3 md:grid-cols-4 bg-orange-100 font-semibold text-center py-4 text-lg text-orange-700">
          <div>Naam</div>
          <div>Bestemming</div>
          <div>Taxi 1–4 pers.</div>
          <div className="hidden md:block">Taxi Bus 5–8 pers.</div>
        </div>

        {/* Rows */}
        <div>
          {filteredData.length === 0 ? (
            <div className="text-center py-12 text-gray-500 text-lg">
              Geen ritten gevonden voor "{searchTerm}"
            </div>
          ) : (
            filteredData.map((item: any, i: number) => (
              <div
                key={i}
                className={`grid grid-cols-3 md:grid-cols-4 text-center items-center py-6 px-2 border-b border-gray-200 ${
                  i % 2 === 0 ? "bg-white" : "bg-orange-50"
                }`}
              >
                <div className="font-medium">{item.from}</div>
                <div className="font-medium">{item.to}</div>

                {/* Taxi 1-4 */}
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-gray-700 font-semibold">
                    € {item.price_1_4},-
                  </span>
                  <button className="border underline border-orange-500 text-orange-500  rounded-sm px-4 py-1 text-sm hover:bg-orange-500 hover:text-white transition">
                    Reserveer direct online!
                  </button>
                </div>

                {/* Taxi Bus 5-8 */}
                <div className="hidden md:flex flex-col gap-2 items-center">
                  <span className="text-gray-700 font-semibold">
                    € {item.price_5_8},-
                  </span>
                  <button className="border underline border-orange-500 text-orange-500 rounded-sm px-4 py-1 text-sm hover:bg-orange-500 hover:text-white transition">
                    Reserveer direct online!
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
