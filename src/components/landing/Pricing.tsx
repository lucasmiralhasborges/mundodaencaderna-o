"use client";

import React from 'react';
import CTAButton from './CTAButton';
import { Check, ShieldCheck, Infinity, Zap, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Plano Essencial",
      price: "9,90",
      installments: "2x de R$ 5,15",
      features: [
        "Acesso a 50.000+ arquivos",
        "Miolos padrão 2025",
        "Acesso por 1 ano",
        "Suporte via E-mail",
        "Sem atualizações semanais"
      ],
      highlight: false,
      buttonText: "QUERO O ESSENCIAL"
    },
    {
      name: "Plano Premium",
      price: "19,90",
      installments: "4x de R$ 5,35",
      features: [
        "Acesso total (100.000+ arquivos)",
        "Todos os BÔNUS inclusos",
        "Curso Silhouette Studio",
        "Acesso VITALÍCIO",
        "Atualizações SEMANAIS",
        "Suporte Prioritário"
      ],
      highlight: true,
      buttonText: "QUERO O PREMIUM COMPLETO"
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Valor Real do Investimento</h2>
        <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-16">Escolha o plano ideal para você</h3>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl border-2 transition-transform hover:scale-[1.02] ${
                plan.highlight ? 'border-emerald-500 ring-4 ring-emerald-500/10' : 'border-slate-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-white" /> MAIS VENDIDO
                </div>
              )}

              <div className="mb-8 text-left">
                <h4 className={`text-xl font-bold mb-4 ${plan.highlight ? 'text-emerald-700' : 'text-slate-900'}`}>
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-xl font-medium">R$</span>
                  <span className="text-6xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-400 font-medium">/único</span>
                </div>
                <p className="text-emerald-600 font-bold mt-2 italic">{plan.installments}</p>
              </div>

              <ul className="space-y-4 mb-10 text-left border-t border-slate-100 pt-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-emerald-500' : 'text-blue-500'}`} />
                    <span className={feature.includes("NÃO") || feature.includes("Sem") ? "text-slate-400" : "font-medium"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <CTAButton className={`w-full !py-4 !text-lg ${!plan.highlight && 'bg-none bg-slate-800 from-slate-800 to-slate-900'}`}>
                {plan.buttonText}
              </CTAButton>

              <div className="mt-6 flex justify-center items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Seguro</div>
                <div className="flex items-center gap-1"><Zap className="w-4 h-4" /> Imediato</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-slate-400 text-sm italic">
          <p>O investimento se paga na primeira venda de uma única agenda. Aproveite o valor promocional antes da virada de lote.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;