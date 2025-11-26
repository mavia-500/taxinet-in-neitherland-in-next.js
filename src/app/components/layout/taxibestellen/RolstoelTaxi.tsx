import React from "react";

import SubmitButton from "./SubmitButton";

const RolstoelTaxi = () => {
  return (
    <div className="min-h-screen w-full bg-white text-black flex justify-center py-14 px-4">
      <div className="w-full max-w-4xl border-3 border-amber-500 rounded-xl p-10 space-y-12">
        <h2 className="text-2xl font-semibold text-center">
          Gegevens Klant (Rolstoel Taxi)
        </h2>

        {/* Customer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Uw naam *</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Emailadres *</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Telefoonnummer *</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Betaalmethode</label>
            <div className="flex gap-4 mt-1 text-sm">
              <label className="flex gap-1 items-center">
                <input type="radio" name="payment" /> Pin
              </label>
              <label className="flex gap-1 items-center">
                <input type="radio" name="payment" /> Contant
              </label>
              <label className="flex gap-1 items-center">
                <input type="radio" name="payment" /> Ideal
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Ophaal Datum *</label>
            <input
              type="date"
              className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Aantalpersonen *</label>
            <input
              type="number"
              className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Ophaal Adres */}
        <h2 className="text-xl font-semibold text-center">Ophaal Adres</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Straatnaam</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Woonplaats</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Nr</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Postcode *</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Tijdstip *</label>
            <input
              type="time"
              className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Bestemming */}
        <h2 className="text-xl font-semibold text-center">Bestemming</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Straatnaam</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Woonplaats</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Nr</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>

          <div className="flex flex-col md:row-span-2">
            <label className="text-sm mb-1">Opmerking</label>
            <textarea
              rows={5}
              className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Postcode</label>
            <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
          </div>
        </div>

        <SubmitButton />
      </div>
    </div>
  );
};

export default RolstoelTaxi;
