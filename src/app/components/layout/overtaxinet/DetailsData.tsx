import React from "react";
// import { articelData } from "../../../data/OverTaxinet";

const DetailsData = ({data=[],imagefolder,imgaeRootFolder}) => {
    console.log(data)
  return (
    <div className="w-full flex flex-col items-center bg-black text-white ">
      
      <div className="w-full  flex flex-col gap-14 pb-16 ">
        
            {/* Inner content box */}

            {data && (
              <div className="  p-6 rounded-xl mt-6 space-y-6 container mx-auto ">
                {data.map((item, i) => (
                  <div key={i}>
                    
                      <h3 className="font-bold text-2xl text-white mb-1">
                        {item.heading}
                      </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        
      </div>
    
  );
};

export default DetailsData;
