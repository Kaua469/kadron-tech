import AnimateOnScroll from "./AnimateOnScroll";

const solutions = [
  {
    title: "Sites Profissionais",
    description:
      "Sua empresa merece uma presença digital à altura. Desenvolvemos sites modernos, rápidos, responsivos e personalizados para apresentar seu negócio com profissionalismo.",
    tags: ["Institucional", "Landing Pages", "Catálogos", "Formulários", "WhatsApp"],
    tagline: "SUA EMPRESA BEM APRESENTADA SEMPRE",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Sistemas Personalizados",
    description:
      "Ferramentas feitas para a sua rotina. Desenvolvemos sistemas web para organizar informações e atender processos específicos da sua empresa.",
    tags: ["Agendamentos", "Gestão", "Painéis", "Clientes", "Processos"],
    tagline: "SOLUÇÕES QUE SE ADAPTAM À SUA REALIDADE",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
      </svg>
    ),
  },
  {
    title: "Automações",
    description:
      "Menos tarefas repetitivas. Mais tempo para o que importa. Automatizamos processos para reduzir trabalho manual, melhorar a eficiência da operação e conectar ferramentas utilizadas pela empresa.",
    tags: ["Atendimento", "Processos", "Notificações", "Fluxos", "WhatsApp", "Integrações"],
    tagline: "AUTOMAÇÃO QUE GERA TEMPO PARA O QUE REALMENTE IMPORTA",
    hasExternalNote: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "IA & Integrações",
    description:
      "Conecte ferramentas e potencialize processos. Criamos integrações e aplicamos inteligência artificial quando ela realmente agrega valor ao negócio.",
    tags: ["APIs", "Integrações", "IA", "Dados", "Automação"],
    tagline: "TECNOLOGIA CONECTADA COM O SEU CRESCIMENTO",
    hasExternalNote: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 2 6H14c0-3 2-4 2-6a4 4 0 0 0-4-4z" />
        <path d="M10 12h4M10 15h4M11 18h2" />
        <path d="M3 9h2M19 9h2M5.6 5.6l1.4 1.4M17 7l1.4-1.4" />
      </svg>
    ),
  },
];

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="relative py-20 md:py-32 overflow-hidden bg-kadron-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kadron-gray-1 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-kadron-red" />
                <span className="text-xs font-semibold tracking-[0.2em] text-kadron-red uppercase">
                  Nossas Soluções
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Tecnologia que trabalha
                <br />
                pelo{" "}
                <span className="text-kadron-red italic">seu negócio.</span>
              </h2>
              <p className="text-base md:text-lg text-kadron-gray-5 leading-relaxed">
                Desenvolvemos soluções digitais sob medida para simplificar
                processos, melhorar a experiência dos seus clientes e ajudar
                sua empresa a evoluir.
              </p>
            </div>
          </div>
        </AnimateOnScroll>



        {/* HTML Cards for SEO and interactive details */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {solutions.map((solution, index) => (
            <AnimateOnScroll key={solution.title} delay={index * 100}>
              <div className="group flex flex-col h-full p-6 bg-kadron-dark-3/60 border border-kadron-gray-1/25 rounded-lg hover:border-kadron-red/20 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-kadron-dark-5 border border-kadron-gray-1/30 text-kadron-red mb-5 group-hover:border-kadron-red/30 transition-colors duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-sm text-kadron-gray-4 leading-relaxed mb-5 flex-grow">
                  {solution.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-[11px] text-kadron-gray-5 px-2.5 py-1 rounded border border-kadron-gray-1/30 bg-kadron-dark/50"
                    >
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        className="text-kadron-red"
                      >
                        <path
                          d="M1 4l2 2 4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
                {"hasExternalNote" in solution && solution.hasExternalNote && (
                  <div className="mb-5 p-3 rounded bg-kadron-dark/60 border border-kadron-gray-1/20">
                    <div className="flex items-center gap-2 mb-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-kadron-red">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                      <span className="text-[10px] tracking-[0.15em] text-kadron-red font-semibold uppercase">
                        Prazos e integrações externas
                      </span>
                    </div>
                    <p className="text-[11px] text-kadron-gray-4 leading-relaxed">
                      Algumas automações podem depender de análise, liberação ou aprovação de plataformas externas, como a Meta. Nesses casos, o prazo pode variar conforme o processo da própria plataforma. A Kadron.tech acompanha as etapas e mantém o cliente informado durante o processo.
                    </p>
                  </div>
                )}
                <div className="mt-auto pt-4 border-t border-kadron-gray-1/20">
                  <span className="text-[9px] tracking-[0.2em] text-kadron-gray-3 font-semibold uppercase">
                    {solution.tagline}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
