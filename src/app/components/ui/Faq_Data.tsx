"use client";
import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why is Webflow the best nocode tool?",
    answer:
      "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
  },
  {
    question: "How to launch a Webflow website?",
    answer:
      "You can launch it by publishing directly from the Webflow Designer or Editor.",
  },
  {
    question: "When did Webflow was founded?",
    answer: "Webflow was founded in 2013.",
  },
  {
    question: "Who founded BRIX Templates?",
    answer:
      "BRIX Templates was founded by a group of Webflow designers and developers.",
  },
  {
    question: "Is NoCode the future of the web?",
    answer:
      "No-code tools are shaping the future by making web creation more accessible.",
  },
  {
    question: "Who are the Webflow founders?",
    answer:
      "Webflow was founded by Vlad Magdalin, Bryant Chou, and Sergie Magdalin.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const mid = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, mid);
  const right = faqs.slice(mid);

  return (
    <div className="bg-[#f8f8f8]  py-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-14">
        Veelgestelde <span className="text-[#ff8900]">Vragen</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 lg:w-3/4">
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          {left.map((item, index) => {
            const id = index; // unique per item
            const isOpen = openIndex === id;

            return (
              <div
                key={id}
                className={`rounded-xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#fff3e8] border-transparent"
                    : "bg-white border-gray-200"
                } shadow-sm`}
              >
                <button
                  onClick={() => toggle(id)}
                  className="w-full flex justify-between items-center text-left p-5 font-semibold text-[#0a043c]"
                >
                  <span>{item.question}</span>
                  <span
                    className={`text-white p-1.5 rounded-md ${
                      isOpen ? "bg-[#ff8900]" : "bg-[#eee]"
                    }`}
                  >
                    {isOpen ? (
                      <IoRemove className="text-xl text-white" />
                    ) : (
                      <IoAdd className="text-xl text-[#6b6b6b]" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-[#6b6b6b] text-[15px] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {right.map((item, index) => {
            const id = mid + index; // ensure unique index across both columns
            const isOpen = openIndex === id;

            return (
              <div
                key={id}
                className={`rounded-xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#fff3e8] border-transparent"
                    : "bg-white border-gray-200"
                } shadow-sm`}
              >
                <button
                  onClick={() => toggle(id)}
                  className="w-full flex justify-between items-center text-left p-5 font-semibold text-[#0a043c]"
                >
                  <span>{item.question}</span>
                  <span
                    className={`text-white p-1.5 rounded-md ${
                      isOpen ? "bg-[#ff8900]" : "bg-[#eee]"
                    }`}
                  >
                    {isOpen ? (
                      <IoRemove className="text-xl text-white" />
                    ) : (
                      <IoAdd className="text-xl text-[#6b6b6b]" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-[#6b6b6b] text-[15px] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
