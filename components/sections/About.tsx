import Image from "next/image";
import { content } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted/30">
            {/* Foto Real da Clínica ou da Equipe */}
            <Image 
              src="/lead-assets/4c4131_42aec306438344ea8fe83f0d7f4c94a0~mv2.jpeg" 
              alt="Sobre a Aura Odontologia"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground w-fit">
              Nossa Missão
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Cuidado Completo e Humanizado para Você
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.about}
            </p>

            <div className="mt-8 grid gap-4">
              {content.differentials.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
