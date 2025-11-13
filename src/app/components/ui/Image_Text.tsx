import React from "react";

interface IconItem {
  img: string;
  text: string;
}

const Image_Text: React.FC = () => {
  const icons: IconItem[] = [
    {
      img: "/aset/images/24-hours-support (1) 1 1.png",
      text: "24/7 Bereikbaar, Ook Voor Luchthavenvervoer",
    },
    {
      img: "/aset/images/24-hours-support (1) 1 1 (1).png",
      text: "Taxi Often Within 10 Minutes",
    },
    {
      img: "/aset/images/24-hours-support (1) 1 1 (2).png",
      text: "Klantvriendelijke Chauffeurs",
    },
    {
      img: "/aset/images/24-hours-support (1) 1 1 (3).png",
      text: "Zeer Scherpe Tarieven",
    },
    {
      img: "/aset/images/24-hours-support (1) 1 1 (4).png",
      text: "Betrouwbare En Klantgerichte Service",
    },
  ];

  return (
   <div className="container mx-auto mt-20 p-10 rounded-2xl  homeBackground bg-cover">
{/* Wrapper */}
  <div className="flex flex-col lg:flex-row ">

    {/* LEFT SIDE (IMAGE 50%) */}
    <div className="w-full lg:w-1/2  overflow-hidden  ">
      
      <img
        src="/aset/images/47ce5837e4ede89591c73956bd0303af3e27f649.jpg"
        alt="Taxi driver"
        className="w-full h-[70vh]  object-contain "
      />
      </div>

    {/* RIGHT SIDE (TEXT 50%) */}
    <div className="w-full lg:w-1/2 space-y-5 mt-8 lg:mt-0">
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        Reserveer 24/7 uw taxi in Den Haag en omstreken
      </h2>

      <p className="text-white leading-relaxed">
        Individueel vervoer of groepsvervoer binnen en buiten Den Haag behoren
        beiden tot ons aanbod. Ook biedt Taxinet Haaglanden leerlingenvervoer,
        trouwvervoer, Schiphol taxi, groepsvervoer, zakelijk vervoer,
        rolstoeltaxi en hotel taxiservice aan. U kunt stiptheid en veilige
        betaalmogelijkheden van ons verwachten. Bovendien staan we 24 uur per
        dag en 7 dagen in de week voor u klaar. Bel ons op
        <span className="font-bold text-white"> 0858000365 </span>
        en u ziet onze taxi in Den Haag en omstreken snel verschijnen!
      </p>

      <p className="text-white leading-relaxed">
        Al jarenlang brengt Taxinet Haaglanden u 24/7 naar de gewenste bestemming.
      </p>

      {/* Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {icons.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-3 mt-4 t">
            <img src={item.img} alt="" className="w-10 h-10 fill-white " />
            <p className="text-white text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

  );
};

export default Image_Text;
