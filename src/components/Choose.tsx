import { cn } from "@/util";
import React from "react";

const content = [
  {
    id: 1,
    title: "Long-Lasting Aromas",
    desc: "Our fragrances linger, creating enduring memories.",
  },
  {
    id: 2,
    title: "Unique Blends",
    desc: "Each perfume is a masterpiece, a blend as unique as your sentiments.",
  },
  {
    id: 3,
    title: "Personalized Packaging",
    desc: "Transform Gifts into Treasures with Our Elegant Personalized Packaging.",
  },
  {
    id: 4,
    title: "Bulk Orders Benefits",
    desc: "Enjoy Exclusive packaging for Bulk Orders. Make Every Gift Special.",
  },
];

const Choose = () => {
  return (
    <section className="space-y-5 py-10">
      <div className="border-b-2 pb-2 border-primary">
        <h5 className="text-4xl font-bold">Why Choose Us?</h5>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-7 py-5">
        {content.map((item) => (
          <div
            key={item.id}
            className={cn(
              "w-[250px] bg-gray-100 rounded-xl p-3 h-[200px]",
              "flex flex-col items-center gap-3 justify-center",
              "hover:scale-110 transition-all duration-200 ease-in-out"
            )}
          >
            <div className="h-[40px] w-[40px] bg-primary flex items-center justify-center rounded-full text-white font-semibold">
              {item.id}
            </div>
            <p className="text-center font-light ">
              <span className="font-semibold">{item.title}</span> <br /> &quot;
              {item.desc}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
