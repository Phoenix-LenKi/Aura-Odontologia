"use client";

import { content } from "@/lib/content";
import Image from "next/image";
import { motion } from "framer-motion";

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-foreground mb-6"
          >
            {content.team.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {content.team.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {content.team.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-[2rem] overflow-hidden shadow-lg border border-border/50 group"
            >
              <div className="relative h-[450px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-1">{member.role}</div>
                <div className="text-sm text-muted-foreground mb-4">{member.cro}</div>
                <p className="text-muted-foreground/90 leading-relaxed text-sm">
                  {member.education}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
