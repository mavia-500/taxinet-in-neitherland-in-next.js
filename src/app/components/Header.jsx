import React from 'react'
import { IoCallOutline } from "react-icons/io5";

const Header = () => {
    const selectGroups = [
        {
            placeHolder: "TaxiDienesten",
            options: ["Goedkope Taxi", "Luxe Taxi", "Groepsvervoer"],
        },
        {
            placeHolder: "Taxi Service",
            options: ["24/7 Service", "Zakelijke Taxi", "Privé Chauffeur"],
        },
        {
            placeHolder: "Taxi Taireven Den Haag",
            options: ["Binnenstad", "Luchthaven", "Langere ritten"],
        },
        {
            placeHolder: "Taxi Bsetellen",
            options: ["Online", "Telefonisch", "App"],
        },
        {
            placeHolder: "Airport Taxi",
            options: ["Schiphol", "Rotterdam The Hague", "Eindhoven"],
        },
        {
            placeHolder: "Taxi Bedrijven",
            options: ["Taxinet", "HTMC", "CityTaxi"],
        },

    ];
    return (
        <div>
            <div className='flex p-10   justify-around bg-black text-white'>
                <img src="Taxinet logo 1 6.png" className='w-30 h-auto '  alt="" />
                {selectGroups.map((group, i) => (
                    
                        <select id={group.placeHolder} defaultValue={group.placeHolder} key={i} >
                            <option key={i} hidden>
                                {group.placeHolder}
                            </option>
                            {group.options.map((opt, j) => (
                                <option key={j} className='text-black'>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    
                ))}
                <h3 className='mt-2'>Over Taxinet</h3>

                <button className="flex items-center gap-2 bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <IoCallOutline className="w-5 h-5" />
                    Taxi Den Haag Contact
                </button>

            </div>
        </div>
    )
}

export default Header