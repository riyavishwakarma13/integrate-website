import Image from "next/image";
import React from "react";

const content = [
  {
    src: "/assets/about/festival.webp",
    title: "Traditional gifting",
    content: "Festive Aromas, Celebrate Traditions. Gift the Essence of Joy.",
  },
  {
    src: "/assets/about/wedding.webp",
    title: "Wedding gifting",
    content: "Scented Moments of Love. Perfume the Beginnings of Forever.",
  },
  {
    src: "/assets/about/corporate-gifting.webp",
    title: "Corporate gifting",
    content:
      "Elevate Business Bonds with Signature Scents. Unforgettable Impressions, Every Gift.",
  },
  {
    src: "/assets/about/customize.webp",
    title: "Customize gifting",
    content:
      "Craft Memories with Fragrance. Customized for Every Special Occasion.",
  },
];

const About = () => {
  return (
    <section className="space-y-6 py-5">
      <div className="border-b-2 pb-2 border-primary">
        <p className="text-4xl font-bold">About Us</p>
      </div>
      <p>
        Integrate embodies the spirit of personalized, traditional, and
        corporate gifting, elevating the experience of giving and receiving
        fragrances.
      </p>
      <div className="grid lg:grid-cols-2 place-items-center gap-5">
        {content.map((item, i) => (
          <div key={i} className="grid md:grid-cols-2 gap-5 place-items-center">
            <div className="relative h-[250px] w-[250px]">
              <Image
                src={item.src}
                className="object-cover rounded-xl"
                fill
                priority
                alt={item.title}
              />
            </div>
            <div className="flex flex-col justify-center h-[250px] w-[250px] rounded-xl bg-gray-100 items-center gap-4 p-5 ">
              <p className="text-center capitalize text-sm">
                <span className="font-semibold text-base">{item.title}</span>{" "}
                <br />
                &quot;{item.content}&quot;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
