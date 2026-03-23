"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="bg-terracotta py-24 md:py-32 overflow-hidden relative">
      {/* Background Subtle Element */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#a34a31] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Image Section (Spans 7 columns on md) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/lead-assets/home/dras.png"
                alt="Interior da Clínica Aura Odontologia"
                fill
                className="object-cover object-top"
                quality={90}
              />
            </div>
            {/* Accent Box for depth */}
            <div className="absolute -bottom-8 -left-8 w-2/3 h-1/2 bg-cream/10 border border-white/10 rounded-sm -z-10" />
          </motion.div>

          {/* Text Section (Spans 5 columns, overlaps slightly) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 md:-ml-12 bg-terracotta p-8 md:p-12 border border-white/10 rounded-sm shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-cream" />
            
            <p className="text-cream/70 text-sm uppercase tracking-[0.2em] font-medium mb-6">
              Quem Somos
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-cream mb-8 leading-tight">
              {content.about.title}
            </h2>
            <div className="space-y-6 text-cream/90 text-lg font-light leading-relaxed">
              <p>{content.about.description1}</p>
              <p>{content.about.description2}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
