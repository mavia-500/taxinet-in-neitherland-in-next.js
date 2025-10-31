"use client";
import React, { useState } from 'react';
import ContactButton from './ui/ContactButton.jsx';
import { IoCallOutline, IoMenu, IoClose } from 'react-icons/io5';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const selectGroups = [
        {
            placeHolder: 'taxiDiensten',
            options: ['Goedkope Taxi', 'Luxe Taxi', 'Groepsvervoer'],
        },
        {
            placeHolder: 'taxi service',
            options: ['24/7 Service', 'Zakelijke Taxi', 'Privé Chauffeur'],
        },
        {
            placeHolder: 'Taxi Tarieven Den Haag',
            options: ['Binnenstad', 'Luchthaven', 'Langere ritten'],
        },
        {
            placeHolder: 'Taxi Bestellen',
            options: ['Online', 'Telefonisch', 'App'],
        },
        {
            placeHolder: 'Airport Taxi',
            options: ['Schiphol', 'Rotterdam The Hague', 'Eindhoven'],
        },
        {
            placeHolder: 'Taxi Bedrijven',
            options: ['Taxinet', 'HTMC', 'CityTaxi'],
        },
    ];

    return (
        <nav className="bg-[#1d1d1d]">
            <div className="flex items-center bg-[#1d1d1d] text-white justify-around p-10">
                {/* Logo */}
                <img src="/aset/logo/Taxinet logo 1 6.png" className="w-30 h-auto" alt="Taxinet Logo" />

                {/* Hamburger Icon for medium and small screens */}
                <div className="2xl:hidden">
                    <button onClick={toggleMenu} className=" text-white ">
                        {isMenuOpen ? (
                            <IoClose className="w-8 h-8" />
                        ) : (
                            <IoMenu className="w-8 h-8" />
                        )}
                    </button>
                </div>

                {/* Navigation Items - Hidden on medium and small screens unless menu is open */}
                <div
                    className={`${isMenuOpen ? 'flex' : 'hidden'}
    2xl:flex flex-col 2xl:flex-row 2xl:items-center items-start text-white 
       gap-6  
    absolute 2xl:static top-20 left-0 w-full 2xl:w-auto 
    bg-[#1d1d1d] 2xl:bg-transparent p-6 2xl:p-0 z-10`}
                >
                    {selectGroups.map((group, i) => (
                        <select
                            id={group.placeHolder}
                            defaultValue={group.placeHolder}
                            key={i}
                            className="bg-[#1d1d1d] text-white  lg:w-auto"
                        >
                            <option key={i} hidden>
                                {group.placeHolder}
                            </option>
                            {group.options.map((opt, j) => (
                                <option key={j} className="text-black">
                                    {opt}
                                </option>
                            ))}
                        </select>
                    ))}

                    <h3 className="text-white">Over Taxinet</h3>

                    {/* <button className="flex items-center gap-2 bg-[#ff8900] hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-2xl shadow-md hover:shadow-lg">
                        <IoCallOutline  />
                        Taxi Den Haag Contact
                    </button> */}
                    <ContactButton text="Taxi Den Haag Contact" classname="bg-[#ff8900] text-white" icon={<IoCallOutline className="w-5 h-5 " />} />
                </div>
            </div>
        </nav>
    );
};

export default Header;