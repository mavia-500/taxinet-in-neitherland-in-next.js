import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { GiTotem } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";


const Main = () => {

    const tableData = [
        { destination: 'Taxi Rotterdam The Hague Airport', person1_4: 50, person1_5: 60 },
        { destination: 'Taxi Schiphol Airport', person1_4: 85, person1_5: 95 },
        { destination: 'Taxi Eindhoven Airport', person1_4: 220, person1_5: 250 },
        { destination: 'Taxi Lelystad Airport', person1_4: 220, person1_5: 250 },
    ]
    return (
        <div className='bg-black  text-white '>
            <div className=' md:grid md:grid-cols-2  sm:grid-cols-1 p-20  '>

                <div>
                    <h3 className='text-white font-bold text-7xl'>
                        Welkom bij          
                    </h3>

                    <h3 className='text-[#ff8900] font-bold text-7xl '>
                        Taxinet
                    </h3>
                    <h3 className='text-[#ff8900] font-bold text-7xl '>
                       Haaglanden</h3>
                        
                    <p className='mt-8 text-gray-500 w-110'>
                        Als u op zoek bent naar een goedkope en betrouwbare taxi in Den Haag en omstreken, dan bent u bij Taxinet Haaglanden aan het juiste adres. Wij bieden zowel particulier als zakelijk taxivervoer.</p>

                    <div className='flex mt-10 space-x-3'>

                        <button className="flex items-center  bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-3 py-2   rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                            <IoCallOutline className="w-5 h-5 mx-1" />
                            0858000365
                        </button>
                        <button className="flex items-center  bg-white hover:bg-yellow-500 text-black font-semibold px-3 py-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">

                            Direct Reserveren
                        </button>
                        <button className="flex items-center  bg-black hover:bg-yellow-500 text-white font-semibold px-3 py-2 border-2 border-[#874b07]  rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                            <IoEyeSharp
                                className="w-5 h-5 mx-1" />
                            Acties Bekijken
                        </button>
                    </div>
                </div>

                <div className='w-130  '>
                    <div className='text-center'>
                        <h2 className='font-bold text-2xl'>
                            Bereken uw prijs
                        </h2>
                        <p className='text-sm font-normal  '>reserveer minimal 3 uur van to voren </p>
                    </div>

                    <div className='bg-white text-black p-5 border-2 border-black rounded-lg '>
                        <div className='text-[#ff8900] font-bold'>
                            1. Bereken uw ritprijs
                            <p>Van</p>


                        </div>
                        <form action="" id='vanform1' className='grid grid-cols-2 gap-4 mb-4  '>
                            <select name="" id="" defaultValue="Adres" className='border border-[#efeeed] '>
                                <option value="Adres" hidden>Adres</option>
                            </select>
                            <input type="text" placeholder='Nr.' className='border-2 border-[#efeeed]' />
                            <input type="text" placeholder='Plats' className='border-2 border-[#efeeed]' />
                            <input type="text" placeholder='Straat' className='border-2 border-[#efeeed]' />
                        </form>


                        <label htmlFor="vanform2" className='text-[#ff8900] font-bold'>Van</label>
                        <form action="" id='vanform2' className='grid grid-cols-2 gap-4 mb-4'>
                            {/* <label htmlFor="">Van</label> */}
                            <select name="" id="" defaultValue="Adres" className='border border-[#efeeed] text-black'>
                                <option value="Adres" hidden>Adres</option>

                            </select>
                            <input type="text" placeholder='Nr.' className='border-2 border-[#efeeed]' />
                            <input type="text" placeholder='Plats' className='border-2 border-[#efeeed]' />
                            <input type="text" placeholder='Straat' className='border-2 border-[#efeeed]' />
                            <select name="" id="" defaultValue="1Persoon" className='text-black border-2 border-[#efeeed]' >
                                <option value="1Persoon" hidden>1 persoon</option>
                            </select>
                            <select name="" id="" defaultValue="Roistoelbus" className='border border-[#efeeed] text-black'>
                                <option value="Roistoelbus" hidden>Rolstoelbus</option>
                            </select>

                        </form>
                        <button className="flex items-center justify-center gap-2 mx-auto bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-4 py-2 border-2 border-amber-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <GiTotem className="w-5 h-5" />
                           Bereken ritprijs
                        </button>





                    </div>
                </div>
            </div>
            <div className="relative  h-auto   ">
                <div className='relative overflow-hidden'>
                    <h1 className="text-[26rem] font-bold text-white opacity-10 leading-none -translate-x-20 -translate-y-20">
                        TAXINET
                    </h1>
                </div>

                <div className='absolute top-10 flex divide-x divide-gray-500 space-x-3 '>
                    <div className='flex flex-col items-center text-center justify-center  w-40 '>
                        <img src="/aset/images/24-hours-support 1.png" alt="24/7" className='h-7 w-7' />
                        <p className='px-6' >24/7 bereikbaar</p>

                    </div>

                    <div className='flex flex-col items-center text-center justify-center  w-40 '>
                        <img src="/aset/images/car 3.png" alt="loading" />
                        <p>
                            Taxi vaak binnen 10 min
                        </p>
                    </div>

                    <div className='flex flex-col items-center text-center justify-center  w-40 '>
                        <img src="/aset/images/Group 329.png" alt="load.." />

                        <p>
                            klantvriendelijke cahuffeurs
                        </p>

                    </div>

                    <div className='flex flex-col items-center text-center justify-center  w-30 '>
                        <img src="/aset/images/responsible 1.png" alt="" />
                        <p>
                            Betrouwbare service
                        </p>

                    </div>

                </div>
                <div className='absolute  right-10  top-5'>
                    <img src="/aset/images/contemporary-shiny-luxury-transportation-performan-2023-11-27-04-53-49-utc 1.png" alt="loading..." />
                </div>
                <div className="  bg-white   ml-40 p-20 w-190 relative top-36  rounded-lg shadow-lg ">
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
                                    <td  className="px-6 py-3 border border-gray-500">{item.destination}</td>
                                    <td  className="px-6 py-3 border border-gray-500">£{item.person1_4},-</td>
                                    <td  className="px-6 py-3 border border-gray-500">£{item.person1_5},-</td>
                                </tr>
                            ))}



                        </tbody>
                    </table>
                    <div className="flex justify-self-end">
                        <button className="cursor-pointer mr-13 mt-10 flex items-end justify-end bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-3 py-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">

                            Direct reservation
                            <IoIosArrowForward className='w-5 h-5 mx-1' />

                        </button>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Main