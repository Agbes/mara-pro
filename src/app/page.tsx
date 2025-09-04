import HeroSection from "@/components/Acceuille/HeroSection";
import DomainsSection from "@/components/Acceuille/DomainsSection";
import CallToAction from "@/components/Acceuille/CallToAction";
import ArticlesSection from "@/components/Acceuille/ArticlesSection";
import Testimonials from "@/components/Acceuille/Testimonials/Testimonials";

import { generateJSONLD, generateStaticMetadata } from "@/lib/seo";
import { seoAccueil } from "@/data/seoData";
import Footer from "@/components/Navigation/Footer/Footer";
import Navbar from "@/components/Navigation/Navbar";

export const metadata = generateStaticMetadata(seoAccueil);

export default function Home() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 h-[220px] -z-10 blob"></div>
      <Navbar />
      <HeroSection />
      <DomainsSection />
      <Testimonials />
      <CallToAction />
      <ArticlesSection />

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateJSONLD(seoAccueil) }}
      />
    </>
  );
}
