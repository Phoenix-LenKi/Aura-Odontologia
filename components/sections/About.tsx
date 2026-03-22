"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="bg-terracotta py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          >
            <p className="text-white/60 text-sm uppercase tracking-[0.2em] font-medium mb-4">
              Quem somos
            </p>
            <h2 className="font-serif text-heading text-white mb-8">
              {content.about.title}
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-6">
              {content.about.description1}
            </p>
            <p className="text-white/75 text-base leading-relaxed">
              {content.about.description2}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 60 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={content.about.image}
                alt="Interior da Clínica Aura Odontologia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-white/20 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
