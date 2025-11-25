import React from 'react'

const ZakelijkreserveringsformulierForm = () => {
  return (
   <div className="min-h-screen w-full bg-white  flex justify-center py-14 px-4 text-black">
        <div className="w-full max-w-4xl border border-orange-500 rounded-xl p-10 space-y-12 text-black">
          <h2 className="text-2xl font-semibold text-center">
            Gegevens Klant (Zakelijk)
          </h2>

          {/* Customer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm mb-1">Telefoonnummer  *</label>
              <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Emailadres *</label>
              <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
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
              <input className="bg-transparent border border-gray-600 rounded-lg p-3 focus:border-orange-500 focus:outline-none" />
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

          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 transition rounded-lg px-10 py-3 text-white font-semibold">
              VERZENDEN
            </button>
          </div>
        </div>
      </div>
  )
}

export default ZakelijkreserveringsformulierForm