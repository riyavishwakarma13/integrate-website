import Image from "next/image";
import React from "react";

const img = [
  // "/assets/personalize/1.webp",
  // "/assets/personalize/2.webp",
  "/assets/personalize/3.webp",
  // "/assets/personalize/4.webp",
  // "/assets/personalize/5.webp",
  "/assets/personalize/6.webp",
];

const Personalize = () => {
  return (
    <section className="space-y-6 py-10">
      <div className="border-b-2 pb-2 border-primary">
        <h4 className="text-4xl capitalize font-bold">
          Personalize your packaging
        </h4>
      </div>
      <div className="grid md:grid-cols-2 py-5 place-items-center max-w-5xl mx-auto gap-5">
        <p className="font-medium">
          Our offerings transcend the ordinary, allowing you to gift a scent
          that&apos;s as unique as the person receiving it. Whether it&apos;s
          adding a personal touch, customizing the packaging, or tailoring
          scents to individual preferences,{" "}
          <span className="text-primary">&quot;Intigrate&quot;</span> celebrates
          the beauty of thoughtful gifting.
        </p>
        <Image
          src={"/assets/personalize/20ml slider box 12v.webp"}
          priority
          width={500}
          height={500}
          alt="personalize"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-5 items-center">
        {img.map((item, i) => (
          <div key={i} className="relative max-w-[500px] w-full h-[335px]">
            <Image
              src={item}
              priority
              fill
              className="rounded-xl object-contain"
              alt="personalize"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Personalize;
