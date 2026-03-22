"use client";

import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary border-primary/20">
              {content.hero.badge}
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Aura <span className="text-primary">Odontologia Integrada</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-[600px]">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="lg" asChild className="rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all">
                <a href={content.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {content.hero.primaryCta}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full h-14 px-8 text-base">
                <a href="#sobre">
                  {content.hero.secondaryCta}
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
              src={content.hero.image}
              alt={content.companyName}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
    </section>
  );
}
