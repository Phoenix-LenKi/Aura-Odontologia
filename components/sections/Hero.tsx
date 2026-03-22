"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={content.hero.image}
        alt="Clínica Aura Odontologia"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={90}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-terracotta/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-sm uppercase tracking-[0.25em] font-medium mb-6"
        >
          Odontologia de excelência em Florianópolis
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
          className="font-serif text-display text-white mb-8"
        >
          {content.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={content.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-terracotta text-white font-semibold px-8 py-4 rounded-sm text-base hover:bg-terracotta-dark hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-terracotta/30"
          >
            {content.hero.primaryCta}
          </a>
          <a
            href="#sobre"
            className="text-white border border-white/30 font-medium px-8 py-4 rounded-sm text-base hover:bg-white/10 transition-all duration-300"
          >
            {content.hero.secondaryCta}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
