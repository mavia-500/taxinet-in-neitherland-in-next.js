"use client";
import React from 'react'
import { useState } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

import { FaPlusCircle } from "react-icons/fa";
import ContactButton from './ui/ContactButton';





const Faqs = () => {
    const faqs = [
        {
            question: "What is Increasy?",
            answer:
                "lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum lorem ispum",
        },
        {
            question: "How does the free trial work?",
            answer:
                "Ja, onze taxi’s zijn 24 uur per dag en 7 dagen per week beschikbaar, ook tijdens feestdagen.",
        },
        {
            question: "Welke betaalmethoden accepteren jullie?",
            answer:
                "U kunt contant betalen, met pin of met creditcard. Zakelijke klanten kunnen ook op rekening rijden.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0); // First question open by default

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="bg-[#2a2a2a]">
            <div className="p-10 flex justify-center">
                <div className="bg-black border-2 rounded-lg w-[90%] p-10 flex flex-col items-center text-center">
                    <h3 className="text-white font-bold text-4xl mb-10">
                        Klaar Om Nu Uw Taxi Te Boeken?
                    </h3>
                    <div className="text-white flex gap-6">
                        <button className="flex item items-center shadow-amber-800 bg-[#ff8900] hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-all">
                            <IoCallOutline className='mr-3' /> 0858000365
                        </button>

                        
                        <button className="flex items-center bg-transparent border border-[#ff8900] hover:bg-yellow-500 hover:text-black text-white font-semibold px-6 py-3 rounded-lg transition-all">
                            DIRECT RESERVEREN <IoIosArrowForward className='ml-3' />

                        </button>
                    </div>
                </div>


            </div>



            {/* /////////////fqs */}

            <div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center px-6">
                <div className="max-w-2xl w-full text-center">
                    <p className="text-[#ff8900] inline-block p-2  bg-black rounded-2xl">Vragen? Wij hebben antwoorden</p>
                    <h2 className="text-white font-bold text-4xl mt-3 mb-10">
                        Veelgestelde  <span className="text-[#ff8900]">Vragen</span>
                    </h2>

                    <div className="space-y-4 text-left">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className=" rounded-xl p-5 bordershadow-lg transition-all"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="bg-black p-5 font-bold w-full flex justify-between items-center text-left text-white rounded-3xl text-lg"
                                >
                                    {faq.question}
                                    {openIndex === index ? (
                                        <FaMinusCircle className="text-[#ff8900] w-6 h-6" />
                                    ) : (
                                        <FaPlusCircle className="text-[#ff8900] w-6 h-6" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className='bg-black p-5 mt-5 border-2 rounded-3xl font-bold'>
                                        <p className="text-gray-300 mt-3 text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>

                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Faqs