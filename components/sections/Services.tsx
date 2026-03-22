"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";

const serviceIcons = [
  // Tooth icon
  <svg key="tooth" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.3 8 5 9 4 11C3 13 4 15.5 5.5 16C7 16.5 8 15 8.5 13.5C9 12 9.5 11.5 10 12C10.5 12.5 10 15 10 17C10 19.5 11 22 12 22C13 22 14 19.5 14 17C14 15 13.5 12.5 14 12C14.5 11.5 15 12 15.5 13.5C16 15 17 16.5 18.5 16C20 15.5 21 13 20 11C19 9 17.7 8 17 5.5C16.5 3.5 14.5 2 12 2Z"/></svg>,
  // Implant icon
  <svg key="implant" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="6" rx="1"/><line x1="10" y1="8" x2="10" y2="10"/><line x1="14" y1="8" x2="14" y2="10"/><path d="M9 10h6l-1 4h-4l-1-4z"/><path d="M10 14l-0.5 3h5l-0.5-3"/><path d="M10 17l-0.3 2.5h4.6l-0.3-2.5"/><path d="M10.2 19.5L10 22h4l-0.2-2.5"/></svg>,
  // Child/Pediatric icon
  <svg key="child" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7"/><circle cx="10" cy="6.5" r="0.5" fill="currentColor"/><circle cx="14" cy="6.5" r="0.5" fill="currentColor"/><path d="M10 8.5c0.7 0.5 1.3 0.7 2 0.7s1.3-0.2 2-0.7"/></svg>,
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, type: "spring" as const, stiffness: 80 },
  },
};

export default function Services() {
  return (
    <section id="tratamentos" className="bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Nossos serviços
          </p>
          <h2 className="font-serif text-heading text-charcoal">
            {content.services.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {content.services.items.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white p-8 md:p-10 border border-charcoal/5 group cursor-default"
            >
              <div className="text-terracotta mb-6 group-hover:scale-110 transition-transform duration-300">
                {serviceIcons[i]}
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
