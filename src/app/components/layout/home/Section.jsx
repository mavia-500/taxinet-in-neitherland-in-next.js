import React from "react";
import { TiTickOutline } from "react-icons/ti";
import ContactButton from "./layout/home/ui/ContactButton";
import PaymentPartners from "./layout/home/ui/PaymentPartners";
import Card from "./layout/home/ui/Card";
import Image_Text from "./layout/home/ui/Image_Text";

const Section = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Payment Section */}

      <PaymentPartners />
      {/* Info Section */}
      <div className="flex flex-col lg:flex-row p-6 md:p-10 justify-around items-center gap-10 w-full">
        <div className="bg-[#2d2d2d] grid grid-cols-1 sm:grid-cols-2 rounded-lg w-full lg:w-3/5 h-auto">
          <div>
            <img
              src="/aset/images/Group 1000001780.png"
              alt=""
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          <div className="text-white p-6 flex flex-col justify-center">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-4">
              TAXINET HAAGLANDEN IS DE TAXI SERVICE IN DE REGIO DEN HAAG
            </h3>

            <div>
              <ContactButton
                icon={<TiTickOutline className="h-5 w-5 mx-1" />}
                text="Alle Taxidiensten"
                classname="cursor-pointer mt-4  justify-center bg-[#ff8900] text-white font-semibold px-4 py-2 rounded-2xl "
              />
            </div>

            <div>
              <ContactButton
                text="€ ONZE TARIEVEN"
                classname="cursor-pointer mt-4  justify-center bg-black text-white font-semibold px-9 rounded-2xl "
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[25%] p-6 border-2 border-[#ff8900] text-sm text-center rounded-lg">
          <p>
            Heeft u een taxi nodig in de regio Den Haag? Dan bent u bij Taxinet
            Haaglanden aan het juiste adres! Wij bieden u uitstekende service
            aan voor concurrerende prijzen. Profiteer van onze taxidiensten in
            de Haagse regio. Ook voor taxivervoer buiten de regio, zoals
            Wassenaar, Rijswijk, Scheveningen en Nootdorp staan wij 7 dagen per
            week, 24 uur per dag voor u klaar! En wilt u naar Schiphol of een
            ander vliegveld? Wij brengen u comfortabel met de taxi naar elke
            gewenste luchthaven.
          </p>
        </div>
      </div>

      <Card />

      {/* Bottom Section */}
      <Image_Text />
    </div>
  );
};

export default Section;
