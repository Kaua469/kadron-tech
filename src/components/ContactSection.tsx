"use client";

import { useState, FormEvent, ReactNode } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

type SolutionType = "Site" | "Sistema" | "Automação" | "IA & Integrações" | "Ainda não sei";

interface FormData {
  nome: string;
  empresa: string;
  whatsapp: string;
  email: string;
  solucao: SolutionType | "";
  descricao: string;
}

interface FormErrors {
  nome?: string;
  whatsapp?: string;
  email?: string;
  solucao?: string;
  descricao?: string;
}

const solutionOptions: { label: SolutionType; icon: ReactNode }[] = [
  {
    label: "Site",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Sistema",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68" />
      </svg>
    ),
  },
  {
    label: "Automação",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    label: "IA & Integrações",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4c0 2 2 3 2 6H14c0-3 2-4 2-6a4 4 0 0 0-4-4z" />
        <path d="M10 12h4M10 15h4M11 18h2" />
      </svg>
    ),
  },
  {
    label: "Ainda não sei",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Resposta personalizada",
    text: "Analisamos seu cenário e retornamos com um contato consultivo.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Soluções sob medida",
    text: "Recomendamos a melhor abordagem de acordo com seus objetivos e sua realidade.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09" />
      </svg>
    ),
  },
  {
    title: "Sem compromisso inicial",
    text: "Converse sem compromisso e receba uma análise inicial sobre o seu projeto.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    empresa: "",
    whatsapp: "",
    email: "",
    solucao: "",
    descricao: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const showExternalNote =
    formData.solucao === "Automação" || formData.solucao === "IA & Integrações";

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório.";
    if (!formData.whatsapp.trim())
      newErrors.whatsapp = "WhatsApp é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Formato de e-mail inválido.";
    }
    if (!formData.solucao)
      newErrors.solucao = "Selecione o tipo de solução.";
    if (!formData.descricao.trim())
      newErrors.descricao = "Descreva um pouco sobre o seu projeto.";
    return newErrors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/kadron.tech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Novo Contato Kadron.tech: ${formData.nome}`,
          Nome: formData.nome,
          Empresa: formData.empresa || "Não informada",
          WhatsApp: formData.whatsapp,
          Email: formData.email,
          Solução: formData.solucao,
          Projeto: formData.descricao,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário");
      }

      setIsSuccess(true);
      setFormData({
        nome: "",
        empresa: "",
        whatsapp: "",
        email: "",
        solucao: "",
        descricao: "",
      });
    } catch (error) {
      console.error(error);
      alert("Houve um erro ao enviar sua mensagem. Por favor, tente novamente ou chame no WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  return (
    <section id="contato" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-kadron-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kadron-gray-1 to-transparent" />

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-kadron-red/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: content */}
          <div>
            <AnimateOnScroll>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-kadron-red" />
                <span className="text-xs font-semibold tracking-[0.2em] text-kadron-red uppercase">
                  Vamos construir algo juntos
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Pronto para transformar seu negócio com{" "}
                <span className="text-kadron-red italic">tecnologia?</span>
              </h2>

              <p className="text-base md:text-lg text-kadron-gray-5 leading-relaxed mb-10">
                Conte um pouco sobre o que sua empresa precisa. A Kadron.tech
                analisa o seu cenário e entra em contato para entender o
                projeto e apresentar o melhor caminho para a sua solução.
              </p>
            </AnimateOnScroll>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <AnimateOnScroll key={benefit.title} delay={index * 100}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-kadron-dark-3 border border-kadron-gray-1/30 text-kadron-red shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-kadron-gray-4 leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={300}>
              <div className="mt-10 hidden lg:block">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-px bg-kadron-red" />
                  <span className="text-[9px] tracking-[0.25em] text-kadron-gray-3 font-medium uppercase">
                    IDEIAS REAIS
                  </span>
                </div>
                <span className="text-[9px] tracking-[0.25em] text-kadron-gray-3 font-medium uppercase ml-9">
                  PARA O SEU PRÓXIMO PASSO.
                </span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: form */}
          <AnimateOnScroll delay={200}>
            <div className="bg-kadron-dark-3/60 border border-kadron-gray-1/25 rounded-lg p-6 md:p-8">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-kadron-red/10 border border-kadron-red/30 text-kadron-red mb-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Solicitação enviada!
                  </h3>
                  <p className="text-sm text-kadron-gray-4 leading-relaxed max-w-sm">
                    Recebemos sua solicitação. Em breve entraremos em contato
                    para entender melhor o seu projeto.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm text-kadron-red hover:text-kadron-red-light transition-colors duration-200"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Fale com a nossa equipe
                  </h3>
                  <p className="text-sm text-kadron-gray-4 mb-6">
                    Preencha os dados abaixo e vamos conversar sobre o seu
                    projeto.
                  </p>

                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="contact-nome"
                        className="block text-xs text-kadron-gray-5 mb-1.5 font-medium"
                      >
                        Nome <span className="text-kadron-red">*</span>
                      </label>
                      <input
                        id="contact-nome"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={(e) => updateField("nome", e.target.value)}
                        className={`w-full px-4 py-2.5 bg-kadron-dark border rounded text-sm text-white placeholder:text-kadron-gray-3 focus:outline-none focus:border-kadron-red/50 transition-colors duration-200 ${
                          errors.nome
                            ? "border-kadron-red/50"
                            : "border-kadron-gray-1/40"
                        }`}
                      />
                      {errors.nome && (
                        <p className="text-[11px] text-kadron-red mt-1">
                          {errors.nome}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-empresa"
                        className="block text-xs text-kadron-gray-5 mb-1.5 font-medium"
                      >
                        Empresa
                      </label>
                      <input
                        id="contact-empresa"
                        type="text"
                        placeholder="Nome da sua empresa"
                        value={formData.empresa}
                        onChange={(e) =>
                          updateField("empresa", e.target.value)
                        }
                        className="w-full px-4 py-2.5 bg-kadron-dark border border-kadron-gray-1/40 rounded text-sm text-white placeholder:text-kadron-gray-3 focus:outline-none focus:border-kadron-red/50 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* WhatsApp + Email */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="contact-whatsapp"
                        className="block text-xs text-kadron-gray-5 mb-1.5 font-medium"
                      >
                        WhatsApp <span className="text-kadron-red">*</span>
                      </label>
                      <input
                        id="contact-whatsapp"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          updateField("whatsapp", e.target.value)
                        }
                        className={`w-full px-4 py-2.5 bg-kadron-dark border rounded text-sm text-white placeholder:text-kadron-gray-3 focus:outline-none focus:border-kadron-red/50 transition-colors duration-200 ${
                          errors.whatsapp
                            ? "border-kadron-red/50"
                            : "border-kadron-gray-1/40"
                        }`}
                      />
                      {errors.whatsapp && (
                        <p className="text-[11px] text-kadron-red mt-1">
                          {errors.whatsapp}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs text-kadron-gray-5 mb-1.5 font-medium"
                      >
                        E-mail <span className="text-kadron-red">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="seu@e-mail.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={`w-full px-4 py-2.5 bg-kadron-dark border rounded text-sm text-white placeholder:text-kadron-gray-3 focus:outline-none focus:border-kadron-red/50 transition-colors duration-200 ${
                          errors.email
                            ? "border-kadron-red/50"
                            : "border-kadron-gray-1/40"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-kadron-red mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Solution type */}
                  <div className="mb-4">
                    <label className="block text-xs text-kadron-gray-5 mb-2 font-medium">
                      Qual solução você procura?{" "}
                      <span className="text-kadron-red">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {solutionOptions.map((option) => (
                        <button
                          key={option.label}
                          type="button"
                          onClick={() =>
                            updateField("solucao", option.label)
                          }
                          className={`inline-flex items-center gap-1.5 px-3 py-2 rounded text-xs font-medium border transition-all duration-200 ${
                            formData.solucao === option.label
                              ? "bg-kadron-red/10 border-kadron-red/40 text-kadron-red"
                              : "bg-kadron-dark border-kadron-gray-1/40 text-kadron-gray-5 hover:border-kadron-gray-2"
                          }`}
                        >
                          {option.icon}
                          {option.label}
                        </button>
                      ))}
                    </div>
                    {errors.solucao && (
                      <p className="text-[11px] text-kadron-red mt-1">
                        {errors.solucao}
                      </p>
                    )}
                  </div>

                  {/* External note */}
                  {showExternalNote && (
                    <div className="mb-4 p-3 rounded bg-kadron-dark/80 border border-kadron-gray-1/20">
                      <div className="flex items-start gap-2">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="text-kadron-gray-4 mt-0.5 shrink-0"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4M12 8h.01" />
                        </svg>
                        <p className="text-[11px] text-kadron-gray-4 leading-relaxed">
                          Projetos que utilizam plataformas externas podem
                          depender de verificações, permissões ou aprovações do
                          próprio fornecedor. Em integrações com serviços da
                          Meta, por exemplo, determinados prazos podem variar
                          conforme a análise da plataforma.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Project description */}
                  <div className="mb-6">
                    <label
                      htmlFor="contact-descricao"
                      className="block text-xs text-kadron-gray-5 mb-1.5 font-medium"
                    >
                      Conte um pouco sobre o seu projeto{" "}
                      <span className="text-kadron-red">*</span>
                    </label>
                    <textarea
                      id="contact-descricao"
                      rows={4}
                      placeholder="Descreva seus objetivos, desafios ou o que você gostaria de desenvolver..."
                      value={formData.descricao}
                      onChange={(e) =>
                        updateField("descricao", e.target.value)
                      }
                      className={`w-full px-4 py-2.5 bg-kadron-dark border rounded text-sm text-white placeholder:text-kadron-gray-3 focus:outline-none focus:border-kadron-red/50 transition-colors duration-200 resize-y min-h-[100px] ${
                        errors.descricao
                          ? "border-kadron-red/50"
                          : "border-kadron-gray-1/40"
                      }`}
                    />
                    {errors.descricao && (
                      <p className="text-[11px] text-kadron-red mt-1">
                        {errors.descricao}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-kadron-red text-white text-sm font-semibold tracking-wider uppercase rounded hover:bg-kadron-red-light transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-25"
                          />
                          <path
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            fill="currentColor"
                            className="opacity-75"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Proposta
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Disclaimer */}
                  <div className="flex items-center gap-2 mt-4 justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-kadron-gray-3"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <p className="text-[11px] text-kadron-gray-3">
                      Sem compromisso. Vamos entender sua necessidade antes
                      de propor qualquer solução.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
