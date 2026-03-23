"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <footer id="contato" className="bg-white text-charcoal pt-24 pb-12 border-t border-charcoal/10 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -bottom-40 -right-40 text-charcoal/[0.02] font-serif text-[400px] leading-none select-none pointer-events-none">
          A
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
            
            {/* Brand & CTA */}
            <div className="md:w-1/2">
               <h2 className="font-serif text-5xl md:text-7xl mb-6 text-charcoal tracking-tight">{content.companyName}</h2>
               <p className="text-charcoal/60 text-lg leading-relaxed mb-10 max-w-md font-light">
                 {content.footer.ctaMessage}
               </p>
               <a
                href={content.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-terracotta text-white px-8 py-4 text-xs md:text-sm uppercase tracking-[0.1em] font-medium hover:bg-terracotta/90 transition-all duration-300 rounded-sm hover:-translate-y-1"
              >
                Fale com a Nossa Equipe
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>

            {/* Links / Contact Info */}
            <div className="md:w-1/2 flex flex-col sm:flex-row md:justify-end gap-12 sm:gap-24 pt-4 md:pt-0">
               <div>
                 <p className="text-charcoal text-xs uppercase tracking-[0.2em] font-medium mb-6">Contato</p>
                 <div className="space-y-4 text-charcoal/70 font-light text-sm">
                    <p>{content.phone}</p>
                    <p>{content.email}</p>
                 </div>
               </div>
               <div>
                 <p className="text-charcoal text-xs uppercase tracking-[0.2em] font-medium mb-6">Redes Sociais</p>
                 <div className="space-y-4 text-charcoal/70 font-light text-sm">
                    <a href={content.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors block">Instagram</a>
                    <a href={content.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors block">WhatsApp</a>
                 </div>
               </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-charcoal/10 text-charcoal/40 text-xs font-light tracking-wider">
             <p>© {new Date().getFullYear()} {content.companyName}. Todos os direitos reservados.</p>
             <p className="mt-4 md:mt-0">Desenvolvido por <a href="https://lenki.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors underline underline-offset-4">LenKi</a></p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={content.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </>
  );
}
