import { content } from "@/lib/content";
import { Baby, Syringe, Stethoscope } from "lucide-react";

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "child": return <Baby className="w-8 h-8 text-secondary" />;
      case "implant": return <Syringe className="w-8 h-8 text-secondary" />;
      case "complex": return <Stethoscope className="w-8 h-8 text-secondary" />;
      default: return <Stethoscope className="w-8 h-8 text-secondary" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-surfaceAlt">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary mb-6">
            Especialidades que Transformam Sorrisos
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de tratamentos para atender às necessidades de toda a sua família, com tecnologia e o cuidado que você merece.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-start p-8 bg-surface rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-border transition-all duration-300"
            >
              <div className="mb-6 p-4 rounded-xl bg-accent/50 text-accent-foreground group-hover:bg-accent transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
