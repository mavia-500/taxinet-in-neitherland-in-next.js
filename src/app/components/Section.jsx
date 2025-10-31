import React from 'react'
import { TiTickOutline } from "react-icons/ti";
import ContactButton from './ui/ContactButton';

const Section = () => {
    return (
        <div className="w-full overflow-hidden">
            {/* Payment Section */}
            <div className="flex flex-col md:flex-row justify-around items-center gap-10 p-6 md:p-16 mt-40 text-center md:text-left">
                <h2 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Wij accepteren alle soorten online betalingen
                </h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6">
                    <img src="/aset/images/Group 331.png" alt="" className="w-16 sm:w-20 md:w-24 h-auto" />
                    <img src="/aset/images/Group 335.png" alt="" className="w-16 sm:w-20 md:w-24 h-auto" />
                    <img src="/aset/images/image 3.png" alt="" className="w-16 sm:w-20 md:w-24 h-auto" />
                    <img src="/aset/images/Group 331 (1).png" alt="" className="w-16 sm:w-20 md:w-24 h-auto" />
                    <img src="/aset/images/image.png" alt="" className="w-16 sm:w-20 md:w-24 h-auto" />
                    <img src="/aset/images/Group 332 (1).png" alt="" className="w-16 sm:w-20 md:w-24 h-auto" />
                    <img src="/aset/images/Group 332 (1).png" alt="" className="w-16 sm:w-20 md:w-24 h-auto" />
                    <img src="/aset/images/Group 332 (2).png" alt="" className="w-16 sm:w-20 md:w-24 h-auto" />
                </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col lg:flex-row p-6 md:p-10 justify-around items-center gap-10 w-full">
                <div className="bg-[#2d2d2d] grid grid-cols-1 sm:grid-cols-2 rounded-lg w-full lg:w-3/5 h-auto">
                    <div>
                        <img src="/aset/images/Group 1000001780.png" alt="" className="w-full h-full object-cover rounded-l-lg" />
                    </div>

                    <div className="text-white p-6 flex flex-col justify-center">
                        <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-4">
                            TAXINET HAAGLANDEN IS DE TAXI SERVICE IN DE REGIO DEN HAAG
                        </h3>

                        {/* <button className="cursor-pointer mt-4 flex items-center justify-center bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-fit">
                            <TiTickOutline className="h-5 w-5 mx-1" /> Alle Taxidiensten
                        </button> */}
                        <div>
                            <ContactButton icon={<TiTickOutline className="h-5 w-5 mx-1" />} text="Alle Taxidiensten" classname="cursor-pointer mt-4  justify-center bg-[#ff8900] text-white font-semibold px-4 py-2 rounded-2xl " />

                        </div>

                        {/* <button className="cursor-pointer mt-4 flex items-center justify-center bg-black text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-fit">
                            € ONZE TARIEVEN
                        </button> */}

                        <div>
                             <ContactButton  text="€ ONZE TARIEVEN" classname="cursor-pointer mt-4  justify-center bg-black text-white font-semibold px-9 rounded-2xl " />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[25%] p-6 border-2 border-[#ff8900] text-sm text-center rounded-lg">
                    <p>
                        Heeft u een taxi nodig in de regio Den Haag? Dan bent u bij Taxinet Haaglanden aan het juiste adres! Wij bieden u uitstekende service aan voor concurrerende prijzen. Profiteer van onze taxidiensten in de Haagse regio. Ook voor taxivervoer buiten de regio, zoals Wassenaar, Rijswijk, Scheveningen en Nootdorp staan wij 7 dagen per week, 24 uur per dag voor u klaar! En wilt u naar Schiphol of een ander vliegveld? Wij brengen u comfortabel met de taxi naar elke gewenste luchthaven.
                    </p>
                </div>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-16 place-items-center">
                {[
                    { img: "/aset/images/Rectangle 47.png", title: "Taxi Den Haag", text: "Snel een taxi in Den Haag nodig? Wij zijn altijd telefonisch, per e-mail of online bereikbaar. Dag en nacht! Wij staan voor u klaar!" },
                    { img: "/aset/images/Rectangle 47 (1).png", title: "Vliegveld Taxi", text: "Taxinet is ook uw aanspreekpunt voor luchthavenvervoer met zéér scherpe prijzen. Wij brengen u naar elk gewenst vliegveld." },
                    { img: "/aset/images/Rectangle 47 (2).png", title: "Leerlingen Vervoer", text: "Kies voor veilig en betrouwbaar leerlingenvervoer van Taxinet Haaglanden. Altijd stipt op tijd vervoer van en naar school." }
                ].map((card, idx) => (
                    <div key={idx} className="border-2 border-[#ff8900] rounded-lg overflow-hidden w-full max-w-sm bg-white shadow-md hover:shadow-lg transition">
                        <img src={card.img} alt={card.title} className="w-full object-cover" />
                        <div className="p-5">
                            <h3 className="font-bold text-lg">{card.title}</h3>
                            <p className="mt-3 text-gray-700">{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="bg-[#f8f1e9] flex flex-col md:flex-row justify-center items-center md:items-start p-6 md:p-10 gap-10">
                {/* Left Image */}
                <div className="md:w-1/2 flex   ">
                    <div className=" w-3/4 sm:w-2/3 md:w-[60%]  border rounded-md ">
                        <img
                            src="/aset/images/image (1).png"
                            alt="Taxi driver"
                            className=" w-full h-full  border-l-14 border-b-14 border-[#ff8900]"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:w-[45%] space-y-5">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Reserveer 24/7 uw taxi in Den Haag en omstreken
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        Individueel vervoer of groepsvervoer binnen en buiten Den Haag behoren beiden tot ons aanbod. Ook biedt Taxinet Haaglanden leerlingenvervoer, trouwvervoer, Schiphol taxi, groepsvervoer, zakelijk vervoer, rolstoeltaxi en hotel taxiservice aan. U kunt stiptheid en veilige betaalmogelijkheden van ons verwachten. Bovendien staan we 24 uur per dag en 7 dagen in de week voor u klaar. Bel ons op
                        <span className="font-bold text-black"> 0858000365 </span>
                        en u ziet onze taxi in Den Haag en omstreken snel verschijnen!
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Al jarenlang brengt Taxinet Haaglanden u 24/7 naar de gewenste bestemming.
                    </p>

                    {/* Icons Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                            { img: "/aset/images/24-hours-support (1) 1 1.png", text: "24/7 Bereikbaar, Ook Voor Luchthavenvervoer" },
                            { img: "/aset/images/24-hours-support (1) 1 1 (1).png", text: "Taxi Often Within 10 Minutes" },
                            { img: "/aset/images/24-hours-support (1) 1 1 (2).png", text: "Klantvriendelijke Chauffeurs" },
                            { img: "/aset/images/24-hours-support (1) 1 1 (3).png", text: "Zeer Scherpe Tarieven" },
                            { img: "/aset/images/24-hours-support (1) 1 1 (4).png", text: "Betrouwbare En Klantgerichte Service" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3 mt-4">
                                <img src={item.img} alt="" className="w-10 h-10" />
                                <p className="text-gray-800 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
