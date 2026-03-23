"use client";

import { useState, useEffect } from "react";
import { content } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Sobre a Clínica", href: "#sobre" },
  { label: "Nossos Tratamentos", href: "#tratamentos" },
  { label: "Corpo Clínico", href: "#equipe" },
  { label: "Pacientes", href: "#depoimentos" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isOpen ? "bg-white py-4 border-b border-border" : scrolled ? "bg-white/95 backdrop-blur-sm border-b border-border py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <a href="#inicio" className="flex flex-col relative z-[60] group">
          <span className={`font-serif text-2xl tracking-wide transition-colors ${scrolled || isOpen ? "text-charcoal" : "text-terracotta"}`}>
            AURA
          </span>
          <span className={`text-[0.65rem] tracking-[0.3em] font-medium uppercase mt-0.5 transition-colors ${scrolled || isOpen ? "text-charcoal-light" : "text-terracotta/80"}`}>
            Odontologia
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-terracotta transition-colors duration-200 ${scrolled ? "text-charcoal-light" : "text-charcoal/80"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Button asChild className="bg-terracotta hover:bg-terracotta-dark text-white rounded-none px-6 shadow-none flex items-center gap-2 h-11">
            <a href={content.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar Avaliação <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden relative z-[60] p-2 -mr-2 transition-colors ${scrolled || isOpen ? "text-charcoal" : "text-terracotta"}`}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      </header>

      {/* Mobile Menu Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl text-charcoal hover:text-terracotta transition-colors border-b border-border pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-auto pb-12"
            >
              <Button asChild size="lg" className="w-full bg-terracotta text-white rounded-none shadow-none h-14 text-lg">
                <a href={content.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agendar Avaliação
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
