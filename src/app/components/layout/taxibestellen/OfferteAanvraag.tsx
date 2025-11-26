"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

export default function OfferteAanvraag() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupCity: "",
    pickupStreet: "",
    destinationCity: "",
    destinationStreet: "",
    subject: "",
    rideDate: "",
    pickupTime: "",
    numPeople: "",
    remark: "",
    preferredVehicle: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulier ingediend!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white p-8 sm:p-12 shadow-2xl rounded-xl border-4 border-orange-500">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Gegevens Klant (Trouw Vervoer)
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-800">Uw naam *</label>
              <input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-800">
                Emailadres *
              </label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-800">
                Telefoonnummer *
              </label>
              <input
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mt-10 mb-6  pb-2">
            Ophaal Adres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-800">Stad *</label>
              <input
                name="pickupCity"
                required
                value={formData.pickupCity}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-800">
                Straat / Huisnummer *
              </label>
              <input
                name="pickupStreet"
                required
                value={formData.pickupStreet}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mt-10 mb-6  pb-2">
            Bestemming
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-800">
                Stad bestemming
              </label>
              <input
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-gray-800">
                Straat / Huisnummer bestemming
              </label>
              <input
                name="destinationStreet"
                value={formData.destinationStreet}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mt-10 mb-6  pb-2">
            Vervoers kenmerken
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="font-semibold text-gray-800">Onderwerp</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-4 py-3 border rounded-lg"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="font-semibold text-gray-800">
                  Datum van de rit
                </label>
                <input
                  name="rideDate"
                  type="date"
                  value={formData.rideDate}
                  onChange={handleChange}
                  className="px-4 py-3 border rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="font-semibold text-gray-800">
                  Gewenste ophaaltijd
                </label>
                <input
                  name="pickupTime"
                  type="time"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="px-4 py-3 border rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-semibold text-gray-800">
                  Aantal personen
                </label>
                <input
                  name="numPeople"
                  type="number"
                  value={formData.numPeople}
                  onChange={handleChange}
                  className="px-4 py-3 border rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2 md:col-span-1">
              <label className="font-semibold text-gray-800">Opmerkingen</label>
              <textarea
                name="remark"
                rows={5}
                value={formData.remark}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg resize-none"
              />
            </div>

            <div className="flex flex-col space-y-2 md:col-span-1 md:self-start">
              <label className="font-semibold text-gray-800">
                betalingen methode
              </label>
              <input
                name="preferredVehicle"
                value={formData.preferredVehicle}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg"
              />
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
