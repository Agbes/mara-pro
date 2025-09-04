// app/(client)/contact/page.tsx
import { generateStaticMetadata } from "@/lib/seo";
import { seoContact } from "@/data/seoData";
import ContactForm from "@/components/ContactForm";
import { JsonLD } from "@/components/JsonLD";

export const metadata = generateStaticMetadata(seoContact);

export default function ContactPage() {
  return (

    <>
      <ContactForm />
      <JsonLD seo={seoContact} />
    </>
  );
}
