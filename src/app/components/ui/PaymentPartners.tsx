import React from "react";

const PaymentPartners: React.FC = () => {
  const imagePaths: string[] = [
    "/aset/images/Group 331.png",
    "/aset/images/Group 335.png",
    "/aset/images/image 3.png",
    "/aset/images/Group 331 (1).png",
    "/aset/images/image.png",
    "/aset/images/Group 332 (1).png",
    "/aset/images/Group 332 (1).png",
    "/aset/images/Group 332 (2).png",
  ];

  return (
    <div className="flex flex-col md:flex-row justify-around items-center gap-10 p-6 md:p-16 mt-40 text-center md:text-left">
      <h2 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Wij accepteren alle soorten online betalingen
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6">
        {imagePaths.map((src: string, index: number) => (
          <img
            key={index}
            src={src}
            alt={`logo-${index}`}
            className="w-16 sm:w-20 md:w-24 h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentPartners;
