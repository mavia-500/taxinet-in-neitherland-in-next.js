import React from "react";
import Image from "next/image";
import { BlogData } from "../../../data/BlogData";

const Blogs = ({data=[]}) => {
    console.log(data)
  return (
    <main className="bg-black text-white   container mx-auto">
      <div className="  space-y-20">
        {data.map((item, idx) => (
          <section
            key={item.id}
            className={`flex flex-col ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
          >
            {/* Text */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {item.title}
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
            </div>

            {/* Image */}
            <div className="flex-1">
              <div className=" relative w-full min-h-[250px] h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Blogs;
