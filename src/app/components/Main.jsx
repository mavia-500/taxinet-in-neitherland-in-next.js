import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { GiTotem } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import ContactButton from './ui/ContactButton';


const Main = () => {

  const tableData = [
    { destination: 'Taxi Rotterdam The Hague Airport', person1_4: 50, person1_5: 60 },
    { destination: 'Taxi Schiphol Airport', person1_4: 85, person1_5: 95 },
    { destination: 'Taxi Eindhoven Airport', person1_4: 220, person1_5: 250 },
    { destination: 'Taxi Lelystad Airport', person1_4: 220, person1_5: 250 },
  ]
  return (
    <div className='bg-black  text-white '>
      <div className="bg-black text-white">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-6 sm:p-10 lg:p-16 xl:p-20 items-center">

          {/* LEFT SECTION */}
          <div>
            <h3 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Welkom bij
            </h3>

            <h3 className="text-[#ff8900] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Taxinet
            </h3>
            <h3 className="text-[#ff8900] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Haaglanden
            </h3>

            <p className="mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base md:text-lg max-w-[600px]">
              Als u op zoek bent naar een goedkope en betrouwbare taxi in Den Haag en omstreken,
              dan bent u bij Taxinet Haaglanden aan het juiste adres. Wij bieden zowel particulier
              als zakelijk taxivervoer.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
              {/* <button className="flex items-center bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
        </button> */}
              <ContactButton text="0858000365" icon={<IoCallOutline className="w-5 h-5 mr-1" />} classname="bg-[#ff8900] text-white" />

              {/* <button className="flex items-center bg-white hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
          Direct Reserveren
        </button> */}

              <ContactButton text="Direct Reserveren" classname="bg-white text-black font-bold" />


              {/* <button className="flex items-center bg-black hover:bg-yellow-500 text-white font-semibold px-4 py-2 border-2 border-[#874b07] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
          <IoEyeSharp className="w-5 h-5 mr-1" />
          Acties Bekijken
        </button> */}

              <ContactButton text="Acties Bekijken" icon={<IoEyeSharp className="w-5 h-5 mr-1" />} classname="bg-black text-white border-2 border-[#874b07] rounded-2xl" />

            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full">
            <div className="text-center mb-4">
              <h2 className="font-bold text-xl sm:text-2xl">Bereken uw prijs</h2>
              <p className="text-xs sm:text-sm font-normal">
                Reserveer minimaal 3 uur van tevoren
              </p>
            </div>

            <div className="bg-white text-black p-4 sm:p-6 border-2 border-black rounded-lg shadow-md">
              <div className="text-[#ff8900] font-bold mb-3 text-sm sm:text-base">
                1. Bereken uw ritprijs
                <p className="text-black font-normal mt-1">Van</p>
              </div>

              {/* FORM 1 */}
              <form id="vanform1" className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <select defaultValue="Adres" className="border border-[#efeeed] p-2 rounded">
                  <option value="Adres" hidden>Adres</option>
                </select>
                <input type="text" placeholder="Nr." className="border-2 border-[#efeeed] p-2 rounded" />
                <input type="text" placeholder="Plats" className="border-2 border-[#efeeed] p-2 rounded" />
                <input type="text" placeholder="Straat" className="border-2 border-[#efeeed] p-2 rounded" />
              </form>

              {/* FORM 2 */}
              <label htmlFor="vanform2" className="text-[#ff8900] font-bold text-sm sm:text-base">Van</label>
              <form id="vanform2" className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <select defaultValue="Adres" className="border border-[#efeeed] p-2 rounded">
                  <option value="Adres" hidden>Adres</option>
                </select>
                <input type="text" placeholder="Nr." className="border-2 border-[#efeeed] p-2 rounded" />
                <input type="text" placeholder="Plats" className="border-2 border-[#efeeed] p-2 rounded" />
                <input type="text" placeholder="Straat" className="border-2 border-[#efeeed] p-2 rounded" />
                <select defaultValue="1Persoon" className="border-2 border-[#efeeed] p-2 rounded">
                  <option value="1Persoon" hidden>1 persoon</option>
                </select>
                <select defaultValue="Roistoelbus" className="border border-[#efeeed] p-2 rounded">
                  <option value="Roistoelbus" hidden>Rolstoelbus</option>
                </select>
              </form>

              {/* SUBMIT BUTTON */}
              {/* <button className="flex items-center justify-center gap-2 w-full sm:w-auto mx-auto bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-4 py-2 border-2 border-amber-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
          <GiTotem className="w-5 h-5" />
          Bereken ritprijs
        </button> */}
              <div className='flex tems-center justify-center'>
                <ContactButton text="Acties Bekijken" icon={<GiTotem className="w-5 h-5" />} classname="i bg-[#ff8900] text-white border-2 rounded-lg border-amber-300" />

              </div>


            </div>
          </div>
        </div>
      </div>

      <div className="relative    bg-black">
        <div className='overflow-hidden'>
          <h1 className="text-[26vw] font-bold text-white   -translate-x-20 opacity-10">
            TAXINET
          </h1>
        </div>

        <div className='absolute top-[5%]  flex divide-x divide-gray-500 space-x-[1vw] '>
          <div className='flex flex-col items-center text-center justify-center   '>
            <img src="/aset/images/24-hours-support 1.png" alt="24/7" className='w-[6vw] h-auto' />
            <p className='md:text-[2vh] md:w-[12vw] w-full' >24/7 bereikbaar</p>

          </div>

          <div className='flex flex-col items-center text-center justify-center   '>
            <img src="/aset/images/car 3.png" alt="loading" className='w-[6vw] h-auto' />
            <p className='md:text-[2vh] md:w-[12vw] w-full'>
              Taxi vaak binnen 10 min
            </p>
          </div>

          <div className='flex flex-col items-center text-center justify-center   '>
            <img src="/aset/images/Group 329.png" alt="load.." className='w-[6vw] h-auto' />

            <p className='md:text-[2vh] md:w-[20vw] w-full'>
              klantvriendelijke cahuffeurs
            </p>

          </div>

          <div className='flex flex-col items-center text-center justify-center'>
            <img src="/aset/images/responsible 1.png" alt="" className='w-[6vw] h-auto  ' />
            <p className='md:text-[2vh] md:w-[12vw] w-full '>
              Betrouwbare service
            </p>

          </div>

        </div>
        <div className='absolute  right-0  top-[15%]   '>
          <img src="/aset/images/contemporary-shiny-luxury-transportation-performan-2023-11-27-04-53-49-utc 1.png" alt="loading..." className='w-[70vw] h-auto ' />
        </div>
        <div className="  bg-white  sm:ml-40 sm:p-20 sm:w-190 relative top-36  rounded-lg shadow-lg ">
          <h2 className=" border-l-2 p-5 border-[#ff8900] text-2xl font-bold text-center mb-4 text-black">Vaste Tarieven Vanuit Den Haag</h2>

          <table className=" w-auto border-2 border-black text-white mt-10 ">
            <thead className="border-2 border-black text-black">
              <tr className='bg-[#ff8900] text-white border-2 border-black'>
                <th className="px-6 py-3 text-left border ">Destination</th>
                <th className="px-6 py-3 text-left border">1-4 persoon</th>
                <th className="px-6 py-3 text-left border">1-5 persoon</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {tableData.map((item, index) => (
                <tr className="" key={index}>
                  <td className="px-6 py-3 border border-gray-500">{item.destination}</td>
                  <td className="px-6 py-3 border border-gray-500">£{item.person1_4},-</td>
                  <td className="px-6 py-3 border border-gray-500">£{item.person1_5},-</td>
                </tr>
              ))}



            </tbody>
          </table>
          <div className="flex justify-self-end">
            {/* <button className="cursor-pointer mr-13 mt-10 flex items-end justify-end bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-3 py-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">

              Direct reservation
              <IoIosArrowForward className='w-5 h-5 mx-1' />

            </button> */}

            <ContactButton text="Direct reservation" icon2={ <IoIosArrowForward className='w-5 h-5 mx-1' />} classname="cursor-pointer mr-13 mt-10 items-end justify-end bg-[#ff8900] text-white font-semibold rounded-2xl " />
          </div>

        </div>
      </div>



    </div>
  )
}

export default Main