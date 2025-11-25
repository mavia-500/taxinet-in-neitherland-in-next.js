import React from "react";
import Nav from "../components/ui/Nav";
import Footer from "../components/layout/home/Footer";

export const metadata = {
  title: "over taxinet",
  description: "Professional and affordable taxi services across Pakistan.",
};

export default function TaxiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-gray-800">
      <div className="bg-black">
        <Nav />
      </div>
      <main className="">{children}</main>

      <div className="bg-black">
        <Footer/>

      </div>
    </div>
  );
}
