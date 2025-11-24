import React from 'react'
import { PiWhatsappLogoFill } from 'react-icons/pi'
import { LuPhoneCall } from 'react-icons/lu'
import { IoMail } from 'react-icons/io5'    
const FormandSideText = () => {
  return (
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          {/* LEFT — CONTACT FORM */}
          <div className="bg-white text-black rounded-3xl p-10 shadow-xl">
            <h2 className="text-4xl font-bold mb-6">
              Get in <span className="text-amber-500">Touch</span>
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Uw Naam *"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
              <input
                type="email"
                placeholder="Uw E-mail *"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Uw Telefoonnummer..."
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
              <textarea
                //   rows="5"
                placeholder="Uw Bericht... *"
                className="w-full border border-gray-300 p-3 rounded-lg"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
              >
                Versturen
              </button>

              <div className="flex items-center space-x-2 text-sm">
                <input type="checkbox" />
                <p>
                  Ik ga akkoord met de{" "}
                  <span className="text-amber-500 cursor-pointer">
                    privacy verklaring.
                  </span>
                </p>
              </div>
            </form>
          </div>

          {/* RIGHT — CHAT + CALL INFO */}
          <div
            className="relative rounded-3xl overflow-hidden bg-cover bg-center "
            style={{ backgroundImage: "url('aset/images/2a384837c0922b5020326b83f3ab31e029ff501c.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative p-10 space-y-10">
              {/* CHAT SECTION */}
              <div className="  p-6 rounded-xl">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <PiWhatsappLogoFill className="text-white "/> Chat Met Ons
                </h3>
                <p className="text-sm mt-2">
                  Wil je direct contact met een van onze klantenservice medewerkers? Stuur ons dan een bericht via de chatfunctie op de website. De chat vind je rechtsonder in beeld
                </p>
              </div>

              {/* CALL SECTION */}
              <div className=" p-6 rounded-xl">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <LuPhoneCall/> Bellen
                </h3>
                <p className="text-sm mt-2">
                  Wil je direct contact met een van onze chaffeurs via de telefoon? Bel dan Naar: 
                  <p className="font-bold">0858000365</p>
                </p>
                <p className="mt-3">U kunt ons ook mailen via:</p>
                <p className="font-bold flex items-center gap-3"><IoMail />info@taxinet.nl</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default FormandSideText