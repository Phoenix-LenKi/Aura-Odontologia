// aria-label
import type { Metadata } from "next";
import "./globals.css";
import { content } from "@/lib/content";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  icons: {
    icon: "/icon",
  },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    siteName: content.companyName,
    locale: "pt_BR",
    type: "website",
    url: "https://aura-odontologia.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
  },
  metadataBase: new URL("https://aura-odontologia.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn("font-sans", geist.variable)}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
