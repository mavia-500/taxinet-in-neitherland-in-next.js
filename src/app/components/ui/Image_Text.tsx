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
    <div className="bg-[#f8f1e9] flex flex-col md:flex-row justify-center items-center md:items-start p-6 md:p-10 gap-10">
      {/* Left Image */}
      <div className="md:w-1/2 flex">
        <div className="w-3/4 sm:w-2/3 md:w-[60%] border rounded-md">
          <img
            src="/aset/images/image (1).png"
            alt="Taxi driver"
            className="w-full h-full border-l-14 border-b-14 border-[#ff8900]"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-[45%] space-y-5">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Reserveer 24/7 uw taxi in Den Haag en omstreken
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Individueel vervoer of groepsvervoer binnen en buiten Den Haag behoren
          beiden tot ons aanbod. Ook biedt Taxinet Haaglanden leerlingenvervoer,
          trouwvervoer, Schiphol taxi, groepsvervoer, zakelijk vervoer,
          rolstoeltaxi en hotel taxiservice aan. U kunt stiptheid en veilige
          betaalmogelijkheden van ons verwachten. Bovendien staan we 24 uur per
          dag en 7 dagen in de week voor u klaar. Bel ons op
          <span className="font-bold text-black"> 0858000365 </span>
          en u ziet onze taxi in Den Haag en omstreken snel verschijnen!
        </p>

        <p className="text-gray-700 leading-relaxed">
          Al jarenlang brengt Taxinet Haaglanden u 24/7 naar de gewenste
          bestemming.
        </p>

        {/* Icons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {icons.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-3 mt-4">
              <img src={item.img} alt="" className="w-10 h-10" />
              <p className="text-gray-800 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Image_Text;
