"use client";
import React from "react";
import Nav from "../../components/ui/Nav";
import TablePrice from "../../components/ui/TablePrice";
import Hero from "../../components/layout/airporttaxi/Hero";
// import Table from "../../components/layout/airporttaxi/Table";
import IconsBar from "../../components/layout/airporttaxi/IconsBar";
import Blogs from "../../components/layout/taxiservice/Blogs";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { BlogData } from "../../data/AirportTaxiData";
import Section3buttons from "../../components/ui/Section3buttons";
import BookYourTaxiBtn from "../../components/ui/BookYourTaxiBtn";
import Footer from "../../components/layout/home/Footer";
const page = () => {
  const path = usePathname();
  console.log("path name", path);
  const parts = path.split("/").filter(Boolean);
  console.log(parts);
  const imgaeRootFolder = parts[0];
  console.log(imgaeRootFolder);

  const params = useParams();

  const city = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  console.log("params", city);
  const selectedBlog = BlogData[city];
  // console.log(selectedBlog.but);

  return (
    <div>
      <div className="bg-black relative z-50">
        <Nav />
      </div>
      <Hero />

      {/* Show table on mobile below hero  for responsiveness only*/}
      <div className="p-6 md:hidden ">
        <TablePrice city={city}/>
      </div>
      <IconsBar />
      <div className="bg-black p-10">
        <Blogs
          data={selectedBlog.blog1}
          imagefolder={city}
          imgaeRootFolder={imgaeRootFolder}
        />
      </div>

      <Section3buttons />
      <div className="bg-black p-10">
        <Blogs
          data={selectedBlog.blog3}
          imagefolder={city}
          imgaeRootFolder={imgaeRootFolder}
        />
      </div>

      <BookYourTaxiBtn/>
      <div className="bg-black  ">
        <div className="container mx-auto p-10 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
