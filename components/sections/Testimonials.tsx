"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring" as const, stiffness: 80 },
  },
};

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-heading text-charcoal">
            {content.testimonials.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {content.testimonials.items.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white p-8 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-4 left-6 text-terracotta/15 font-serif text-[80px] leading-none select-none">
                &ldquo;
              </span>

              <p className="text-charcoal-light text-sm leading-relaxed relative z-10 mb-6 pt-8">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <span className="text-terracotta font-serif text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-charcoal font-medium text-sm">{testimonial.name}</p>
                  <p className="text-charcoal-light text-xs">Paciente</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
