"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section id="localizacao" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          >
            <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-medium mb-4">
              Localização
            </p>
            <h2 className="font-serif text-heading text-charcoal mb-6">
              Encontre-nos
            </h2>
            <p className="text-charcoal-light text-base leading-relaxed mb-8">
              {content.footer.locationText}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-charcoal text-sm leading-relaxed">
                  {content.address}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-terracotta flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <p className="text-charcoal text-sm">
                  {content.phone}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <svg className="w-5 h-5 text-terracotta flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <p className="text-charcoal text-sm">
                  {content.email}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 60 }}
            className="w-full aspect-[4/3] md:aspect-square"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5686!3d-27.5963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQ2LjciUyA0OMKwMzQnMDcuMCJX!5e0!3m2!1spt-BR!2sbr!4v1&q=Rua+General+Liberato+Bittencourt+1475+Florianopolis"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Aura Odontologia"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
