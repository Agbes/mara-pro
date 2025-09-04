// src/app/layout.tsx
import "./globals.css";
import SessionWrappers from "@/lib/sessionWrappers";
import { FooterAnalytic, HeadAnalytic } from "@/components/GoogleAnalytic";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrappers>
      <html lang="fr">
        <Head>
          <HeadAnalytic />
        </Head>
      <body className={`${inter.className} antialiased text-slate-800`}>
          {children}
          <FooterAnalytic />
        </body>
      </html>
    </SessionWrappers>
  );
}
