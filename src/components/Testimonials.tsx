"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { A11y, Autoplay } from "swiper/modules";

const swiper = [
  {
    name: "Saloni Jain",
    content:
      "Intigrate surpassed my expectations! The fragrance is enchanting and the personalized packaging added a special touch to my gift.",
  },
  {
    name: "Fizel Fernandes",
    content:
      "I chose Intigrate for corporate gifting, and the response was phenomenal. The fragrances were a hit.",
  },
  {
    name: "Zubair M.",
    content:
      "As a corporate gifting solution, Intigrate sets a new standard. Our clients appreciated the sophistication of the scents, creating a lasting bond beyond business.",
  },
  {
    name: "Hardik Khatri",
    content:
      "The personalized gifting options at Intigrate allowed me to express my sentiments in a truly unique way. The fragrance and packaging spoke volumes!",
  },
  {
    name: "Juned Chauhan",
    content:
      "During the festive season, Intigrate became my go-to for traditional gifting. The cultural essence in every perfume made it a perfect gift for the celebrations.",
  },
  {
    name: "Zaheer Chaudhary",
    content:
      "Intigrate's wedding gifting collection added an enchanting aura to our special day. The fragrances resonated with love and joy, making it a cherished memory.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 space-y-6">
      <div className="border-b-2 pb-2 border-primary">
        <p className="text-4xl font-bold">Our Testimonials</p>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        roundLengths={true}
        loop={true}
        centeredSlides={true}
        modules={[Autoplay, A11y]}
        className="mySwiper"
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
      >
        {swiper.map((item, i) => (
          <SwiperSlide
            key={i}
            className="bg-gray-100 min-h-[120px] cursor-grab gap-3 max-w-lg w-full rounded-xl p-3"
          >
            <p className="italic text-sm">&quot;{item.content}&quot;</p>
            <p className="font-medium">- {item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
