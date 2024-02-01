import React from "react";

const faqs = [
  {
    summary: "How long do the fragrances last?",
    content:
      "Our perfumes are designed for longevity, providing a lasting impression throughout the day.",
  },
  {
    summary: "Do you offer bulk order discounts?",
    content:
      "Yes, and we also provide custom stickering for bulk orders to enhance the gifting experience.",
  },
  {
    summary: "Are your perfumes suitable for sensitive skin?",
    content:
      "Yes, our perfumes are crafted with skin-friendly ingredients, ensuring a delightful experience for all skin types.",
  },
  {
    summary: "Do you provide gift cards or vouchers?",
    content:
      "Certainly! Gift the joy of choice with our customizable gift cards and vouchers, allowing your loved ones to select their preferred fragrance.",
  },
  {
    summary: "Can I request a sample before making a bulk order?",
    content:
      "Yes, we offer sample options for bulk orders, ensuring you are confident in your selection before placing a larger order.*",
  },
];

const Faq = () => {
  return (
    <section className="space-y-6 py-10">
      <div className="border-b-2 pb-2 border-primary">
        <h6 className="text-4xl font-bold">Frequently Asked Questions</h6>
      </div>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <details
            className="bg-gray-100 cursor-pointer px-6 rounded-xl py-4"
            key={i}
          >
            <summary className="font-medium pb-1">{item.summary}</summary>
            <div className="border-t border-primary pt-2">
              <p>{item.content}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;
