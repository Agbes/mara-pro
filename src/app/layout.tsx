// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SessionWrappers from "@/lib/sessionWrappers";
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
    title: "Medium Moussa Ali",
    description: "Puissant medium marabout Moussa Ali",
    icons: {
        icon: "/Ali-moussa.png",
    },
    other: {
        "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_CONSOLE || "",
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
                <GoogleTagManager gtmId="GTM-KSDX9JB8" />

                <body className="antialiased text-slate-800">
                    {children}
                </body>
            </html>
        </SessionWrappers>
    );
}
