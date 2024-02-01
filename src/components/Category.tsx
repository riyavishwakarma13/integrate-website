import Image from "next/image";
import React from "react";

const types = [
  {
    src: "/assets/category/aqua.webp",
    title: "Aqua",
  },
  {
    src: "/assets/category/citrus.webp",
    title: "Citrus",
  },
  {
    src: "/assets/category/floral.webp",
    title: "Floral",
  },
  {
    src: "/assets/category/fruity.webp",
    title: "Fruity",
  },
  {
    src: "/assets/category/spice.webp",
    title: "Spice",
  },
  {
    src: "/assets/category/woody.webp",
    title: "Woody",
  },
];

const Category = () => {
  return (
    <section className="space-y-5 py-5">
      <div className="border-b-2 pb-2 border-primary">
        <h3 className="text-4xl text-center font-bold">
          Category Of Fragrance
        </h3>
      </div>
      <div className="flex flex-wrap py-5 justify-center items-center">
        {types.map((item, i) => (
          <div key={i} className="relative w-full max-w-[350px] h-[250px]">
            <Image
              src={item.src}
              className="object-cover"
              fill
              alt={item.title}
            />
            <div className="absolute grid place-items-center h-full w-full">
              <p className="backdrop-blur-lg text-lg font-bold bg-primary/30 text-white px-4 py-2">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
