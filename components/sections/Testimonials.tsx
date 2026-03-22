"use client";

import { content } from "@/lib/content";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-foreground mb-6"
          >
            {content.testimonials.title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-10 rounded-3xl shadow-md border border-border/50 hover:shadow-xl transition-shadow relative"
            >
              <div className="flex gap-1 mb-6 text-[#FADE3C]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-muted-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="text-foreground font-semibold">
                {testimonial.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
