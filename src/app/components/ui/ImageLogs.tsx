import React from "react";
import TablePrice from "./TablePrice";

const ImageLogs: React.FC = () => {
  return (
    <div className=" bg-black ">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 container mx-auto p-10">
        <div className="grid grid-cols-2 grid-rows-2 divide-x divide-y divide-gray-500 divide-dashed    ">
          <div className="flex flex-col items-center text-center justify-center">
            <img
              src="/aset/images/24-hours-support 1.png"
              alt="24/7"
              className="w-[6vw] h-auto"
            />
            <p className="md:text-[2vh] md:w-[12vw] w-full">24/7 bereikbaar</p>
          </div>

          <div className="flex flex-col items-center text-center justify-center border-r-0">
            <img
              src="/aset/images/car 3.png"
              alt="loading"
              className="w-[6vw] h-auto"
            />
            <p className="md:text-[2vh] md:w-[12vw] w-full">
              Taxi vaak binnen 10 min
            </p>
          </div>

          <div className="flex flex-col items-center text-center justify-center border-b-0">
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

        <div className="">
          <img
            src="/aset/images/d8b4e47247ce1b87f6f201e11ab6375574153a95.png"
            alt="loading..."
            className="w-[70vw] h-auto"
          />
        </div>

        {/* <TablePrice /> */}
      </div>
    </div>
  );
};

export default ImageLogs;
