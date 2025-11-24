"use client";
import React from "react";
import Nav from "../../components/ui/Nav";
import Hero2Buttons from "../../components/ui/Hero2Buttons";
import { BlogData } from "../../data/TaxiBedrijven";
import { useParams, usePathname } from "next/navigation";
import Blogs from "../../components/layout/taxiservice/Blogs";
import ServicesWithLogos from "../../components/layout/taxiservice/ServicesWithLogos";
import Section2buttons from "../../components/ui/Section2buttons";
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

  return (
    <div>
      <div className="bg-black">
        <Nav />
      </div>
      <Hero2Buttons
        headerText={selectedBlog.headerText}
        headerImage={selectedBlog.headerImage}
        imgaeRootFolder={imgaeRootFolder}
      />
      <ServicesWithLogos />
      <div className="bg-black p-10">
        <div className="container mx-auto">
          <Blogs
            data={selectedBlog.blog1}
            imagefolder={city}
            imgaeRootFolder={imgaeRootFolder}
          />
        </div>
      </div>
      <Section2buttons />

      <BookYourTaxiBtn />


      <div className="bg-black p-10">
        <div className="container mx-auto">
          
          <Blogs
            data={selectedBlog.blog4}
            imagefolder={city}
            imgaeRootFolder={imgaeRootFolder}
          />
        </div>
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
