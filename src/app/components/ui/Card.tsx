import React from "react";

interface CardItem {
  img: string;
  title: string;
  text: string;
}

const cards: CardItem[] = [
  {
    img: "/aset/images/Rectangle 47.png",
    title: "Taxi Den Haag",
    text: "Snel een taxi in Den Haag nodig? Wij zijn altijd telefonisch, per e-mail of online bereikbaar. Dag en nacht! Wij staan voor u klaar!",
  },
  {
    img: "/aset/images/Rectangle 47 (1).png",
    title: "Vliegveld Taxi",
    text: "Taxinet is ook uw aanspreekpunt voor luchthavenvervoer met zéér scherpe prijzen. Wij brengen u naar elk gewenst vliegveld.",
  },
  {
    img: "/aset/images/Rectangle 47 (2).png",
    title: "Leerlingen Vervoer",
    text: "Kies voor veilig en betrouwbaar leerlingenvervoer van Taxinet Haaglanden. Altijd stipt op tijd vervoer van en naar school.",
  },
];

const Card: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-16 place-items-center">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="border-2 border-[#ff8900] rounded-lg overflow-hidden w-full max-w-sm bg-white shadow-md hover:shadow-lg transition"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="mt-3 text-gray-700">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
