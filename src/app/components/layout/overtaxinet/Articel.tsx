import React from "react";
import { articelData } from "../../../data/OverTaxinet";

const Articel = () => {
  return (
    <div className="w-full flex flex-col items-center bg-black text-white ">
      <h1 className="text-3xl md:text-4xl font-bold my-10">
        {articelData.heading}
      </h1>
      <p className="w-[50vw] mb-10">{articelData.description}</p>
      <div className="w-full  flex flex-col gap-14 pb-16 ">
        {articelData.articel.map((article) => (
          <div key={article.id} className="bg-black  rounded-xl shadow-lg">
            {/* Title */}
            <div className="p-10 bg-[#f7efe5] text-black text-center flex flex-col items-center justify-center  ">
              <h2 className="text-2xl font-semibold text-center">
                {article.heading}
              </h2>
              <p className="text-center text-black  w-[30vw] font-bold">
                {article.description}
              </p>
            </div>
            {/* Inner content box */}

            {article.furtherDetails && (
              <div className=" border-4 border-[#e87d01] p-6 rounded-xl mt-6 space-y-6 container mx-auto ">
                {article.furtherDetails.map((item, i) => (
                  <div key={i}>
                    {item.heading && (
                      <h3 className="font-semibold text-lg text-white mb-1">
                        {item.heading}
                      </h3>
                    )}
                    <p className="text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articel;
