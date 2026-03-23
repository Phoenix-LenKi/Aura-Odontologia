"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full flex flex-col md:flex-row items-center overflow-hidden bg-white">
      {/* Abstract Asymmetric Background Shape */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-terracotta/5 md:rounded-bl-[120px] -z-10" />

      {/* Desktop Layout is absolute right image, Mobile Layout is stacked */}
      <div className="container max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center relative z-10 w-full min-h-[100svh] md:min-h-[90vh] pb-0 md:pb-0">
        
        {/* Typographic Left */}
        <div className="w-full md:w-[45%] flex flex-col justify-center items-start pt-32 pb-12 md:py-32 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 border border-terracotta/30 text-terracotta text-xs tracking-widest uppercase font-semibold mb-6">
              {content.hero.badge || "Odontologia Especializada"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 70 }}
            className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] text-charcoal mb-6 tracking-tight"
          >
            {content.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-charcoal-light md:text-lg max-w-md mb-10 leading-relaxed font-light"
          >
            {content.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-dark text-white rounded-none h-14 px-8 text-sm font-medium tracking-wide">
              <a href={content.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {content.hero.primaryCta}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-terracotta/30 text-terracotta hover:bg-terracotta/5 rounded-none h-14 px-8 text-sm font-medium tracking-wide bg-transparent">
              <a href="#sobre">
                {content.hero.secondaryCta}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Abstract Aura Animation Right */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="w-full h-[60vh] md:h-full md:absolute md:right-0 md:top-0 md:w-[60%] flex items-center justify-center relative overflow-hidden z-10 bg-[#FAF5EE]/30 md:rounded-l-2xl border-l border-white/50"
        >
          {/* Main Aura Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-terracotta/20 blur-[100px] w-[70%] md:w-[60%] aspect-square"
          />

          {/* Secondary Orbiting Glow */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[90%] md:w-[80%] aspect-square rounded-full border border-terracotta/5"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 aspect-square bg-white/60 blur-[60px] md:blur-[80px] mix-blend-overlay" />
          </motion.div>

          {/* Central Glass Element */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
             className="relative z-20 w-[260px] md:w-[320px] aspect-[3/4] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2rem] flex flex-col items-center justify-center p-8 overflow-hidden"
          >
            {/* Inner reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-60 pointer-events-none" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[1px] border-terracotta/30 border-dashed flex items-center justify-center mb-8"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-terracotta/20 flex items-center justify-center relative">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-terracotta/40 to-terracotta/10 blur-sm absolute" 
                />
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-terracotta/20 backdrop-blur-md border border-white/50 relative z-10" />
              </div>
            </motion.div>
            
            <div className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-3">Odontologia<br />Integrada</div>
            <div className="w-12 h-px bg-terracotta/40 mt-2" />
          </motion.div>

          {/* Floating Badges */}
          <motion.div
             initial={{ opacity: 0, x: 50, rotate: -5 }}
             animate={{ opacity: 1, x: 0, rotate: 0 }}
             transition={{ duration: 1.2, delay: 1, type: "spring" }}
             className="absolute right-[5%] md:right-[15%] bottom-[15%] md:bottom-[20%] bg-white/90 backdrop-blur-md px-5 py-3 border border-white/50 rounded-full shadow-xl flex items-center gap-3 z-30"
          >
            <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-charcoal tracking-wide">Implantodontia</span>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: -50, rotate: 5 }}
             animate={{ opacity: 1, x: 0, rotate: 0 }}
             transition={{ duration: 1.2, delay: 1.2, type: "spring" }}
             className="absolute left-[5%] md:left-[10%] top-[15%] md:top-[25%] bg-white/90 backdrop-blur-md px-5 py-3 border border-white/50 rounded-full shadow-xl flex items-center gap-3 z-30"
          >
            <span className="text-xs md:text-sm font-medium text-charcoal tracking-wide">Odontopediatria</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
