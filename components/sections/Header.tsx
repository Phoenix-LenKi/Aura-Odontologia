"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terracotta">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="text-white font-serif text-lg tracking-wide">
          {content.companyName}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 text-sm font-medium hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={content.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-terracotta text-sm font-semibold px-5 py-2 rounded-sm hover:bg-cream transition-colors duration-200"
          >
            Agendar Consulta
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-terracotta-dark overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/90 text-base font-medium hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={content.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-terracotta text-center font-semibold px-5 py-3 rounded-sm mt-2"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
