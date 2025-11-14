import Image from "next/image";

const features = [
  {
    img: "1e8857cdcab00192d45240ee6307f96012e35c3f (1).png",
    title: "24/7 bereikbaar",
  },
  {
    img: "9c7a89b3a08526b8ec4679130bcf2331facff77a (1).png",
    title: "Taxi vaak binnen 10 min",
  },
  {
    img: "54e5c602b5f722a9ede925edf67db4dad88573d1.png",
    title: "Klantvriendelijke chauffeurs",
  },
  {
    img: "ffbc5cdde81d755375ca2741c658cfdb6584004f.png",
    title: "Betrouwbare service",
  },
];

export default function IconsBar() {
  return (
    <section className="w-full bg-[#1a1a1a] py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-white relative"
          >
            {/* Divider line except first element */}
            {index !== 0 && (
              <span className="hidden md:block absolute -left-8 h-12 w-px bg-gray-500" />
            )}

            {/* Image icon */}
            <div className="w-12 h-12 relative">
              <Image
                src={`/aset/icons/${item.img}`}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Text */}
            <p className="text-sm font-semibold leading-tight w-25">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
