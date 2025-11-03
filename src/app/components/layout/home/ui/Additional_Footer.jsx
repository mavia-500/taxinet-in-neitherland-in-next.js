import React from 'react'
import Link from 'next/link'
import { GrMap } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { SiGmail } from "react-icons/si";

const Additional_Footer = () => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap md:space-x-10 space-y-4 md:space-y-0 mt-10 justify-center items-center text-center md:text-left">

            <Link
                href="https://www.google.com/maps/place/Rederijkerstraat+159,+2531+VK+Den+Haag,+Netherlands"
                className="flex items-center gap-2"
            >
                <GrMap className="text-xl" />
                <span>Rederijkerstraat 159, 2531VK Den Haag, Nederland</span>
            </Link>

            <div className="flex gap-2 items-center">
                <LuPhoneCall className="text-xl" />
                <span>0858000365</span>
            </div>

            <div className="flex gap-2 items-center">
                <SiGmail className="text-xl" />
                <span>info@taxinet.nl</span>
            </div>

            <div className="flex gap-2 items-center">
                <span>Kvknummer - 94898499</span>
            </div>

            <div>
                <span>Voorwaarden | Privacy | Sitemap</span>
            </div>
        </div>

    )
}

export default Additional_Footer