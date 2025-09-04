
import HeroSection from "@/components/Acceuille/HeroSection";
import DomainsSection from "@/components/Acceuille/DomainsSection";
import CallToAction from "@/components/Acceuille/CallToAction";
import ArticlesSection from "@/components/Acceuille/ArticlesSection";
import Testimonials from "@/components/Acceuille/Testimonials/Testimonials";

export const dynamic = "force-dynamic";

import { generateJSONLD, generateStaticMetadata } from "@/lib/seo";
import { seoAccueil } from "@/data/seoData";

export const metadata = generateStaticMetadata(seoAccueil);


export default async function Home() {
    return (
        <>

            <HeroSection />

            <DomainsSection />

            <Testimonials />

            <CallToAction />

            <ArticlesSection />


                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: generateJSONLD(seoAccueil) }}
                />

        </>
    );
}
