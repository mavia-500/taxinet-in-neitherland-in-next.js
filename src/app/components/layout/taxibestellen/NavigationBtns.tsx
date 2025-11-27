"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BusFront,
  Calendar,
  Hotel,
  Briefcase,
  Car,
  Plane,
} from "lucide-react";
import Link from "next/link";

// Define the structure for a button item
interface ButtonItem {
  id: number;
  label: string;
  subLabel?: string;
  navigationPage: string;
}

// Data for the buttons, translated from the image
const BUTTON_ITEMS: ButtonItem[] = [
  {
    id: 1,
    label: "Particulier",
    subLabel: "reserveringsformulier",
    navigationPage: "particulierreserveringsformulier",
  },
  {
    id: 2,
    label: "Zakelijk",
    subLabel: "reserveringsformulier",
    navigationPage: "zakelijkreserveringsformulier",
  },
  {
    id: 3,
    label: "Hotel",
    subLabel: "reserveringsformulier",
    navigationPage: "hotelreserveringsformulier",
  },
  { id: 4, label: "Rolstoel Taxi", navigationPage: "rolstoeltaxi" },
  { id: 5, label: "Trouw Vervoer", navigationPage: "trouwvervoer" },
  { id: 6, label: "Offerte Aanvraag", navigationPage: "offerteaanvraag" },
  { id: 7, label: "Airport Service", navigationPage: "airportservice" },
  { id: 7, label: "Sleepdienst", navigationPage: "sleepdienst" },
  { id: 7, label: "Auto Verhuur", navigationPage: "autoverhuur" },
];

/**
 * A responsive, horizontally-scrolling button slider component styled with Tailwind CSS.
 * It features an active state and navigation arrows for scrolling.
 */
const NavigationBtns: React.FC = () => {
  // State to track which button is currently active (highlighted)
  const [activeIndex, setActiveIndex] = useState(1);
  // Ref to the main container for enabling horizontal scrolling via buttons
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to handle horizontal scrolling
  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Scroll by 300px
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  // Effect to ensure the active item is visible when the component mounts or active state changes.
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(
        `.button-item-${activeIndex}`
      ) as HTMLElement;

      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="bg-black/90 p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full ">
        {/* Top accent line */}
        <div className="h-1 w-full mb-10"></div>

        {/* Slider Container */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll("left")}
            className="p-3 md:p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition duration-300 shadow-xl focus:outline-none flex-shrink:0"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Buttons List Container - Horizontally Scrolling */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-scroll no-scrollbar py-2"
            // Ensure container takes up available space
          >
            {BUTTON_ITEMS.map((item) => {
              const isActive = item.id === activeIndex;
              const buttonClasses = isActive
                ? "bg-amber-500 hover:bg-orange-600 shadow-orange-500/50" // Highlighted (Orange)
                : "bg-gray-600 hover:bg-gray-700 shadow-gray-700/50"; // Default (Dark Gray)

              return (
                <Link
                  href={`/taxibestellen/${item.navigationPage.toLocaleLowerCase()}`}
                >
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(item.id)}
                    className={`
                    button-item-${item.id} // Custom class for scrolling reference
                    ${buttonClasses}
                    text-white 
                    text-center 
                     
                    rounded-xl 
                    space-x-8
                    py-5
                    px-6
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    text-sm 
                    md:text-base 
                    font-semibold 
                    transition 
                    duration-300 
                    transform 
                    hover:scale-[1.03] 
                    focus:outline-none 
                    focus:ring-4 
                    focus:ring-orange-500/50
                    shadow-2xl
                    
                  `}
                  >
                    <span className="uppercase tracking-wide">
                      {item.label}
                    </span>
                    {item.subLabel && (
                      <span className="text-xs font-normal opacity-80 mt-1">
                        {item.subLabel}
                      </span>
                    )}
                  </button>
                </Link>
              );
            })}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll("right")}
            className="p-3 md:p-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition duration-300 shadow-xl focus:outline-none "
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Custom CSS to hide the scrollbar (optional but improves appearance) */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default NavigationBtns;
