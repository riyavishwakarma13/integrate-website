import About from "@/components/About";
import Category from "@/components/Category";
import Choose from "@/components/Choose";
import Collection from "@/components/Collection";
import Faq from "@/components/Faq";
import Herobanner from "@/components/Herobanner";
import Personalize from "@/components/Personalize";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="p-4">
      <div className="max-w-7xl mx-auto">
        <Herobanner />
        <About />
      </div>
      <Collection />
      <div className="max-w-7xl mx-auto">
        <Category />
        <Choose />
        <Personalize />
        <Testimonials />
        <Faq />
      </div>
    </main>
  );
}
