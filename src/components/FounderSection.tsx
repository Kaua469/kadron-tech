import AnimateOnScroll from "./AnimateOnScroll";

const differentials = [
  {
    title: "Visão estratégica",
    text: "Tecnologia alinhada aos objetivos do seu negócio.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="8" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
  },
  {
    title: "Atendimento próximo",
    text: "Parceria verdadeira em todas as etapas do projeto.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Soluções sob medida",
    text: "Projetos pensados para a sua realidade.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function FounderSection() {
  return (
    <section id="fundador" className="relative py-20 md:py-32 overflow-hidden bg-kadron-dark-2">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kadron-gray-1 to-transparent" />
      <div className="absolute left-1/4 top-1/3 w-72 h-72 bg-kadron-red/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          {/* Text content */}
          <div>
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-kadron-red" />
                <span className="text-xs font-semibold tracking-[0.2em] text-kadron-red uppercase">
                  Quem está por trás da Kadron.tech
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Tecnologia feita com propósito, proximidade e{" "}
                <span className="text-kadron-red italic">visão de negócio.</span>
              </h2>

              <p className="text-base md:text-lg text-kadron-gray-5 leading-relaxed mb-8">
                A Kadron.tech nasceu com o objetivo de aproximar tecnologia e
                negócios de forma prática. Cada projeto começa entendendo a
                realidade da empresa, os desafios existentes e o que a tecnologia
                realmente pode melhorar.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-px bg-kadron-red" />
                  <span className="text-lg font-semibold text-white">
                    Kauã Biscalchini
                  </span>
                  <span className="text-kadron-gray-4">—</span>
                  <span className="text-sm text-kadron-gray-5">
                    Fundador da Kadron.tech
                  </span>
                </div>
                <p className="text-xs tracking-[0.15em] text-kadron-gray-3 uppercase ml-9">
                  Desenvolvimento • Automação • Soluções Digitais
                </p>
              </div>

              <blockquote className="relative pl-5 border-l-2 border-kadron-red/40 mb-8">
                <p className="text-base italic text-kadron-gray-5 leading-relaxed font-[family-name:var(--font-playfair)]">
                  &ldquo;Meu objetivo é transformar necessidades reais de
                  empresas em soluções digitais claras, funcionais e preparadas
                  para evoluir.&rdquo;
                </p>
              </blockquote>
            </AnimateOnScroll>
          </div>


        </div>

        {/* Bottom differentials */}
        <AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-5">
            {differentials.map((diff) => (
              <div
                key={diff.title}
                className="flex items-start gap-4 p-5 bg-kadron-dark-3/40 border border-kadron-gray-1/20 rounded-lg"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-kadron-dark-5 border border-kadron-gray-1/30 text-kadron-red shrink-0">
                  {diff.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-kadron-gray-4 leading-relaxed">
                    {diff.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
