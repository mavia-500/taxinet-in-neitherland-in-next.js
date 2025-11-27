import React from "react";

const SleepdienstForm = () => {
  return (
    <div className="min-h-screen bg-black py-10 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
      <form className="max-w-4xl w-full  p-10 rounded-lg shadow-2xl border-4 border-amber-500 container mx-auto">
        {/* SECTION 1 */}
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Datum en tijd
        </h2>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Gewenste ophaaldatum en tijd <span className="text-white">*</span>
          </label>
          <div className="relative text-white">
            <input
              type="date"
              required
              className="w-full px-3 py-2 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Reserveringsformulier Sleepdienst
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Voor- en achternaam <span className="text-white">*</span>
            </label>
            <input
              required
              className="w-full px-3 py-2  border border-gray-600 rounded-md text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Adres <span className="text-white">*</span>
            </label>
            <input
              required
              className="w-full px-3 py-2 border border-gray-600 rounded-md text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Postcode & Woonplaats <span className="text-white">*</span>
            </label>
            <input
              required
              className="w-full px-3 py-2  border border-gray-600 rounded-md text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Telefoonnummer <span className="text-white">*</span>
            </label>
            <input
              type="tel"
              required
              className="w-full px-3 py-2  border border-gray-600 rounded-md text-white"
            />
          </div>

          <div className="md:col-span-2 mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              E-mailadres <span className="text-white">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-3 py-2  border border-gray-600 rounded-md text-white"
            />
          </div>
        </div>

        {/* SECTION 3 */}
        <h2 className="text-3xl font-bold text-white my-8 text-center">
          Gegevens voertuig
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Merk <span className="text-white">*</span>
            </label>
            <input
              required
              className="w-full px-3 py-2  border border-gray-600 rounded-md text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Kenteken <span className="text-white">*</span>
            </label>
            <input
              required
              className="w-full px-3 py-2  border border-gray-600 rounded-md text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Model <span className="text-white">*</span>
            </label>
            <input
              required
              className="w-full px-3 py-2  border border-gray-600 rounded-md text-white"
            />
          </div>

          {/* Destination Group */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Bestemming <span className="text-white">*</span>
            </label>

            <input
              placeholder="Volleding adres"
              required
              className="w-full mb-2 px-3 py-2  border border-gray-600 rounded-md text-white"
            />

            <div className="flex gap-4">
              <input
                placeholder="Postcode"
                required
                className="w-1/2 px-3 py-2  border border-gray-600 rounded-md text-white"
              />
              <input
                placeholder="Plaats"
                required
                className="w-1/2 px-3 py-2  border border-gray-600 rounded-md text-white"
              />
            </div>
          </div>

          <div className="md:col-span-2 mb-4">
            <label className="block text-sm text-gray-300 mb-1">
              Locatie van het voertuig <span className="text-white">*</span>
            </label>
            <input
              required
              className="w-full px-3 py-2  border border-gray-600 rounded-md text-white"
            />
          </div>
        </div>

        {/* Bijzonderheden */}
        <div className="mt-4 mb-12">
          <label className="block text-sm text-gray-300 mb-2">
            Bijzonderheden
          </label>
          <textarea
            rows={4}
            className="w-full px-3 py-2  border border-gray-600 rounded-md text-white resize-none"
          ></textarea>
        </div>

        {/* Payment + Terms */}
        <div className="pt-6  border-gray-700">
          <h2 className="text-2xl text-white font-bold mb-4">Betaalmethode</h2>

          <div className="flex gap-6 mb-8 text-white">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="h-4 w-4"
              />
              <span className="text-lg">Contant Geld</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="h-4 w-4" />
              <span className="text-lg">Kaart</span>
            </label>
          </div>

          <h2 className="text-2xl text-white font-bold mb-4">Voorwaarden</h2>

          <ul className="list-disc text-gray-300 ml-4 space-y-2 mb-8">
            <li>
              De klant gaat akkoord met de voorwaarden van{" "}
              <a className="text-amber-500 font-semibold">Taxinet</a>.
            </li>
            <li>De kosten worden vooraf overeengekomen of gefactureerd.</li>
            <li>
              Schade tijdens transport is alleen verzekerd indien schriftelijk
              overeengekomen.
            </li>
          </ul>

          <label className="flex items-center space-x-3 mb-8">
            <input required type="radio" className="h-5 w-5" />
            <span className="text-white text-lg">
              Ik ga akkoord met de voorwaarden en bevestig mijn reservering.
            </span>
          </label>

          <button
            type="submit"
            className="w-1/2 py-4 bg-amber-500 hover:bg-orange-700 text-white font-bold text-xl rounded-md shadow-xl"
          >
            VERZENDEN
          </button>
        </div>
      </form>
    </div>
  );
};

export default SleepdienstForm;
