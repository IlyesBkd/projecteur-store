"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Puis-je le connecter à mon smartphone sans fil ?",
    answer: "Oui, via WiFi Mirroring pour diffuser vos contenus en quelques secondes.",
  },
  {
    question: "Est-il assez lumineux pour être utilisé en journée ?",
    answer: "Oui, grâce à ses 800 ANSI Lumens, l'image reste claire même en pleine journée.",
  },
  {
    question: "Le ventilateur est-il bruyant ?",
    answer: "Non, le système de refroidissement silencieux garde un niveau sonore très discret.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "48/72h en France métropolitaine, avec suivi dès l'expédition.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0b1220] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[920px] px-4 sm:px-6 lg:px-10">
        <h2 className="text-center font-heading text-3xl font-semibold text-white sm:text-4xl">
          Questions Fréquentes
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-white/10 bg-white/5 shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180" : "rotate-0"}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? (
                  <div id={`faq-panel-${index}`} className="mx-auto max-w-lg px-5 pb-4 text-base leading-relaxed text-zinc-300">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
