"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";

export function Map() {
  return (
    <section className="relative h-[500px] w-full bg-muted">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.243542283084!2d-48.601718!3d-27.587823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzE2LjIiUyA0OMKwMzYnMDYuMiJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Google Maps Location"
          className="grayscale opacity-80"
        ></iframe>
      </div>
      
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 h-full relative z-20 flex items-center justify-end pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-background/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-sm pointer-events-auto border border-border/50"
        >
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Chegue Facilmente</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {content.footer.locationText}
          </p>
          <div className="space-y-4 text-sm font-medium">
            <p className="flex items-start gap-3 text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
              {content.address}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
