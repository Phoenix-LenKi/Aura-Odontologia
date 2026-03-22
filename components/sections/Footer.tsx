"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { Instagram, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{content.companyName}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              {content.hero.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-b border-primary-foreground/20 pb-2 inline-block">Contato</h4>
            <div className="space-y-4 text-primary-foreground/80">
              <a href={content.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="bg-primary-foreground/10 p-2 rounded-full group-hover:bg-primary-foreground/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{content.phone}</span>
              </a>
              <a href={`mailto:${content.email}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="bg-primary-foreground/10 p-2 rounded-full group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{content.email}</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-b border-primary-foreground/20 pb-2 inline-block">Endereço</h4>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <div className="bg-primary-foreground/10 p-2 rounded-full shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="leading-relaxed">{content.address}</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-b border-primary-foreground/20 pb-2 inline-block">Redes Sociais</h4>
            <p className="text-primary-foreground/80">{content.footer.ctaMessage}</p>
            <div className="flex gap-4">
              <a
                href={content.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/20 hover:bg-white hover:text-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={content.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/20 hover:bg-white hover:text-primary transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
