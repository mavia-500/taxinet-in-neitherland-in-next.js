import React from "react";

const WorkingPartner = () => {
  const logos = [
    "/aset/images/Logo_Novotel_Hotels.svg 4.png",
    "/aset/images/world forum 4.png",
    "/aset/images/ibis 4.png",
    "/aset/images/hotel rijswijk 4.png",
    "/aset/images/queen casion foto 4.png",
  ];

  return (
    <div className="p-10 sm:p-6 flex flex-wrap items-center justify-center gap-8 sm:gap-4">
      {logos.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="loading..."
          className="w-40 sm:w-24 h-auto object-contain"
        />
      ))}
    </div>
  );
};

export default WorkingPartner;
