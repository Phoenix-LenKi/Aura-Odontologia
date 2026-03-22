import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex max-w-2xl flex-col gap-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl text-primary">
              {content.heroTitle}
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 w-full sm:w-auto text-base">
                <Link href={content.primaryCtaHref} target="_blank" rel="noopener noreferrer">
                  {content.primaryCtaLabel}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-semibold px-8 h-14 w-full sm:w-auto text-base border-2">
                <Link href={content.secondaryCtaHref}>
                  {content.secondaryCtaLabel}
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>Odontopediatria e Alta Complexidade</span>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none aspect-[4/5] lg:aspect-square overflow-hidden rounded-2xl md:rounded-[2rem] bg-accent/30 shadow-2xl">
            {/* Using one of the provided real images from Phase 1 */}
            <Image 
              src="/lead-assets/IMG_3644_JPEG.jpeg"
              alt="Aura Odontologia Integrada"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Premium Overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
