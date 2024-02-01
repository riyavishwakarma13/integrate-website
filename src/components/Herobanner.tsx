import { cn } from "@/util";
import React from "react";

const Herobanner = () => {
  return (
    <section className="grid md:grid-cols-3 min-h-[80vh] place-items-center">
      <div></div>
      <div className="space-y-5">
        <h1 className={cn("text-3xl md:text-5xl font-bold")}>
          Where fragrance meets the art of gifting
        </h1>
        <p className="font-medium">
          Embrace the richness of our traditional Indian roots, reflecting in
          our packaging designs, scents inspired by cultural elements, and the
          warmth of heartfelt gifting.
        </p>
      </div>
      <div></div>
    </section>
  );
};

export default Herobanner;
