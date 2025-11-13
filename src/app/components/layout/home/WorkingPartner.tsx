import React from "react";

const WorkingPartner: React.FC = () => {
  const logos: string[] = [
    "/aset/images/Logo_Novotel_Hotels.svg 4.png",
    "/aset/images/world forum 4.png",
    "/aset/images/ibis 4.png",
    "/aset/images/hotel rijswijk 4.png",
    "/aset/images/queen casion foto 4.png",
  ];

  return (
    <div className="container mx-auto p-10 sm:p-6 flex flex-wrap items-center justify-evenly gap-8 sm:gap-14">
      {logos.map((src: string, index: number) => (
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
