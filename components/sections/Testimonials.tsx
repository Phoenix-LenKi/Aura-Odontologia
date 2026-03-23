"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-medium mb-4">
            O que dizem
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            {content.testimonials.title}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
          {content.testimonials.items.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-white p-10 md:p-12 relative flex-1 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] ${
                i === 1 ? 'md:mt-12' : i === 2 ? 'md:mt-24' : ''
              }`}
            >
              {/* Large quote mark behind text */}
              <span className="absolute -top-4 -left-2 text-charcoal/5 font-serif text-[120px] leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <p className="text-charcoal/80 text-lg leading-relaxed mb-10 font-light italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-charcoal/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-cream border border-charcoal/5 flex items-center justify-center shrink-0">
                    <span className="text-terracotta font-serif text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-charcoal font-medium text-base tracking-wide">
                      {testimonial.name}
                    </p>
                    <p className="text-terracotta text-xs uppercase tracking-wider mt-1">
                      Paciente
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
