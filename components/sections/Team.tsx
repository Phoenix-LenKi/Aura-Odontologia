"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  return (
    <section id="equipe" className="bg-[#FAF5EE] py-24 md:py-32 overflow-hidden text-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-32"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-terracotta text-sm uppercase tracking-[0.2em] font-medium mb-4">
                Corpo Clínico
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
                {content.team.title}
              </h2>
            </div>
            <p className="text-charcoal/70 text-lg max-w-sm leading-relaxed pb-2">
              {content.team.description}
            </p>
          </div>
        </motion.div>

        <div className="space-y-24 md:space-y-40 mt-16">
          {content.team.members.map((member, index) => (
            <div 
              key={member.name} 
              className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full md:w-5/12 relative"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    quality={90}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-charcoal/5" />
                </div>
                {/* Decorative depth block */}
                <div className={`absolute -bottom-8 ${index % 2 !== 0 ? '-left-8' : '-right-8'} w-full h-full border border-terracotta/30 rounded-sm -z-10`} />
              </motion.div>
              
              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full md:w-7/12"
              >
                <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
                    {member.name}
                  </h3>
                  <p className="text-terracotta text-sm md:text-base uppercase tracking-[0.15em] font-medium mb-8">
                    {member.cro}
                  </p>
                  <p className="text-charcoal/70 text-lg md:text-xl leading-relaxed max-w-xl font-light">
                    {member.education}
                  </p>
                  
                  <div className="w-16 h-px bg-terracotta mt-12" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
