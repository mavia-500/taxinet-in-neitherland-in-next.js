import React from "react";
import Nav from "../../components/ui/Nav";
import Header from "../../components/layout/taxiservice/Header";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import Blogs from "../../components/layout/taxiservice/Blogs";
import ContactButton from "../../components/ui/ContactButton";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../../components/layout/home/Footer";
import { BlogData } from "../../data/BlogData";

const page = () => {
  console.log(BlogData);
  return (
    <div className="">
      <div className="bg-black">
        <Nav />
      </div>
      <Header />
      <ServicesWithLogos />
      <div className="bg-black p-10">
        <div className="container mx-auto">
          <Blogs data={BlogData.taxidenhaag.blog1} />
          <ContactButton
            text="online reserveren"
            classname="text-black bg-white rounded-xl  mt-10 py-6 px-7 cursor-pointer"
          />
          <div className="mt-10">
            <Blogs data={BlogData.taxidenhaag.blog2} />
          </div>
        </div>
      </div>
      <div className="bg-[#f7efe5] h-[30vh]">
        <div className="container mx-auto flex flex-wrap  items-center justify-center space-x-8 text-center h-full">
          <ContactButton
            text="alle  taxidiensten"
            classname="bg-[#ff8900] text-white rounded-xl px-7 py-6 cursor-pointer "
          />
          <ContactButton
            text="€ ONZE TARIEVEN"
            classname="bg-black text-white rounded-xl px-7 py-6 cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-black p-10">
        <Blogs data={BlogData.taxidenhaag.blog3} />
      </div>

      <div className="bg-black h-screen flex items-center justify-center text-center">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            BOOK YOUR TAXI NOW
          </h1>
          <ContactButton
            text="0858000365"
            icon={<FaPhoneAlt />}
            classname="bg-[#ff8900] sm:py-9 sm:px-8 text-white  rounded-md flex items-center gap-3 sm:text-4xl md:text-6xl cursor-pointer mt-3"
          />
        </div>
      </div>

      <div className="bg-black p-10">
        <div className="container mx-auto">
          <Blogs data={BlogData.taxidenhaag.blog4} />
        </div>
      </div>

      <div className="bg-[#f7efe5]">
        <section className="conatiner mx-auto py-16 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Direct Een Taxi Reserveren In Den Haag
            </h2>

            <p className="text-gray-800 leading-relaxed">
              Reserveer nu direct uw taxi voor vervoer in of rond Den Haag via
              onderstaande gegevens. U kunt ons uiteraard ook benaderen voor
              meer informatie over onze tarieven of onze speciale diensten? Bel
              ons via: <span className="font-bold text-black">0858000365</span>.
              Wij zijn 24/7 bereikbaar voor uw vragen en reserveringen. U kunt
              ons ook mailen via{" "}
              <a
                href="mailto:info@taxinet.nl"
                className="text-[#ff8900] underline hover:text-[#d67400]"
              >
                info@taxinet.nl
              </a>
              . Reserveren is ook mogelijk via het online contactformulier op
              onze website.
            </p>
          </div>
        </section>
      </div>
      <div className="bg-black  ">
        <div className="container mx-auto p-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
