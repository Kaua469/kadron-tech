const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Quem está por trás", href: "#fundador" },
  { label: "Contato", href: "#contato" },
];

const contacts = [
  {
    label: "(16) 9979-78466",
    href: "https://wa.me/5516997978466",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: "kadron.tech@gmail.com",
    href: "mailto:kadron.tech@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "kadron.tech",
    href: "https://instagram.com/kadron.tech",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-kadron-dark-2 border-t border-kadron-gray-1/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#inicio"
              className="inline-block mb-4"
              aria-label="Kadron.tech"
            >
              <span className="text-xl font-bold text-white tracking-tight">
                Kadron
                <span className="text-kadron-red">.</span>
                tech
              </span>
            </a>
            <p className="text-sm text-kadron-gray-4 leading-relaxed max-w-xs">
              Tecnologia que simplifica, organiza e impulsiona negócios.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] text-kadron-gray-5 uppercase mb-4">
              Navegação
            </h4>
            <nav
              className="flex flex-col gap-2"
              aria-label="Links do rodapé"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-kadron-gray-4 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] text-kadron-gray-5 uppercase mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="inline-flex items-center gap-2 text-sm text-kadron-gray-4 hover:text-white transition-colors duration-200"
                >
                  <span className="text-kadron-red">{contact.icon}</span>
                  {contact.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] text-kadron-gray-5 uppercase mb-4">
              Vamos começar?
            </h4>
            <p className="text-sm text-kadron-gray-4 mb-4">
              Solicite uma proposta e vamos conversar sobre o seu projeto.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-kadron-red text-white text-xs font-semibold tracking-wider uppercase hover:bg-kadron-red-light transition-colors duration-200 rounded"
            >
              Solicitar Proposta
              <svg
                width="14"
                height="14"
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

        {/* Bottom */}
        <div className="border-t border-kadron-gray-1/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-kadron-gray-3">
            © {currentYear} Kadron.tech — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="text-kadron-gray-3 hover:text-kadron-red transition-colors duration-200"
                aria-label={contact.label}
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
