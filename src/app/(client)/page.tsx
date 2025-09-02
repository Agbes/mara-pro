
import HeroSection from "@/components/Acceuille/HeroSection";
import DomainsSection from "@/components/Acceuille/DomainsSection";
import CallToAction from "@/components/Acceuille/CallToAction";
import ArticlesSection from "@/components/Acceuille/ArticlesSection";
import Testimonials from "@/components/Acceuille/Testimonials/Testimonials";

export const dynamic = "force-dynamic";

import { generateStaticMetadata } from "@/lib/seo";
import { seoAccueil } from "@/data/seoData";
import Head from "next/head";
import { JsonLD } from "@/components/JsonLD";

export const metadata = generateStaticMetadata(seoAccueil);


export default async function Home() {
    return (
        <>
          
            <Head>
                <JsonLD seo={seoAccueil} />
            </Head>
            <HeroSection />

            <DomainsSection />

            <Testimonials />

            <CallToAction />

            <ArticlesSection />
        </>
    );
}
