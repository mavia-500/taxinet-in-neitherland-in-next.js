import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import ContactButton from "./ContactButton";

interface TableDataItem {
  destination: string;
  person1_4: number;
  person1_5: number;
}

const TablePrice = ({city}) => {
  console.log(city)
  const tableData: TableDataItem[] = [
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
    <div className="bg-white rounded-lg shadow-2xl relative top-[-20]    ">
      <h2 className="  text-2xl font-bold text-center mb-4 text-black">
        Vaste Tarieven Vanuit Den Haag
      </h2>

      <table className="w-auto  text-white mt-10">
        <thead className=" text-black bg-gray-300">
          <tr className=" text-white border rounded-2xl">
            <th className="px-6 py-3 text-left ">Destination</th>
            <th className="px-6 py-3 text-left ">1-4 persoon</th>
            <th className="px-6 py-3 text-left ">1-5 persoon</th>
          </tr>
        </thead>
        <tbody className="text-black ">
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-3 ">
                {item.destination}
              </td>
              <td className="px-6 py-3 ">
                £{item.person1_4},-
              </td>
              <td className="px-6 py-3 ">
                £{item.person1_5},-
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center">
        <ContactButton
          text="Direct reservation"
          icon2={<IoIosArrowForward className="w-5  mx-1" />}
          classname="flex items-center justify-center cursor-pointer mr-13 mt-10 w-full  bg-[#ff8900] text-white font-semibold rounded-xl "
        />
      </div>
    </div>
  );
};

export default TablePrice;
