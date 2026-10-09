import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const problems = [
  {
    number: "01",
    label: "PROCESSOS MANUAIS",
    title: "Ainda perde tempo com tarefas repetitivas?",
    text: "Atendimentos, pedidos, agendamentos e processos feitos manualmente consomem tempo e aumentam as chances de erro.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "PRESENÇA DIGITAL",
    title: "Seu negócio é encontrado na internet?",
    text: "Uma presença digital profissional fortalece a credibilidade da sua empresa e cria novas oportunidades.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "FALTA DE INTEGRAÇÃO",
    title: "Suas informações estão espalhadas?",
    text: "Ferramentas e informações desconectadas tornam os processos mais lentos e dificultam a organização.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
];

export default function ProblemsSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-kadron-dark-2">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kadron-gray-1 to-transparent" />
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-kadron-red/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center mb-16">
          <div className="w-full lg:w-1/2">
            <AnimateOnScroll>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Seu negócio está preparado para o{" "}
                <span className="text-kadron-red italic">próximo passo</span>?
              </h2>
              <p className="text-base md:text-lg text-kadron-gray-5 leading-relaxed">
                A tecnologia pode simplificar tarefas, organizar processos e
                criar novas oportunidades. Mas quando ferramentas e processos
                não acompanham o crescimento do negócio, pequenas dificuldades
                podem se transformar em grandes perdas.
              </p>
            </AnimateOnScroll>
          </div>
          
          <div className="w-full lg:w-1/2">
            <AnimateOnScroll delay={200}>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-kadron-gray-1/30 bg-kadron-dark-3/50 shadow-lg">
                <Image
                  src="/images/kadron/problemas.png"
                  alt="Seu negócio está preparado para o próximo passo?"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {problems.map((problem, index) => (
            <AnimateOnScroll key={problem.number} delay={index * 150}>
              <div className="group p-6 md:p-8 bg-kadron-dark-3/50 border border-kadron-gray-1/30 rounded-lg hover:border-kadron-red/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-kadron-red/20 font-[family-name:var(--font-playfair)]">
                    {problem.number}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-kadron-red font-semibold uppercase">
                    {problem.label}
                  </span>
                </div>
                <div className="text-kadron-red mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm text-kadron-gray-4 leading-relaxed">
                  {problem.text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="border-t border-kadron-gray-1/30 pt-8">
            <p className="text-base md:text-lg text-kadron-gray-5 max-w-2xl">
              Tecnologia não precisa complicar.{" "}
              <span className="text-white font-medium">
                Ela precisa trabalhar a favor do seu negócio.
              </span>
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
