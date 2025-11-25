"use client";
import React from 'react'

import HeroImageandText from '../../components/ui/HeroImageandText'
import { detailData } from '../../data/OverTaxinet'
import { useParams, usePathname } from "next/navigation";
import DetailsData from '../../components/layout/overtaxinet/DetailsData';

const page = () => {
  const path = usePathname();
    console.log("path name", path);
    const parts = path.split("/").filter(Boolean);
    console.log(parts);
    const imgaeRootFolder = parts[0];
    console.log(imgaeRootFolder);
  
    const params = useParams();
    console.log(params);
  
    const city = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
    console.log("params", city);
    const selectedBlog = detailData[city];
    console.log(selectedBlog);
  return (
    <div className='bg-black'>
      <HeroImageandText headerText={selectedBlog.headerText} imgaeRootFolder={imgaeRootFolder} headerImage={selectedBlog.headerImage}/>
        <DetailsData data={selectedBlog.blog}
            imagefolder={city}
            imgaeRootFolder={imgaeRootFolder}/>
    </div>
  )
}

export default page