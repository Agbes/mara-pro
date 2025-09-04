import HeroSection from "@/components/Acceuille/HeroSection";
import DomainsSection from "@/components/Acceuille/DomainsSection";
import CallToAction from "@/components/Acceuille/CallToAction";
import ArticlesSection from "@/components/Acceuille/ArticlesSection";
import Testimonials from "@/components/Acceuille/Testimonials/Testimonials";

import { generateJSONLD, generateStaticMetadata } from "@/lib/seo";
import { seoAccueil } from "@/data/seoData";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Navigation/Footer/Footer";

export const metadata = generateStaticMetadata(seoAccueil);

export default function Home() {
  return (
    <>
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
