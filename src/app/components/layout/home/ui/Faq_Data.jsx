"use client";
import React from "react";
import { useState } from "react";

import { FaMinusCircle } from "react-icons/fa";

import { FaPlusCircle } from "react-icons/fa";

const Faq_Data = () => {
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
    <div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <p className="text-[#ff8900] inline-block p-2  bg-black rounded-2xl">
          Vragen? Wij hebben antwoorden
        </p>
        <h2 className="text-white font-bold text-4xl mt-3 mb-10">
          Veelgestelde <span className="text-[#ff8900]">Vragen</span>
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
                <div className="bg-black p-5 mt-5 border-2 rounded-3xl font-bold">
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
  );
};

export default Faq_Data;
