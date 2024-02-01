import Choose from "@/components/Choose";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Testimonials />
      <Choose />
      <Faq />
    </div>
  );
}
