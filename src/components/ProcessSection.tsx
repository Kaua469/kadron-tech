import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Descoberta",
    description:
      "Entendemos seu negócio, seus desafios, objetivos e o que realmente precisa ser resolvido.",
    left: "5.5%",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos a melhor solução, as funcionalidades, a estrutura e o caminho para o desenvolvimento.",
    left: "29.5%",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Transformamos o planejamento em uma solução funcional, moderna e adaptada à realidade da sua empresa.",
    left: "53.5%",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Validamos o projeto, realizamos os ajustes finais e entregamos tudo pronto para uso, com suporte e acompanhamento.",
    left: "77.5%",
  },
];

export default function ProcessSection() {
  return (
    <section id="processo" className="relative w-full bg-kadron-dark overflow-hidden">
      {/* LAYOUT MOBILE & TABLET */}
      <div className="lg:hidden relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <AnimateOnScroll>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-kadron-red" />
            <span className="text-xs font-semibold tracking-[0.2em] text-kadron-red uppercase">
              Nosso Processo
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Da ideia à solução,
            <br />
            com clareza em <span className="text-kadron-red">cada etapa.</span>
          </h2>
          <p className="text-sm md:text-base text-kadron-gray-5 leading-relaxed mb-12">
            Entendemos o seu negócio antes de desenvolver qualquer solução.
            Cada projeto é planejado para resolver necessidades reais, com
            comunicação clara e tecnologia aplicada de forma estratégica.
          </p>
        </AnimateOnScroll>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-kadron-red/30 before:to-transparent">
          {steps.map((step, index) => (
            <AnimateOnScroll key={step.number} delay={index * 100}>
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-kadron-dark-2 border border-kadron-red/30 text-white font-bold font-[family-name:var(--font-playfair)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {step.number}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-lg border border-kadron-gray-1/20 bg-kadron-dark-3/40">
                  <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-kadron-gray-5 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="mt-16 text-center border-t border-kadron-gray-1/10 pt-10">
            <span className="text-[10px] tracking-[0.2em] text-kadron-gray-4 font-semibold uppercase mb-3 block">
              Nossa Essência
            </span>
            <p className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] text-white leading-tight">
              Tecnologia começa com entendimento.
              <br />
              <span className="text-kadron-red">
                O resultado vem de uma solução bem planejada.
              </span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* LAYOUT DESKTOP */}
      <div className="hidden lg:block relative w-full max-w-[1920px] mx-auto aspect-[1672/941]">
        
        {/* Background Image with baked-in icons and lines */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kadron/processo.png"
            alt="Processo Kadron.tech"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content Overlays */}
        <div className="absolute inset-0 z-10">
          
          {/* Top Left Content */}
          <div className="absolute top-[8%] left-[6%] w-[45%]">
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-kadron-red" />
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-kadron-red uppercase">
                  Nosso Processo
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-white leading-[1.1] mb-4">
                Da ideia à solução,
                <br />
                com clareza em <span className="text-kadron-red">cada etapa.</span>
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-kadron-gray-5 leading-relaxed max-w-xl">
                Entendemos o seu negócio antes de desenvolver qualquer solução.
                <br className="hidden lg:block" />
                Cada projeto é planejado para resolver necessidades reais, com
                <br className="hidden lg:block" />
                comunicação clara e tecnologia aplicada de forma estratégica.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Top Right Content */}
          <div className="absolute top-[8%] left-[54%] hidden md:block">
            <AnimateOnScroll delay={100}>
              <div className="relative pl-4 border-l border-kadron-red">
                <ul className="flex flex-col gap-1.5 text-[9px] md:text-[10px] lg:text-xs tracking-[0.25em] text-kadron-gray-4 font-medium uppercase">
                  <li>Planejamento</li>
                  <li>Estratégia</li>
                  <li>Tecnologia</li>
                  <li>Resultados</li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Far Right Content (Middle) */}
          <div className="absolute top-[38%] right-[7%] hidden md:block">
             <AnimateOnScroll delay={150}>
              <div className="flex flex-col items-end gap-1.5 text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.2em] text-kadron-gray-5 font-medium uppercase text-right">
                <div className="w-6 h-px bg-kadron-red mb-1" />
                <span>Ideias</span>
                <span>Processos</span>
                <span>Soluções</span>
                <span>Crescimento</span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="absolute top-[48%] w-[18%]"
              style={{ left: step.left }}
            >
              <AnimateOnScroll delay={index * 100}>
                {/* The number is placed to the left of where the baked-in icon is */}
                <div className="flex items-center mb-[20%]">
                  <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-kadron-gray-3/40 font-[family-name:var(--font-playfair)] leading-none mr-2">
                    {step.number}
                  </span>
                  {/* Invisible spacer to push past the baked-in icon */}
                  <div className="w-[10%] aspect-square" />
                </div>
                
                <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-[10px] md:text-xs lg:text-sm text-kadron-gray-5 leading-relaxed">
                  {step.description}
                </p>
              </AnimateOnScroll>
            </div>
          ))}

          {/* Bottom Left Content */}
          <div className="absolute bottom-[8%] left-[6%] w-[60%]">
            <AnimateOnScroll>
              <div className="mb-2">
                <span className="text-[8px] md:text-[10px] lg:text-xs tracking-[0.2em] text-kadron-gray-4 font-semibold uppercase">
                  Nossa Essência
                </span>
              </div>
              <p className="text-lg md:text-2xl lg:text-3xl xl:text-[32px] font-[family-name:var(--font-playfair)] text-white leading-tight">
                Tecnologia começa com entendimento.
                <br />
                <span className="text-kadron-red">
                  O resultado vem de uma solução bem planejada.
                </span>
              </p>
            </AnimateOnScroll>
          </div>

          {/* Bottom Right Content */}
          <div className="absolute bottom-[10%] right-[6%] hidden md:flex items-center gap-4">
             <AnimateOnScroll delay={100}>
               <div className="flex items-center gap-3">
                 <span className="w-12 h-px bg-kadron-red" />
                 <div className="flex flex-col text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.25em] text-kadron-gray-4 font-medium uppercase">
                   <span>Mais que código.</span>
                   <span>Soluções reais.</span>
                 </div>
               </div>
             </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
