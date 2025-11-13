import React from "react";

const ServicesWithLogos: React.FC = () => {
  const imageWithLogo = [
    {
      img_link: "1e8857cdcab00192d45240ee6307f96012e35c3f (1).png",
      text: "24/7 bereikbaar",
    },

    {
      img_link: "9c7a89b3a08526b8ec4679130bcf2331facff77a (1).png",
      text: "Taxi vaak binnen 10 min.",
    },
    {
      img_link: "54e5c602b5f722a9ede925edf67db4dad88573d1 (2).png",
      text: "Klantvriendelijke chauffeurs",
    },
    {
      img_link: "ffbc5cdde81d755375ca2741c658cfdb6584004f.png",
      text: "Betrouwbare service",
    },
  ];
  return (
    <div className="bg-black overflow-hidden">

    
    <div className=" md:flex items-center md:justify-around space-x-10 p-10 grid grid-cols-2 animate-logo overflow-hidden">
      {imageWithLogo.map((data, index) => (
        <div className="block text-center mt-6" key={index}>
          <img
            src={`/aset/images/${data.img_link}`}
            alt="loading"
            className="h-20 w-20 "
          />
          <p className="text-white w-27 flex  mt-2">{data.text}</p>
        </div>
      ))}
      <div></div>
    </div>
    </div>
  );
};

export default ServicesWithLogos;
