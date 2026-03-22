import Link from "next/link";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8 flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Espaço para logo */}
          <Link href="/" className="font-heading font-bold text-xl tracking-tight text-primary">
            {content.companyName}
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          <Link href="#sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Sobre Nós
          </Link>
          <Link href="#equipe" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Equipe
          </Link>
          <Link href="#servicos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Serviços
          </Link>
          <Link href="#localizacao" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Localização
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex">
            <Link href={content.primaryCtaHref} target="_blank" rel="noopener noreferrer">
              Marque Agora
            </Link>
          </Button>
          {/* Placeholder for Mobile Menu toggle */}
        </div>
      </div>
    </header>
  );
}
