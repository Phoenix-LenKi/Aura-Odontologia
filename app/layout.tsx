import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";

const fontHeading = Outfit({ 
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontBody = Inter({ 
  subsets: ["latin"],
  variable: "--font-body", 
});

export const metadata: Metadata = {
  title: content.seoTitle,
  description: content.seoDescription,
  keywords: ["Odontologia", "Florianópolis", "Dentista", "Implantes", "Odontopediatria", "Aura Odontologia"],
  openGraph: {
    title: content.seoTitle,
    description: content.seoDescription,
    url: "https://auraodontologiaintegrada.vercel.app", // Adjust with your actual vercel domain
    siteName: content.companyName,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontHeading.variable} ${fontBody.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
