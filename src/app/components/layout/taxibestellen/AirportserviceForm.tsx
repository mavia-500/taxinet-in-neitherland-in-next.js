"use client";
import React from "react";

const AirportserviceForm = () => {
  const orange = "rgb(255, 119, 0)";

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white p-6 sm:p-10 rounded-xl  border-3 border-amber-500">
        <form className="space-y-16">
          {/* ------------------------------------------------ */}
          {/* 1) DROP-OFF FORM                                 */}
          {/* ------------------------------------------------ */}
          <div>
            <h2 className="text-5xl font-bold text-center mb-6 text-amber-500">
              Brengen Naar Schiphol
            </h2>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold">Uw naam *</label>
                <input className="input" type="text" required />
              </div>

              <div>
                <label className="font-semibold">Emailadres *</label>
                <input className="input" type="email" required />
              </div>

              <div>
                <label className="font-semibold">Telefoonnummer *</label>
                <input className="input" type="tel" required />
              </div>

              <div>
                <label className="font-semibold">Ophaal Datum *</label>
                <input className="input" type="date" required />
              </div>

              <div>
                <label className="font-semibold">ophaal tijdstip</label>
                <input className="input" type="time" />
              </div>
            </div>

            {/* Ophaal Adres */}
            <h3 className="subtitle">Ophaal Adres</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold">Straat</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Huisnummer</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Postcode</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Stad</label>
                <input className="input" />
              </div>
              <div>
                <label className="font-semibold">
                  extra adress tegen betaling
                </label>
                <textarea className="input h-24"></textarea>
              </div>
            </div>

            {/* Bestemming */}
            <h3 className="subtitle">Bestemming</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold"> welk vluchthave</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Voorkeur Type Voertuig</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Aantal Personen</label>
                <input className="input" type="number" />
              </div>

              <div>
                <label className="font-semibold">Aantal Bagage</label>
                <input className="input" />
              </div>

              <div className="md:col-span-2">
                <label className="font-semibold">
                  Kinderstoelen tegen betaling
                </label>
                <textarea className="input h-24"></textarea>
              </div>
            </div>

            {/* Extra Address */}
          </div>

          {/* ------------------------------------------------ */}
          {/* 2) PICK-UP FORM                                  */}
          {/* ------------------------------------------------ */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-6 text-amber-500">
              Ophaal Van Uit Schiphol
            </h2>

            {/* Flight Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold">Uw namm *</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Emailadres *</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Telefoonnummer</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Ophaal Datum</label>
                <input className="input" type="date" />
              </div>

              <div>
                <label className="font-semibold">Ophaal tijdstip</label>
                <input className="input" type="time" />
              </div>

              <div>
                <label className="font-semibold">Ophaal Luchthaven</label>
                <input className="input" />
              </div>

              <div></div>

              <div>
                <label className="font-semibold">Vluchtnummer</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Vlucht uitkomst</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Voorkeur Type Voertuig</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Aantal Personen</label>
                <input className="input" type="number" />
              </div>

              <div>
                <label className="font-semibold">welk vluchtave</label>
                <input className="input" />
              </div>
            </div>

            {/* Destination */}
            <h3 className="subtitle">Bestemmingen</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-semibold">Adres</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Straat</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Huisnummer</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Postcode</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">Stad</label>
                <input className="input" />
              </div>

              <div>
                <label className="font-semibold">
                  Extra Adres Tegen Betaling
                </label>
                <textarea className="input h-24"></textarea>
              </div>

              <div className="md:col-span-2">
                <label className="font-semibold">
                  Kinderzitje Tegen Betaling
                </label>
                <textarea className="input h-24"></textarea>
              </div>
            </div>

            {/* Payment Method */}
            <h3 className="subtitle">Betalingen Methode</h3>
            <p className="text-center font-semibold mb-4">
              Betaling in de auto
            </p>

            <div className="flex justify-center space-x-8">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  defaultChecked
                />
                Pin
              </label>

              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                Contant
              </label>

              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                Ideal
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg"
            >
              Boeking Afronden
            </button>
          </div>
        </form>
      </div>

      {/* Shared Tailwind Input Class */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          outline: none;
        }
        .input:focus {
          border-color: ${orange};
          box-shadow: 0 0 0 2px rgba(255, 119, 0, 0.3);
        }
        .subtitle {
          margin-top: 40px;
          margin-bottom: 20px;
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default AirportserviceForm;
