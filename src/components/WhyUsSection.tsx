import AnimateOnScroll from "./AnimateOnScroll";

const reasons = [
  {
    title: "Soluções sob medida",
    description:
      "Cada negócio é único. Desenvolvemos soluções personalizadas de acordo com seus objetivos, desafios e realidade.",
    tagline: "TECNOLOGIA ALINHADA AO SEU NEGÓCIO",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Foco em resultados",
    description:
      "Nosso trabalho é orientado a gerar valor real para o seu negócio, com soluções que otimizam processos e impulsionam o crescimento.",
    tagline: "IDEIAS QUE GERAM EVOLUÇÃO",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Transparência e parceria",
    description:
      "Valorizamos uma comunicação clara, com acompanhamento próximo em todas as etapas do projeto. Você sabe o que está sendo feito e por quê.",
    tagline: "CONFIANÇA EM CADA ETAPA",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Suporte e evolução",
    description:
      "Nosso relacionamento não termina na entrega. A solução pode continuar evoluindo conforme novas necessidades surgirem.",
    tagline: "SEMPRE AO SEU LADO EM NOVOS DESAFIOS",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const concepts = [
  {
    label: "ESTRATÉGIA",
    text: "Pensamos antes de desenvolver.",
  },
  {
    label: "TECNOLOGIA",
    text: "Escolhemos soluções adequadas ao negócio.",
  },
  {
    label: "PARCERIA",
    text: "Comunicação próxima durante o projeto.",
  },
  {
    label: "EVOLUÇÃO",
    text: "Soluções preparadas para acompanhar o crescimento.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-kadron-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kadron-gray-1 to-transparent" />

      <div className="absolute right-0 top-1/4 w-96 h-96 bg-kadron-red/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16">
            <div className="max-w-2xl mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-kadron-red" />
                <span className="text-xs font-semibold tracking-[0.2em] text-kadron-red uppercase">
                  Por que escolher a Kadron.tech
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Mais que tecnologia,
                <br />
                um parceiro para o{" "}
                <span className="text-kadron-red italic">seu crescimento.</span>
              </h2>
              <p className="text-base md:text-lg text-kadron-gray-5 leading-relaxed">
                Unimos estratégia, tecnologia e comprometimento para entregar
                soluções que realmente geram valor para o seu negócio.
              </p>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-1 text-right pt-2">
              {[
                "SOLUÇÕES REAIS",
                "PARA EMPRESAS",
                "QUE PENSAM",
                "MAIS LONGE",
              ].map((word) => (
                <span
                  key={word}
                  className="text-[10px] tracking-[0.25em] text-kadron-gray-3 font-medium"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Reason Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {reasons.map((reason, index) => (
            <AnimateOnScroll key={reason.title} delay={index * 100}>
              <div className="group flex flex-col h-full p-6 bg-kadron-dark-3/60 border border-kadron-gray-1/25 rounded-lg hover:border-kadron-red/20 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-kadron-dark-5 border border-kadron-gray-1/30 text-kadron-red mb-5 group-hover:border-kadron-red/30 transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-kadron-gray-4 leading-relaxed flex-grow mb-4">
                  {reason.description}
                </p>
                <div className="mt-auto pt-4 border-t border-kadron-gray-1/20">
                  <span className="text-[9px] tracking-[0.2em] text-kadron-gray-3 font-semibold uppercase">
                    {reason.tagline}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom bar: concepts + CTA */}
        <AnimateOnScroll>
          <div className="border-t border-kadron-gray-1/30 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Concepts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 flex-grow">
              {concepts.map((concept) => (
                <div key={concept.label} className="flex items-start gap-3">
                  <div className="flex flex-col items-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-kadron-red" />
                    <span className="w-px h-4 bg-kadron-red/20" />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-[0.2em] text-kadron-red font-semibold uppercase mb-1">
                      {concept.label}
                    </span>
                    <span className="text-xs text-kadron-gray-4">
                      {concept.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start lg:items-end gap-3 shrink-0">
              <span className="text-xs tracking-[0.15em] text-kadron-gray-5 uppercase">
                Vamos conversar?
              </span>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-kadron-red text-white text-sm font-semibold tracking-wider uppercase rounded hover:bg-kadron-red transition-all duration-200 group"
              >
                Falar com a equipe
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
