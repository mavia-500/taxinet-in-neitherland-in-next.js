import React from "react";
import Image from "next/image";

const ApplicationForm: React.FC = () => {
  return (
    <div className="container mx-auto min-h-screen bg-gray-800 text-white p-4 md:p-8 border-4 border-amber-500">
      <div className="">
        {/* === Section 1: Your Details (Jouw gegevens) === */}
        <section className=" p-6 md:p-8 rounded-lg mb-8  ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold ">Jouw gegevens</h2>
              <div className="space-y-2">
                <label htmlFor="voornaam" className="block text-sm font-medium">
                  Uw voornaam
                </label>
                <input
                  type="text"
                  id="voornaam"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="achternaam"
                  className="block text-sm font-medium"
                >
                  Uw achternaam
                </label>
                <input
                  type="text"
                  id="achternaam"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="telefoonnummer"
                  className="block text-sm font-medium"
                >
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="telefoonnummer"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="emailadres"
                  className="block text-sm font-medium"
                >
                  Emailadres
                </label>
                <input
                  type="email"
                  id="emailadres"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
            </div>
            <div className=" lg:block lg:col-span-1 relative h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <video
                    src="/aset/videos/vecteezy_man-order-taxi-with-smartphone-application-and-safe-drive_36252034.mp4"
                    className="absolute inset-0 w-full h-full object-contain "
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-700 my-8" />

        {/* === Section 2: Address and Documents (Adres & Documenten) === */}
        <section className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold ">Adres</h2>
              <div className="space-y-2">
                <label
                  htmlFor="straatnaam"
                  className="block text-sm font-medium"
                >
                  Straatnaam
                </label>
                <input
                  type="text"
                  id="straatnaam"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="nr" className="block text-sm font-medium">
                  Nr
                </label>
                <input
                  type="text"
                  id="nr"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="postcode" className="block text-sm font-medium">
                  Postcode
                </label>
                <input
                  type="text"
                  id="postcode"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="woonplaats"
                  className="block text-sm font-medium"
                >
                  Woonplaats
                </label>
                <input
                  type="text"
                  id="woonplaats"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="cv" className="block text-sm font-medium">
                  CV
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="file-upload-cv"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-white  transition duration-150"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-3 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0a2 2 0 100 4 2 2 0 000-4zm0 0h-4"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-amber-500">choose file</p>
                    </div>
                    <input id="file-upload-cv" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="begeleidende-brief"
                  className="block text-sm font-medium"
                >
                  Begeleidende brief
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="file-upload-brief"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-white transition duration-150"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-3 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16V4m0 0L3 8m4-4l4 4m6 0a2 2 0 100 4 2 2 0 000-4zm0 0h-4"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-amber-500">choose file</p>
                    </div>
                    <input
                      id="file-upload-brief"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="toelichting"
                  className="block text-sm font-medium"
                >
                  Toelichting
                </label>
                <textarea
                  rows={6}
                  id="toelichting"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 resize-none transition duration-150"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-700 my-8" />

        {/* === Section 3: Additional Transport Questions === */}
        <section className="bg-gray-800 p-6 md:p-10 rounded-lg shadow-xl mb-8">
          <h1 className="text-3xl font-bold text-center mb-10 text-white">
            Aanvullende vragen vervoer
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-6">
              {/* Heb je een rijbewijs? */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-white">
                  Heb je een rijbewijs?
                </label>
                <div className="flex space-x-4">
                  {["ja", "nee"].map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        id={`rijbewijs-${option}`}
                        name="rijbewijs"
                        type="radio"
                        className="h-4 w-4 text-yellow-500 border-gray-600 bg-gray-700 focus:ring-yellow-500"
                      />
                      <label
                        htmlFor={`rijbewijs-${option}`}
                        className="ml-2 text-sm text-white"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categorie rijbewijs */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-white">
                  Voor welke categorie is je rijbewijs geldig?
                </label>
                <div className="flex flex-wrap gap-4">
                  {["A", "B", "C", "D", "E"].map((cat) => (
                    <div key={cat} className="flex items-center">
                      <input
                        id={`cat-${cat}`}
                        name="rijbewijs-categorie"
                        type="radio"
                        className="h-4 w-4 text-yellow-500 border-gray-600 bg-gray-700 focus:ring-yellow-500"
                      />
                      <label
                        htmlFor={`cat-${cat}`}
                        className="ml-2 text-sm text-white"
                      >
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="rijbewijs-nummer"
                  className="block text-sm font-medium"
                >
                  Nummer rijbewijs
                </label>
                <input
                  type="text"
                  id="rijbewijs-nummer"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>

              {/* Gedrag verklaring */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-white">
                  Heb je redenen om aan te nemen dat de gemeente je geen
                  verklaring omtrent het gedrag betreffende de functie van
                  chauffeur kleinschalig vervoer zal verstrekken?
                </label>
                <div className="flex space-x-4">
                  {["ja", "nee"].map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        id={`gedrag-${option}`}
                        name="gedrag-verklaring"
                        type="radio"
                        className="h-4 w-4 text-yellow-500 border-gray-600 bg-gray-700 focus:ring-yellow-500"
                      />
                      <label
                        htmlFor={`gedrag-${option}`}
                        className="ml-2 text-sm text-white"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                "rijervaring-bus",
                "kennis-regio",
                "kennis-europa",
                "code-95",
              ].map((key) => {
                const labels: Record<string, string> = {
                  "rijervaring-bus":
                    "Heb je rijervaring op een touringcar of bus of in het (geregelde) personenvervoer?",
                  "kennis-regio":
                    "Heb je geografische kennis van de regio waarin je solliciteert?",
                  "kennis-europa": "Heb je geografische kennis van Europa?",
                  "code-95": "Ben je in het bezit van code-95?",
                };
                return (
                  <div key={key} className="space-y-2">
                    <label className="block text-base font-medium text-white">
                      {labels[key]}
                    </label>
                    <div className="flex space-x-4">
                      {["ja", "nee"].map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            id={`${key}-${option}`}
                            name={key}
                            type="radio"
                            className="h-4 w-4 text-yellow-500 border-gray-600 bg-gray-700 focus:ring-yellow-500"
                          />
                          <label
                            htmlFor={`${key}-${option}`}
                            className="ml-2 text-sm text-white"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="space-y-2">
                <label
                  htmlFor="code-95-geldig"
                  className="block text-sm font-medium"
                >
                  Zo ja, tot wanneer is de code-95 geldig?
                </label>
                <input
                  type="text"
                  id="code-95-geldig"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-700 my-8" />

        {/* === Section 4: Je voorkeuren === */}
        <section className="bg-gray-800 p-6 md:p-10 rounded-lg shadow-xl mb-8 ">
          <h1 className="text-3xl font-bold text-center mb-10 text-white">
            Je voorkeuren
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="arbeidsuren"
                  className="block text-base font-medium"
                >
                  Gewenst aantal arbeidsuren per week?
                </label>
                <input
                  type="number"
                  id="arbeidsuren"
                  className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>

              {/* Oproepbasis */}
              <div className="space-y-2">
                <label className="block text-base font-medium text-white">
                  Ik ben bereid om op oproepbasis te werken
                </label>
                <div className="flex space-x-4">
                  {["ja", "nee"].map((opt) => (
                    <div key={opt} className="flex items-center">
                      <input
                        id={`oproepbasis-${opt}`}
                        name="oproepbasis"
                        type="radio"
                        className="h-4 w-4 text-yellow-500 border-gray-600 bg-gray-700 focus:ring-yellow-500"
                      />
                      <label
                        htmlFor={`oproepbasis-${opt}`}
                        className="ml-2 text-sm text-white"
                      >
                        {opt}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Werktypen */}
              <div className="space-y-4">
                <label className="block text-base font-medium text-white">
                  Ik ben bereid tot het werken van:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Dagdiensten", name: "dagdiensten" },
                    { label: "Avonddiensten", name: "avonddiensten" },
                    { label: "Weekenddiensten", name: "weekenddiensten" },
                    { label: "Nachtdiensten", name: "nachtdiensten" },
                    {
                      label: "Taxi / Taxibus / Touringcar*",
                      name: "taxi-touringcar",
                    },
                    {
                      label: "Taxi - vraagafhankelijk vervoer",
                      name: "taxi-vraagafhankelijk",
                    },
                    { label: "Taxi - Zakelijk vervoer", name: "taxi-zakelijk" },
                    {
                      label: "Tour - Touringcar chauffeur",
                      name: "tour-chauffeur",
                    },
                    {
                      label: "Taxi - Groepsvervoer",
                      name: "taxi-groepsvervoer",
                    },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center">
                      <input
                        id={`worktype-${item.name}`}
                        name="werktype"
                        type="radio"
                        className="h-4 w-4 text-yellow-500 border-gray-600 bg-gray-700 focus:ring-yellow-500"
                      />
                      <label
                        htmlFor={`worktype-${item.name}`}
                        className="ml-2 text-sm text-white"
                      >
                        {item.label}
                      </label>
                    </div>
                  ))}
                  <div></div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="chauffeurspas-datum"
                  className="block text-base font-medium"
                >
                  Afgiftedatum chauffeurspas taxi
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="chauffeurspas-datum"
                    className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 pr-10 transition duration-150"
                    placeholder=""
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 9h.01M9 16h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="brutoloon"
                  className="block text-base font-medium"
                >
                  Huidig brutoloon in euro&apos;s
                </label>
                <input
                  type="text"
                  id="brutoloon"
                  className="w-full p-3 bg-white text-black border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                  placeholder=""
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <label className="block text-base font-medium text-white mb-2">
                Ik ben in het bezit van*
              </label>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "CCV Doelgroepenvervoer Taxi",
                  "CCV Sociale Vaardigheden Taxi",
                  "Geldige Chauffeurspas Taxi",
                  "Verlopen Chauffeurspas Taxi",
                  "CCV Vakdiploma Taxichauffeur",
                  "CCV-T (taxivervoer)",
                  "SKKP vakdiploma taxichauffeur",
                  "CCV Chauffeursdiploma",
                  "Praktijkdiploma CCV-T+",
                  "CCV-B (Personenvervoer)",
                  "Het Nieuwe Rijden certificaat",
                  "Antislippcursus",
                  "Bedrijfshulpverleningscertificaat",
                  "EHBO-diploma (geldig)",
                  "Diploma levensreddend handelen",
                  "Geen van bovenstaande",
                ].map((label) => {
                  const name = label.toLowerCase().replace(/[^a-z0-9]/g, "-");
                  return (
                    <div key={name} className="flex items-center">
                      <input
                        id={`checkbox-${name}`}
                        name={name}
                        type="radio"
                        className="h-4 w-4 text-yellow-500 border-gray-600 bg-gray-700 rounded focus:ring-yellow-500"
                      />
                      <label
                        htmlFor={`checkbox-${name}`}
                        className="ml-3 text-sm text-white"
                      >
                        {label}
                      </label>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2 pt-6">
                <label
                  htmlFor="opzegtermijn"
                  className="block text-base font-medium"
                >
                  Opzegtermijn
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="opzegtermijn"
                    className="w-full p-3 text-black bg-white border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 pr-10 transition duration-150"
                    placeholder=""
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 9h.01M9 16h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <button
              type="submit"
              className="w-full max-w-sm px-8 py-4 text-xl font-semibold rounded-lg bg-amber-500 text-white hover:bg-orange-400 transition duration-200 shadow-lg uppercase tracking-wider"
            >
              Verzenden
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApplicationForm;
