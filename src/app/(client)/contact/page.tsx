// app/(client)/contact/page.tsx
import { generateJSONLD, generateStaticMetadata } from "@/lib/seo";
import { seoContact } from "@/data/seoData";
import ContactForm from "@/components/ContactForm";

export const metadata = generateStaticMetadata(seoContact);

export default function ContactPage() {
  return (

    <>
      <ContactForm />
      
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: generateJSONLD(seoContact) }}
            />
    </>
  );
}
