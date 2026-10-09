import AnimateOnScroll from "./AnimateOnScroll";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-kadron-dark pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex justify-center">
        <div className="relative w-full h-full max-w-[1920px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[85%_center] sm:object-center opacity-40 sm:opacity-100"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-kadron-dark via-kadron-dark/80 to-transparent" />
          
          {/* Edge fades for ultra-wide screens / zoom out */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-kadron-dark to-transparent hidden 2xl:block" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-kadron-dark to-transparent hidden 2xl:block" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Text Content */}
        <div className="w-full lg:w-[60%] pt-10">
          <AnimateOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-kadron-gray-4" />
              <div className="flex items-center gap-3">
                {["AUTOMAÇÃO", "SITES", "SISTEMAS", "IA"].map((item, i) => (
                  <span key={item} className="flex items-center gap-3">
                    <span className="text-xs md:text-sm font-medium tracking-[0.15em] text-kadron-gray-5">
                      {item}
                    </span>
                    {i < 3 && (
                      <span className="text-kadron-red text-xs">◆</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Sua Jornada de{" "}
              <br className="block sm:hidden" />
              <span className="text-kadron-red italic">Inovação Digital</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-base md:text-lg text-kadron-gray-5 leading-relaxed max-w-xl mb-10">
              Transformamos ideias em soluções digitais que simplificam
              processos, fortalecem sua presença online e ajudam seu
              negócio a crescer.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-kadron-red text-white text-sm font-semibold tracking-wide hover:bg-kadron-red-light transition-all duration-200 rounded-full group"
                style={{ borderRadius: '9999px' }}
              >
                Conheça nossas soluções
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
              <a
                href="https://wa.me/5516997978466"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-kadron-gray-3 text-white text-sm font-semibold tracking-wide hover:bg-white/5 transition-all duration-200 rounded-full"
                style={{ borderRadius: '9999px' }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale conosco
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
