import ContactButton from "../../ui/ContactButton";
import Table from "./Table";
import { IoCallOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('/aset/images/47ce5837e4ede89591c73956bd0303af3e27f649.jpg')", // replace with your image url
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex justify-between items-center max-w-7xl">
        {/* Left side text */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            TAXI SERVICE DEN HAAG TO AIRPORT
          </h1>

          <div className="flex gap-4">
            <a href="tel:0858000365">
              <ContactButton
                text="0858000365"
                icon={<IoCallOutline className="" />}
                classname="bg-[#ff8900] rounded-xl px-5 py-4"
              />
            </a>

            <ContactButton
              text="Acties Bekijken"
              classname="bg-black rounded-xl px-5 py-4"
            />
          </div>
        </div>

        {/* Right side table */}
        <div className="hidden md:block">
          <Table />
        </div>
      </div>
    </section>
  );
}
