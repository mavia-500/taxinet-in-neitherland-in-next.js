import React from "react";
import TablePrice from "./TablePrice";

const ImageLogs: React.FC = () => {
  return (
    <div className="relative bg-black container mx-auto">
      <div className="overflow-hidden">
        <h1 className="text-[26vw] font-bold text-white -translate-x-20 opacity-10">
          TAXINET
        </h1>
      </div>

      <div className="absolute top-[5%] flex divide-x divide-gray-500 space-x-[1vw] ">
        <div className="flex flex-col items-center text-center justify-center">
          <img
            src="/aset/images/24-hours-support 1.png"
            alt="24/7"
            className="w-[6vw] h-auto"
          />
          <p className="md:text-[2vh] md:w-[12vw] w-full">24/7 bereikbaar</p>
        </div>

        <div className="flex flex-col items-center text-center justify-center">
          <img
            src="/aset/images/car 3.png"
            alt="loading"
            className="w-[6vw] h-auto"
          />
          <p className="md:text-[2vh] md:w-[12vw] w-full">
            Taxi vaak binnen 10 min
          </p>
        </div>

        <div className="flex flex-col items-center text-center justify-center">
          <img
            src="/aset/images/Group 329.png"
            alt="load.."
            className="w-[6vw] h-auto"
          />
          <p className="md:text-[2vh] md:w-[20vw] w-full">
            klantvriendelijke cahuffeurs
          </p>
        </div>

        <div className="flex flex-col items-center text-center justify-center">
          <img
            src="/aset/images/responsible 1.png"
            alt=""
            className="w-[6vw] h-auto"
          />
          <p className="md:text-[2vh] md:w-[12vw] w-full">
            Betrouwbare service
          </p>
        </div>
      </div>

      <div className="absolute right-0 top-[15%] ">
        <img
          src="/aset/images/contemporary-shiny-luxury-transportation-performan-2023-11-27-04-53-49-utc 1.png"
          alt="loading..."
          className="w-[70vw] h-auto"
        />
      </div>

      <TablePrice />
    </div>
  );
};

export default ImageLogs;
