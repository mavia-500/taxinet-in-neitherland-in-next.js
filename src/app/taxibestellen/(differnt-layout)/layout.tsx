// export const dynamic = "force-static";
// export const runtime = "edge";
export const revalidate = 0;
import React from "react";
import Image from "next/image";
import Nav from "../../components/ui/Nav";
import Footer from "../../components/layout/home/Footer";

// Disable parent layout
export const metadata = {};

export default function MagaLayout({ children }) {
  return (
    <html>
      <body>
        <div className="bg-black flex items-center justify-center w-full h-[15vh] overflow-hidden ">
          <Image
            src="/aset/taxibestellen/a8fab91b0f8e89117245bd73be968b1def184a0d.png"
            alt="Sleepdienst"
            width={400}
            height={400}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="text-black relative z-50">
          <Nav />
        </div>
        {children}
        <div className="h-screen bg-black">

        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
