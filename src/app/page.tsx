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
    <main>
      <div className="max-w-7xl p-4 mx-auto">
        <Herobanner />
        <About />
        <Category />
        <Personalize />
      </div>
      <Collection />
      <div className="max-w-7xl p-4 mx-auto">
        <Choose />
        <Faq />
        <Testimonials />
        <section className="max-w-4xl mx-auto py-10">
          <p className="text-lg text-center font-bold">
            &quot;At <span className="text-primary">Intigrate</span>, we
            don&apos;t just sell perfumes; we curate moments, emotions, and
            timeless memories. Gift the essence of tradition with a touch of
            modern luxury. Explore Intigrate, where fragrance meets
            emotion.&quot;
          </p>
        </section>
      </div>
    </main>
  );
}
