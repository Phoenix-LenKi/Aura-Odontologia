import Image from "next/image";

export function Team() {
  const teamMembers = [
    {
      name: "Dra. Luíza Martini Beloto",
      role: "Odontopediatria e Saúde da Família",
      cro: "CRO/SC 16794",
      bio: "Cirurgiã-dentista formada pela Universidade Federal de Santa Catarina. Especialista em cuidado infantil e familiar.",
      image: "/lead-assets/IMG_3619_JPEG.jpeg"
    },
    {
      name: "Dra. Priscila Saquet",
      role: "Implantodontia e Alta Complexidade",
      cro: "CRO/SC 15821",
      bio: "Cirurgiã-dentista formada pela Universidade Federal de Santa Catarina. Residência Integrada Multidisciplinar (HU/UFSC).",
      image: "/lead-assets/IMG_3640_JPEG.jpeg"
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-surfaceAlt overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-6">
            Corpo Clínico Especializado
          </h2>
          <p className="text-lg text-muted-foreground">
            Profissionais apaixonadas pelo que fazem, unindo vasta experiência e cuidado humanizado em cada atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 rounded-full overflow-hidden border-4 border-background shadow-xl group-hover:scale-105 transition-transform duration-500 bg-muted/20">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-secondary-foreground font-medium mb-1">{member.role}</p>
              <p className="text-sm text-primary/60 font-semibold mb-4">{member.cro}</p>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
