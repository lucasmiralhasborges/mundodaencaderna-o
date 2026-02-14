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
      q: "Como recebo o acesso?",
      a: "O acesso é enviado imediatamente para o seu e-mail após a confirmação do pagamento. Pagamentos via PIX ou Cartão são liberados na hora."
    },
    {
      q: "O pagamento é mensal?",
      a: "Não! O pagamento é único. Você paga apenas R$ 19,90 uma vez e tem acesso vitalício à biblioteca e todas as atualizações."
    },
    {
      q: "Os arquivos são editáveis?",
      a: "Sim! A biblioteca inclui arquivos em formatos prontos para imprimir (PDF) e também arquivos editáveis para que você possa colocar a sua marca ou personalizar para o cliente."
    },
    {
      q: "Funciona em qualquer impressora?",
      a: "Sim, os arquivos são otimizados para impressoras jato de tinta ou laser comuns."
    },
    {
      q: "Preciso de programas caros?",
      a: "A maioria dos arquivos pode ser aberta com programas gratuitos como Adobe Reader ou editores online como Photopea e Canva."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#FAF9F6]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#333] mb-12">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl border border-gray-100 px-6">
              <AccordionTrigger className="text-left font-bold text-lg text-[#333] hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
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