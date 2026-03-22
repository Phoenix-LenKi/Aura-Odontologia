"use client";

import { content } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:h-[700px] h-[400px] rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src={content.about.image}
              alt="Sobre a Aura Odontologia"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">{content.about.title}</h2>
              <h3 className="text-4xl font-bold tracking-tight text-foreground">
                Um jeito diferente de cuidar do seu sorriso
              </h3>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{content.about.description1}</p>
              <p>{content.about.description2}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
