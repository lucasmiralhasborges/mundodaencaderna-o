"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      q: "O acesso é imediato?",
      a: "Sim! Como um pulo no hiperespaço. Pagou via Pix ou Cartão, o acesso chega no seu e-mail em segundos."
    },
    {
      q: "É vitalício mesmo?",
      a: "Sim. Você paga apenas uma vez R$ 19,90 e os arquivos serão seus para sempre, incluindo todas as atualizações futuras."
    },
    {
      q: "Funciona para iniciantes?",
      a: "Com certeza. A biblioteca é organizada para que mesmo quem está começando hoje consiga produzir peças de luxo."
    },
    {
      q: "Como os arquivos são entregues?",
      a: "Através de uma plataforma exclusiva de membros, organizada por categorias planetárias para facilitar sua busca."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0F172A]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-center text-white mb-16 uppercase tracking-widest">Base de Conhecimento</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white/5 rounded-2xl border border-white/10 px-8 overflow-hidden transition-all hover:bg-white/[0.07]">
              <AccordionTrigger className="text-left font-bold text-xl text-white hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-lg leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;