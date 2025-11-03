import React from "react";
import ContactButton from "../../ui/ContactButton";
import { GiTotem } from "react-icons/gi";

const BerkenForm = () => {
  return (
    <div className="bg-white text-black p-4 sm:p-6 border-2 border-black rounded-lg shadow-md">
      <div className="text-[#ff8900] font-bold mb-3 text-sm sm:text-base">
        1. Bereken uw ritprijs
        <p className="text-[#ff8900] font-normal mt-1">Van</p>
      </div>

      {/* FORM 1 */}
      <form
        id="vanform1"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4"
      >
        <select
          defaultValue="Adres"
          className="border border-[#efeeed] p-2 rounded"
        >
          <option value="Adres" hidden>
            Adres
          </option>
        </select>
        <input
          type="text"
          placeholder="Nr."
          className="border-2 border-[#efeeed] p-2 rounded"
        />
        <input
          type="text"
          placeholder="Plats"
          className="border-2 border-[#efeeed] p-2 rounded"
        />
        <input
          type="text"
          placeholder="Straat"
          className="border-2 border-[#efeeed] p-2 rounded"
        />
      </form>

      {/* FORM 2 */}
      <label
        htmlFor="vanform2"
        className="text-[#ff8900] font-bold text-sm sm:text-base"
      >
        Van
      </label>
      <form
        id="vanform2"
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4"
      >
        <select
          defaultValue="Adres"
          className="border border-[#efeeed] p-2 rounded"
        >
          <option value="Adres" hidden>
            Adres
          </option>
        </select>
        <input
          type="text"
          placeholder="Nr."
          className="border-2 border-[#efeeed] p-2 rounded"
        />
        <input
          type="text"
          placeholder="Plats"
          className="border-2 border-[#efeeed] p-2 rounded"
        />
        <input
          type="text"
          placeholder="Straat"
          className="border-2 border-[#efeeed] p-2 rounded"
        />
        <select
          defaultValue="1Persoon"
          className="border-2 border-[#efeeed] p-2 rounded"
        >
          <option value="1Persoon" hidden>
            1 persoon
          </option>
        </select>
        <select
          defaultValue="Roistoelbus"
          className="border border-[#efeeed] p-2 rounded"
        >
          <option value="Roistoelbus" hidden>
            Rolstoelbus
          </option>
        </select>
      </form>

      {/* SUBMIT BUTTON */}

      <div className="flex tems-center justify-center">
        <ContactButton
          text="Acties Bekijken"
          icon={<GiTotem className="w-5 h-5" />}
          classname="i bg-[#ff8900] text-white border-2 rounded-lg border-amber-300"
        />
      </div>
    </div>
  );
};

export default BerkenForm;
