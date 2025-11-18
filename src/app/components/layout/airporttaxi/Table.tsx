import { IoCallOutline } from "react-icons/io5";
import ContactButton from "../../ui/ContactButton";
import { TableAirportTaxi } from "../../../data/TableDataAirportTaxi";
export default function Table() {
  
  // console.log(city)
  // const entry=city.city
  // console.log(city.city)
  // console.log(entry)
  // const data=TableAirportTaxi[entry]
  // console.log(data)
  const prices = [
    {
      destination: "Taxi Rotterdam The Hague Airport",
      p1to4: 50,
      p5to8: 60,
    },
    {
      destination: "Taxi Schiphol Airport",
      p1to4: 85,
      p5to8: 95,
    },
    {
      destination: "Taxi Eindhoven Airport",
      p1to4: 220,
      p5to8: 250,
    },
    {
      destination: "Taxi Lelystad Airport",
      p1to4: 220,
      p5to8: 250,
    },
  ];
  return (
    <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl">
      <h2 className="text-2xl font-bold mb-6  border-l-2 border-[#ff8900] p-7">
      taxi serviuice airport to haag daug
      </h2>

      <table className="w-full border border-gray-300 text-left text-sm">
        <thead className="bg-[#ff8900] text-white border border-black">
          <tr>
            <th className="p-3  border border-black">Airport Service Giervliet</th>
            <th className="p-3  border border-black">1–4 person</th>
            <th className="p-3">1–5 person</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {prices.map((item, i) => (
            <tr key={i} className="border-t border-black">
              <td className="p-3 border border-black">{item.destination}</td>
              <td className="p-3 border border-black">€{item.p1to4},-</td>
              <td className="p-3">€{item.p5to8},-</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex gap-4 mt-6 items-center justify-center">
        <ContactButton text="0858000365" classname="bg-[#ff8900] rounded-xl text-white px-7 py-5" icon={<IoCallOutline className="" />}/>
        <ContactButton text="DIRECT RESERVEREN" classname="bg-black rounded-xl text-white px-7 py-5" />
      </div>
    </div>
  );
}
