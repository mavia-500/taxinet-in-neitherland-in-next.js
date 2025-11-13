import React from "react";
import { TiTickOutline } from "react-icons/ti";
import ContactButton from "../../ui/ContactButton";
import PaymentPartners from "../../ui/PaymentPartners";
import Card from "../../ui/Card";
import Image_Text from "../../ui/Image_Text";
import TablePrice from "../../ui/TablePrice";
import ImageLogs from "../../ui/ImageLogs";
const Section: React.FC = () => {
  return (
    <div>
<ImageLogs />
    
    <div className="w-full  container mx-auto relative ">
      
      <div className="grid gap-10 md:grid-cols-2 sm:grid-cols-1 relative ">
        <TablePrice />
        <PaymentPartners />
      </div>
      {/* Payment Section */}

      {/* Info Section */}
      <div className="flex flex-col lg:flex-row p-6 justify-around items-center gap-10 w-full container mx-auto">
        <div className="bg-[#2d2d2d] grid grid-cols-1 sm:grid-cols-2 rounded-lg w-full  h-auto">
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
            <div className="w-full  rounded-lg">
              <p>
                Heeft u een taxi nodig in de regio Den Haag? Dan bent u bij
                Taxinet Haaglanden aan het juiste adres! Wij bieden u
                uitstekende service aan voor concurrerende prijzen. Profiteer
                van onze taxidiensten in de Haagse regio. Ook voor taxivervoer
                buiten de regio, zoals Wassenaar, Rijswijk, Scheveningen en
                Nootdorp staan wij 7 dagen per week, 24 uur per dag voor u
                klaar! En wilt u naar Schiphol of een ander vliegveld? Wij
                brengen u comfortabel met de taxi naar elke gewenste luchthaven.
              </p>
            </div>

            <div className="flex mt-8 space-x-3">
              <ContactButton
                icon={<TiTickOutline className="h-5 w-5 mx-1" />}
                text="Alle Taxidiensten"
                classname="cursor-pointer mt-4  justify-center bg-[#ff8900] text-white font-semibold px-4 py-2 rounded-xl "
              />
              <ContactButton
                text="€ ONZE TARIEVEN"
                classname="cursor-pointer mt-4  justify-center bg-black text-white font-semibold px-9 rounded-xl "
              />
            </div>

            <div></div>
          </div>
        </div>
      </div>

      <Card />

      {/* Bottom Section */}
      <Image_Text />
    </div>
    </div>
  );
};

export default Section;
