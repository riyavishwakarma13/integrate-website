import { cn } from "@/util";
import Image from "next/image";
import React from "react";

const images = [
  "/assets/perfumes/E1.webp",
  "/assets/perfumes/E2.webp",
  "/assets/perfumes/E3.webp",
  "/assets/perfumes/E4.webp",
  "/assets/perfumes/E7.webp",
  "/assets/perfumes/E5.webp",
  "/assets/perfumes/E6.webp",
  "/assets/perfumes/E9.webp",
];

const Collection = () => {
  return (
    <section
      className={cn(
        "my-10 py-10",
        "bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/assets/banner.webp')]"
      )}
    >
      <div className="max-w-7xl mx-auto flex py-5 flex-wrap justify-center items-center gap-10 text-white">
        {images.map((item, i) => (
          <Image
            src={item}
            key={i}
            className={cn(
              "object-cover transition-all duration-200 ease-in-out",
              "hover:scale-110"
            )}
            priority
            height={250}
            width={250}
            alt="Perfumes"
          />
        ))}
      </div>
    </section>
  );
};

export default Collection;
