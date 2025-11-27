import React from "react";

const AutoverhuurForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted!");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {" "}
      <div className="w-full max-w-4xl border-4 border-amber-500 p-8 md:p-12 shadow-2xl shadow-orange-500/10">
        {" "}
       
        ```
        <form
        // onSubmit={handleSubmit}
        >
          {/* --- Personal Data Section --- */}
           <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-10  pb-4">
          Reserveringsformulier Autoverhuur{" "}
        </h1>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium mb-2"
              >
                Voor- en achternaam <span className="">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="address"
                className="block text-white text-sm font-medium mb-2"
              >
                Adres <span className="">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="zip_city"
                className="block text-white text-sm font-medium mb-2"
              >
                Postcode & Woonplaats <span className="">*</span>
              </label>
              <input
                type="text"
                id="zip_city"
                name="zip_city"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="phone"
                className="block text-white text-sm font-medium mb-2"
              >
                Telefoonnummer <span className="">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                E-mailadres <span className="">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="license"
                className="block text-white text-sm font-medium mb-2"
              >
                Rijbewijsnummer <span className="">*</span>
              </label>
              <input
                type="text"
                id="license"
                name="license"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* --- Reservation Data Section --- */}
          <h2 className="text-2xl text-white font-bold text-center mt-8 mb-6 pt-4 ">
            Gegevens reservering
          </h2>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="desired_car"
                className="block text-white text-sm font-medium mb-2"
              >
                Gewenste auto <span className="">*</span>
              </label>
              <input
                type="text"
                id="desired_car"
                name="desired_car"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="pickup_location"
                className="block text-white text-sm font-medium mb-2"
              >
                Ophaallocatie <span className="">*</span>
              </label>
              <input
                type="text"
                id="pickup_location"
                name="pickup_location"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="pickup_date"
                className="block text-white text-sm font-medium mb-2"
              >
                Ophaaldatum <span className="">*</span>
              </label>
              <input
                type="date"
                id="pickup_date"
                name="pickup_date"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="return_date"
                className="block text-white text-sm font-medium mb-2"
              >
                Inleverdatum <span className="">*</span>
              </label>
              <input
                type="date"
                id="return_date"
                name="return_date"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="pickup_time"
                className="block text-white text-sm font-medium mb-2"
              >
                TIJD ophalen <span className="">*</span>
              </label>
              <input
                type="time"
                id="pickup_time"
                name="pickup_time"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label
                htmlFor="return_time"
                className="block text-white text-sm font-medium mb-2"
              >
                Inzendtijd <span className="">*</span>
              </label>
              <input
                type="time"
                id="return_time"
                name="return_time"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
            <div className="w-full px-4 mb-6">
              <label
                htmlFor="return_location"
                className="block text-white text-sm font-medium mb-2"
              >
                Inleverlocatie <span className="">*</span>
              </label>
              <input
                type="text"
                id="return_location"
                name="return_location"
                required
                className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* --- Remarks --- */}
          <div className="w-full px-4 mb-6 mt-4">
            <label
              htmlFor="remarks"
              className="block text-white text-sm font-medium mb-2"
            >
              Eventuele opmerkingen <span className="">*</span>
            </label>
            <textarea
              id="remarks"
              name="remarks"
              required
              rows={6}
              className="w-full bg-black border border-white/20 text-white rounded py-3 px-4 leading-tight focus:outline-none focus:border-orange-500 resize-none"
            ></textarea>
          </div>

          {/* --- Terms --- */}
          <div className="w-full p-4 mt-6 border border-blue-500/50">
           
            <h2 className="text-2xl text-white font-bold mb-4">Voorwaarden</h2>

          <ul className="list-disc text-gray-300 ml-4 space-y-2 mb-8">
            <li>
              De huurder gaat akkoord met de algemene voorwaarden van{" "}
              <a className="text-amber-500 font-semibold">Taxinet</a>.
            </li>
            <li>
              De huurder dient een geldig rijbewijs te tonen bij het ophalen van
              de auto.
            </li>
            <li>
              De borg bedraagt €[bedrag] en dient vooraf voldaan te worden.
            </li>
            <li>
              De huurder is verantwoordelijk voor verkeersboetes en schade
              tijdens de huurperiode.
            </li>
          </ul>
            <label
              htmlFor="terms_agree"
              className="flex items-start text-white cursor-pointer"
            >
              <input
                type="radio"
                id="terms_agree"
                name="terms_agree"
                required
                className="mr-3 mt-1 h-4 w-4 text-orange-600 bg-black border-white/50 rounded focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500"
              />
              Ik ga akkoord met de voorwaarden en bevestig mijn reservering.
            </label>
          </div>

          {/* --- Submit Button --- */}
          <div className="w-full px-4 mt-10">
            <button
              type="submit"
              className="w-1/2 bg-amber-500 hover:bg-orange-700 text-white uppercase font-bold text-lg py-3 rounded-md focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 transition duration-150"
            >
              VERZENDEN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AutoverhuurForm;
