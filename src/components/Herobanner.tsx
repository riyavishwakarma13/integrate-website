import { cn } from "@/util";
import Image from "next/image";
import React from "react";

const Herobanner = () => {
  return (
    <section className="mx-auto grid min-h-[69vh] max-w-7xl place-items-center gap-10 py-10 md:px-5 lg:grid-cols-2">
      <div className="space-y-6 px-5">
        <div className="relative">
          <h1 className="relative z-10 text-4xl font-bold md:text-7xl">
            Where fragrance meets the art of gifting
          </h1>
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-primary  hover:bg-accent"></div>
        </div>
        <p className="relative z-10">
          Embrace the richness of our traditional Indian roots, reflecting in
          our packaging designs, scents inspired by cultural elements, and the
          warmth of heartfelt gifting.
        </p>
      </div>
      <div className="relative h-[450px] w-full max-w-xl py-5 transition-all duration-300 ease-in-out hover:scale-105">
        <Image
          className="z-10 relative rounded-lg object-cover"
          src="/assets/E8.jpg"
          priority
          fill
          alt="Vancouver College Campus"
        />
        <div className="max-w-md w-full hidden md:block absolute bg-primary h-60 -top-4 -left-4 rounded-xl"></div>
        <div className="max-w-md w-full hidden md:block absolute bg-primary h-60 -bottom-4 -right-4 rounded-xl"></div>
      </div>
    </section>
  );
};

export default Herobanner;
