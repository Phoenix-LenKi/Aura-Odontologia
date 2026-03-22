"use client";

import { content } from "@/lib/content";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const memberVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring" as const, stiffness: 70 },
  },
};

export default function Team() {
  return (
    <section id="equipe" className="bg-terracotta py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-white/60 text-sm uppercase tracking-[0.2em] font-medium mb-4">
            Conheça
          </p>
          <h2 className="font-serif text-heading text-white mb-6">
            {content.team.title}
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {content.team.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-12 mt-16 max-w-4xl mx-auto"
        >
          {content.team.members.map((member) => (
            <motion.div
              key={member.name}
              variants={memberVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/30 mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="224px"
                  quality={85}
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                {member.name}
              </h3>
              <p className="text-white/60 text-sm font-medium mb-3">
                {member.cro}
              </p>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                {member.education}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
