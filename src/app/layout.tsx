// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SessionWrappers from "@/lib/sessionWrappers";
import { FooterAnalytic, HeadAnalytic } from "@/components/GoogleAnalytic";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Medium Moussa Ali",
  description: "Puissant medium marabout Moussa Ali",
  icons: {
    icon: "/Ali-moussa.png",
  },
};

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
        <body className="antialiased text-slate-800">
          {children}
          <FooterAnalytic />
        </body>
      </html>
    </SessionWrappers>
  );
}
