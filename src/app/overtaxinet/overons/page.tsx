"use client";
import React from "react";
import Hero2Buttons from "../../components/ui/Hero2Buttons";
import { BlogData } from "../../data/OverTaxinet";
import { useParams, usePathname } from "next/navigation";
import ImageLogs from "../../components/ui/ImageLogs";
import IconsBar from "../../components/layout/airporttaxi/IconsBar";
import Blogs from "../../components/layout/taxiservice/Blogs";
import Section2buttons from "../../components/ui/Section2buttons";
import BookYourTaxiBtn from "../../components/ui/BookYourTaxiBtn";
import Image from "next/image";
import ImagewithLinks from "../../components/layout/overtaxinet/ImagewithLinks";

const page = () => {
  const path = usePathname();
  // console.log("path name",path)
  const parts = path.split("/").filter(Boolean);
  // console.log(parts);
  const imgaeRootFolder = parts[0];
  // console.log(imgaeRootFolder)

  // const params = useParams();

  // const city = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  // console.log("params", city);
  const selectedBlog = BlogData.overons;
  console.log();
  return (
    <div className="">
      <Hero2Buttons
        headerText={selectedBlog.headerText}
        headerImage={selectedBlog.headerImage}
        imgaeRootFolder={imgaeRootFolder}
      />

      <IconsBar />
      <div className="bg-black">
        <Blogs
          data={selectedBlog.blog1}
          imagefolder="overons"
          imgaeRootFolder={imgaeRootFolder}
        />
      </div>
      <Section2buttons />
      <div className="bg-black">
        <Blogs
          data={selectedBlog.blog3}
          imagefolder="overons"
          imgaeRootFolder={imgaeRootFolder}
        />
      </div>

      <BookYourTaxiBtn />

      <div className="bg-black">
        <Blogs
          data={selectedBlog.blog4}
          imagefolder="overons"
          imgaeRootFolder={imgaeRootFolder}
        />
      </div>
      <div className="">
        <ImagewithLinks />
      </div>
    </div>
  );
};

export default page;  
