import React from "react";
import ContactButton from "./ContactButton";
import { GiTotem } from "react-icons/gi";

const BerkenForm: React.FC = () => {
  return (
    <div className="bg-[#747577] text-black p-4 sm:p-6 border-2  rounded-lg shadow-md">
      <div className="text-white font-bold mb-3 text-sm sm:text-base">
        1. Bereken uw ritprijs
        <p className="text-white font-normal mt-1">Van</p>
      </div>

      {/* FORM 1 */}
      <form
        id="vanform1"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-black text-bold"
      >
        <select
          defaultValue="Adres"
          className="border border-[#efeeed] p-2 rounded  bg-[white]"
        >
          <option value="Adres" hidden>
            Adres
          </option>
        </select>
        <input
          type="text"
          placeholder="Nr.s"
          className="border-2  border-[#efeeed] p-2 rounded  bg-[white] placeholder-black"
        />
        <input
          type="text"
          placeholder="Plats"
          className="border-2 border-[#efeeed] p-2 rounded  bg-[white] placeholder-black"
        />
        <input
          type="text"
          placeholder="Straat"
          className="border-2 border-[#efeeed] p-2 rounded  bg-[white] placeholder-black"
        />
      </form>

      {/* FORM 2 */}
      <label
        htmlFor="vanform2"
        className="text-white font-bold text-sm sm:text-base"
      >
        Van
      </label>
      <form
        id="vanform2"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4"
      >
        <select
          defaultValue="Adres"
          className="border border-[#efeeed] p-2 rounded  bg-[white]"
        >
          <option value="Adres" hidden>
            Adres
          </option>
        </select>
        <input
          type="text"
          placeholder="Nr."
          className="border-2 border-[#efeeed] p-2 rounded  bg-[white] placeholder-black"
        />
        <input
          type="text"
          placeholder="Plats"
          className="border-2 border-[#efeeed] p-2 rounded  bg-[white] placeholder-black"
        />
        <input
          type="text"
          placeholder="Straat"
          className="border-2 border-[#efeeed] p-2 rounded  bg-[white] placeholder-black"
        />
        <select
          defaultValue="1Persoon"
          className="border-2 border-[#efeeed] p-2 rounded  bg-[white]"
        >
          <option value="1Persoon" hidden>
            1 persoon
          </option>
        </select>
        <select
          defaultValue="Roistoelbus"
          className="border border-[#efeeed] p-2 rounded  bg-[white]"
        >
          <option value="Roistoelbus" hidden>
            Rolstoelbus
          </option>
        </select>
      </form>

      {/* SUBMIT BUTTON */}
      <div className="flex items-center justify-center">
        <ContactButton
        icon2={null}
          text="Acties Bekijken"
          icon={<GiTotem className="w-5 h-5" />}
          classname="i bg-[#ff8900] text-white border-2 rounded-lg border-amber-300 w-full items-center justify-center"
        />
      </div>
    </div>
  );
};

export default BerkenForm;
