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
      a: "Sim! Após a confirmação do pagamento, você recebe os dados de acesso no seu e-mail instantaneamente."
    },
    {
      q: "O pagamento é recorrente?",
      a: "Não. O pagamento de R$ 19,90 é único e garante seu acesso vitalício, sem mensalidades."
    },
    {
      q: "Preciso de programas pagos?",
      a: "Não! A maioria dos arquivos pode ser usada em programas gratuitos e até mesmo pelo celular."
    },
    {
      q: "Como recebo as atualizações?",
      a: "As atualizações são adicionadas automaticamente na sua área de membros toda semana."
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Dúvidas Frequentes</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl border border-slate-100 px-6">
              <AccordionTrigger className="text-left font-bold text-blue-900 hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-lg leading-relaxed pb-6">
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