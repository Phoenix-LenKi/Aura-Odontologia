"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="tratamentos" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Header Column */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-medium mb-4">
                Nossa Expertise
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
                {content.services.title}
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex flex-col justify-end mt-12"
            >
              <p className="text-charcoal/60 max-w-sm text-lg leading-relaxed">
                Oferecemos tratamentos avançados com tecnologia de ponta e cuidado humanizado.
              </p>
              <div className="mt-8 text-terracotta">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.3 8 5 9 4 11C3 13 4 15.5 5.5 16C7 16.5 8 15 8.5 13.5C9 12 9.5 11.5 10 12C10.5 12.5 10 15 10 17C10 19.5 11 22 12 22C13 22 14 19.5 14 17C14 15 13.5 12.5 14 12C14.5 11.5 15 12 15.5 13.5C16 15 17 16.5 18.5 16C20 15.5 21 13 20 11C19 9 17.7 8 17 5.5C16.5 3.5 14.5 2 12 2Z"/>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* List Column */}
          <div className="md:col-span-8">
            <div className="border-t border-charcoal/10">
              {content.services.items.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group block border-b border-charcoal/10 py-10 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-terracotta/50 font-serif italic text-xl">0{index + 1}</span>
                        <h3 className="font-serif text-3xl md:text-4xl text-charcoal transition-colors duration-300 group-hover:text-terracotta">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-charcoal/70 text-lg leading-relaxed md:max-w-xl md:pl-10">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-charcoal/10 group-hover:border-terracotta group-hover:bg-terracotta transition-colors duration-300 shrink-0">
                      <ArrowRight className="w-5 h-5 text-charcoal group-hover:text-white transition-colors duration-300 -rotate-45 group-hover:rotate-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
