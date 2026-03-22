"use client";

import { content } from "@/lib/content";
import { Stethoscope, Sparkles, Smile } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  "Odontologia Clínica": Stethoscope,
  "Implantodontia": Sparkles,
  "Odontopediatria": Smile,
};

export function Services() {
  return (
    <section id="tratamentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-foreground"
          >
            {content.services.title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.title as keyof typeof iconMap] || Stethoscope;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
