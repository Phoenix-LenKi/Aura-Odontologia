"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Aura Odontologia
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#sobre" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Quem somos
          </Link>
          <Link href="#tratamentos" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Tratamentos
          </Link>
          <Link href="#equipe" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Equipe
          </Link>
          <Link href="#depoimentos" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Depoimentos
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="rounded-full shadow-md hover:shadow-lg transition-all">
            <a href={content.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
