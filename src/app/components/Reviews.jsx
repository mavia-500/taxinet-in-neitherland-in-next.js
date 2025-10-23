"use client";
import React from 'react'
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Reviews = () => {
    const testimonials = [
        {
            name: "Mike T.",
            role: "Project Manager",
            text: "Increasy has been a game-changer for our team. We save hours each week and the collaboration tools are fantastic.",
            img: "/24-hours-support (1) 1 1 (1).png", // replace with actual image path
        },
        {
            name: "John P.",
            role: "Marketing Director",
            text: "The automation features alone have saved us so much time. Increasy is a must-have for any growing team.",
            img: "/Taxinet logo 1 6.png",
        },
        {
            name: "David K.",
            role: "Sales Executive",
            text: "Since adopting Increasy, I’ve seen a big boost in my productivity. It keeps me organized and lets me focus.",
            img: "/vercel.svg",
        },
        {
            name: "Phillip W.",
            role: "Operations Lead",
            text: "Our productivity has never been higher. Increasy’s tracking tools keep us aligned and motivated.",
            img: "/window.svg",
        },
        {
            name: "Carlos R.",
            role: "Software Engineer",
            text: "With Increasy, our productivity soared. I spend less time on repetitive tasks and more on real development work. It’s a game changer!",
            img: "/world forum 4.png",
        },
    ];
    return (
        <section className="bg-[#2d2d2d] text-white mt-15 ">
            <h2 className="text-center text-3xl font-bold p-10">
                Beoordelingen Van Klanten
            </h2>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto pb-10 ">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-black p-6 rounded-2xl shadow-lg border border-gray-700"
                    >
                        <p className="text-gray-300 mb-4 border-b border-gray-600 pb-5">{t.text}</p>

                        <div className="flex items-center gap-4 mt-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src={t.img}
                                    alt={t.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-semibold ">{t.name}</p>
                               
                                <div className="flex text-yellow-400 mt-1">
                                    {Array(5)
                                        .fill()
                                        .map((_, idx) => (
                                            <FaStar key={idx} className='mx-1'/>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews