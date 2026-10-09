"use client";

import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-kadron-dark-2 border-l border-kadron-gray-1/30 z-50 transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-base text-kadron-gray-5 hover:text-white py-3 border-b border-kadron-gray-1/20 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <a
              href="#contato"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-kadron-red text-white text-sm font-semibold tracking-wider uppercase hover:bg-kadron-red-light transition-colors duration-200 rounded"
            >
              Solicitar Proposta
              <svg
                width="16"
                height="16"
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

          <div className="mt-auto pb-8">
            <p className="text-xs text-kadron-gray-3">
              © Kadron.tech
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
