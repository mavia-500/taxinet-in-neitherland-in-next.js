import React from 'react'
import { TiTickOutline } from "react-icons/ti";

const Section = () => {
    return (
        <div>
            <div className='flex justify-around  p-20 mt-30'>
                <div>
                    <h2 className='text=black font-normal text-5xl'>wij accepteren alle soorten online Betalingen</h2>
                </div>
                <div className='grid grid-cols-4'>
                    <img src="Group 331.png" alt="" />
                    <img src="Group 335.png" alt="" />
                    <img src="image 3.png" alt="" />
                    <img src="Group 331 (1).png" alt="" />
                    <img src="image.png" alt="" />
                    <img src="Group 332 (1).png" alt="" />
                    <img src="Group 332 (1).png" alt="" />
                    <img src="Group 332 (2).png" alt="" />

                </div>
            </div>

            <div className='flex p-10 justify-around items-center  w-full   '>
                <div className=' bg-[#2d2d2d] grid grid-cols-2  rounded-lg w-3/5 h-80'>
                    <div>
                        <img src="Group 1000001780.png" alt="" />
                    </div>

                    <div className='text-white mt-6'>
                        <h3 className='w-50 font-bold'>TAXINET HAAGLANDEN IS DE TAXI SERVICE IN DE REGIO DEN HAAG</h3>
                        <button className="cursor-pointer  mt-6 flex items-end justify-end bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-3 py-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">

                            <TiTickOutline className='h-5 w-5 mx-1' /> Alle Taxidiensten



                        </button>

                        <button className="cursor-pointer mr-13 mt-5 flex items-end justify-end bg-black  text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">

                            £ Onze TARIEVEN

                        </button>
                    </div>

                </div>
                <div className='w-[25%]  p-10 h-80 text-sm justify-center flex flex-col border-2 border-[#ff8900]  items-center text-center'>
                    <p>
                        Heeft u een taxi nodig in de regio Den Haag? Dan bent u bij Taxinet Haaglanden aan het juiste adres!
                        Wij bieden u uitstekende service aan voor concurrerende prijzen. Profiteer van onze taxidiensten in de
                        Haagse regio. Ook voor taxivervoer buiten de regio, zoals Wassenaar, Rijswijk, Scheveningen en Nootdorp
                        staan wij 7 dagen per week, 24 uur per dag voor u klaar!En wilt u naar Schiphol of een ander vliegveld?
                        Wij brengen u comfortabel met de taxi naar elke gewenste luchthaven.
                    </p>
                </div>

            </div>


            {/* /////////////product card */}
            <div className='grid grid-cols-3  gap-13 p-20 '>
                <div className='border-2 border-[#ff8900] w-[90%]'>
                    <img src="Rectangle 47.png" alt="" className='' />
                    <div className=' m-5'>
                        <h3 className='font-bold'>Taxi Den Haag</h3>
                        <p className='mt-5'>Snel een taxi in Den Haag nodig? Wij zijn altijd telefonisch, per e-mail of online bereikbaar. Dag en nacht! Wij staan voor u klaar!</p>

                    </div>
                </div>
                <div className='border-2 border-[#ff8900] w-[90%]'>
                    <img src="Rectangle 47 (1).png" alt="" />

                    <div className=' m-5'>
                        <h3 className='font-bold'>Vliegveld Taxi</h3>
                        <p className='mt-5'>STaxinet is ook uw aanspreekpunt voor luchthavenvervoer met zéér scherpe prijzen. Wij brengen u naar elk
                            gewenst vliegveld.</p>

                    </div>
                </div>

                <div className='border-2 border-[#ff8900] w-[90%]'>
                    <img src="Rectangle 47 (2).png" alt="" />

                    <div className=' m-5'>
                        <h3 className='font-bold'>Leerlingen Vervoer</h3>
                        <p className='mt-5'>Kies voor veilig en betrouwbaar leerlingenvervoer van Taxinet Haaglanden. Altijd stipt op tijd vervoer van en naar school.</p>

                    </div>
                </div>

            </div>


            <div className="bg-[#f8f1e9] flex flex-col md:flex-row justify-center">

                {/* Left Image */}
                <div className=" md:w-[50%] flex justify-center mb-8 mt-20 p-10 h-130 ">

                    <div className='bg-[#ff8900] w-[60%] relative'>
                        <img
                            src="image (1).png"
                            alt="Taxi driver"
                            className="rounded-md shadow-md  left-4  object-cover absolute h-full w-full bottom-4  "
                        />
                    </div>

                </div>

                {/* Right Content */}
                <div className="md:w-[40%] md:pl-10 space-y-5 mt-15 p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Reserveer 24/7 Uw Taxi In Den Haag En Omstreken
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        Individueel vervoer of groepsvervoer binnen en buiten Den Haag behoren
                        beiden tot ons aanbod. Ook biedt Taxinet Haaglanden leerlingenvervoer,
                        trouwvervoer, Schiphol taxi, groepsvervoer, zakelijk vervoer,
                        rolstoeltaxi en hotel taxiservice aan. U kunt stiptheid en veilige
                        betaalmogelijkheden van ons verwachten. Bovendien staan we 24 uur per
                        dag en 7 dagen in de week voor u klaar. Bel ons op
                        <span className="font-bold text-black"> 0858000365 </span>
                        en u ziet onze taxi in Den Haag en omstreken snel verschijnen!
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Al jarenlang brengt Taxinet Haaglanden u 24/7 naar de gewenste bestemming.
                    </p>

                    {/* Icons Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex items-start space-x-3 mt-8">
                            <img src="24-hours-support (1) 1 1.png" alt="" className="text-orange-500 text-2xl w-10 h-10"/>  
                            <p className="text-gray-800 text-sm">
                                24/7 Bereikbaar, Ook Voor Luchthavenvervoer
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 mt-8">
                             <img src="24-hours-support (1) 1 1 (1).png" alt="" className="text-orange-500 text-2xl w-10 h-10"/> 
                           
                            <p className="text-gray-800 text-sm">
                                Taxi Often Within 10 Minutes
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 mt-8">
                             <img src="24-hours-support (1) 1 1 (2).png" alt="" className="text-orange-500 text-2xl w-10 h-10"/> 
                            <p className="text-gray-800 text-sm">
                                Klantvriendelijke Chauffeurs
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 mt-8">
                             <img src="24-hours-support (1) 1 1 (3).png" alt="" className="text-orange-500 text-2xl w-10 h-10"/> 
                            <p className="text-gray-800 text-sm">
                                Betrouwbare En Klantgerichte Service
                            </p>
                        </div>

                        <div className="flex items-start space-x-3 mt-8">
                             <img src="24-hours-support (1) 1 1 (4).png" alt="" className="text-orange-500 text-2xl w-10 h-10"/> 
                            <p className="text-gray-800 text-sm">
                                Betrouwbare En Klantgerichte Service
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Section