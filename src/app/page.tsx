import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Testimonials />
      <Faq />
    </div>
  );
}
