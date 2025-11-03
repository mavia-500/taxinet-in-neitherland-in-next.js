import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ContactButton from "../../ui/ContactButton";

const TablePrice = () => {
  const tableData = [
    {
      destination: "Taxi Rotterdam The Hague Airport",
      person1_4: 50,
      person1_5: 60,
    },
    { destination: "Taxi Schiphol Airport", person1_4: 85, person1_5: 95 },
    { destination: "Taxi Eindhoven Airport", person1_4: 220, person1_5: 250 },
    { destination: "Taxi Lelystad Airport", person1_4: 220, person1_5: 250 },
  ];
  return (
    <div className="  bg-white  sm:ml-40 sm:p-20 sm:w-190 relative top-36  rounded-lg shadow-lg ">
      <h2 className=" border-l-2 p-5 border-[#ff8900] text-2xl font-bold text-center mb-4 text-black">
        Vaste Tarieven Vanuit Den Haag
      </h2>

      <table className=" w-auto border-2 border-black text-white mt-10 ">
        <thead className="border-2 border-black text-black">
          <tr className="bg-[#ff8900] text-white border-2 border-black">
            <th className="px-6 py-3 text-left border ">Destination</th>
            <th className="px-6 py-3 text-left border">1-4 persoon</th>
            <th className="px-6 py-3 text-left border">1-5 persoon</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {tableData.map((item, index) => (
            <tr className="" key={index}>
              <td className="px-6 py-3 border border-gray-500">
                {item.destination}
              </td>
              <td className="px-6 py-3 border border-gray-500">
                £{item.person1_4},-
              </td>
              <td className="px-6 py-3 border border-gray-500">
                £{item.person1_5},-
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-self-end">
        <ContactButton
          text="Direct reservation"
          icon2={<IoIosArrowForward className="w-5 h-5 mx-1" />}
          classname="cursor-pointer mr-13 mt-10 items-end justify-end bg-[#ff8900] text-white font-semibold rounded-2xl "
        />
      </div>
    </div>
  );
};

export default TablePrice;
