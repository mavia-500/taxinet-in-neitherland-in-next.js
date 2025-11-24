"use client";

import React from "react";
import Nav from "../../components/ui/Nav";
import Header from "../../components/layout/taxiservice/TaxiServiceHero";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import Blogs from "../../components/layout/taxiservice/Blogs";
import ContactButton from "../../components/ui/ContactButton";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../../components/layout/home/Footer";
import { BlogData } from "../../data/TaxiServiceData";
import { useParams, usePathname } from "next/navigation";
// import { usePathname } from "next/navigation";
import TaxiServiceHero from "../../components/layout/taxiservice/TaxiServiceHero";
import BookYourTaxiBtn from "../../components/ui/BookYourTaxiBtn";

const page = () => {
  const path = usePathname();
    console.log("path name",path)
    const parts = path.split("/").filter(Boolean);
    console.log(parts);
    const imgaeRootFolder=parts[0]
    console.log(imgaeRootFolder)
  
  const params = useParams();

  const city = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  console.log("params", city);
  const selectedBlog = BlogData[city];
  
  return (
    <div className="">
      <div className="bg-black">
        <Nav />
      </div>
      <TaxiServiceHero headerText={selectedBlog.headerText} headerImage={selectedBlog.headerImage} imgaeRootFolder={imgaeRootFolder}/>
      <ServicesWithLogos />
      <div className="bg-black p-10">
        <div className="container mx-auto">
          <Blogs data={selectedBlog.blog1} imagefolder={city} imgaeRootFolder={imgaeRootFolder} />
          <ContactButton
            text="online reserveren"
            classname="text-black bg-white rounded-xl  mt-10 py-6 px-7 cursor-pointer"
          />
          <div className="mt-10 ">
            <Blogs data={selectedBlog.blog2} imagefolder={city} imgaeRootFolder={imgaeRootFolder}/>
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
        <Blogs data={selectedBlog.blog3} imagefolder={city} imgaeRootFolder={imgaeRootFolder}/>
      </div>

      <BookYourTaxiBtn/>

      <div className="bg-black p-10">
        <div className="container mx-auto">
          <Blogs data={selectedBlog.blog4} imagefolder={city} imgaeRootFolder={imgaeRootFolder}/>
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
