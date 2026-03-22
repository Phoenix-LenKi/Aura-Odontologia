import Link from "next/link";
import { content } from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="flex flex-col gap-6">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tight">
              {content.companyName}
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed max-w-sm">
              {content.slogan}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#sobre" className="text-primary-foreground/70 hover:text-white transition-colors">Sobre Nós</Link>
              <Link href="#servicos" className="text-primary-foreground/70 hover:text-white transition-colors">Serviços</Link>
              <Link href="#equipe" className="text-primary-foreground/70 hover:text-white transition-colors">Equipe</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/70">
              <p>WhatsApp: {content.whatsapp}</p>
              <p>E-mail: {content.email}</p>
              <p>{content.socials.instagram && <a href={content.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg">Localização</h4>
            <div className="flex flex-col gap-3 text-primary-foreground/70">
              <p>{content.addresses[0].street}</p>
              <p>{content.addresses[0].complement}</p>
              <p>{content.addresses[0].neighborhood} - {content.addresses[0].city}, {content.addresses[0].state}</p>
              <p>CEP: {content.addresses[0].zipCode}</p>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} {content.companyName}. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span>Desenvolvido para alta performance.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
