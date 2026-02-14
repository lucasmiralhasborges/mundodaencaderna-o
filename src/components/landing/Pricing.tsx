"use client";

import React from 'react';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Trophy, TrendingUp, X, Users, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Plano Essencial",
      price: "9,90",
      originalPrice: "47,00",
      installments: "2x de R$ 5,15",
      features: [
        "50.000 Arquivos Selecionados",
        "Miolos Padrão 2025",
        "Acesso por 12 meses",
        "Suporte via E-mail",
        "Sem atualizações semanais",
        "Sem acesso aos Bônus VIP"
      ],
      highlight: false,
      buttonText: "QUERO O ESSENCIAL",
      checkoutUrl: "#" // Link pendente para o essencial
    },
    {
      name: "Plano Premium VIP",
      price: "19,90",
      originalPrice: "197,00",
      installments: "4x de R$ 5,35",
      features: [
        "100.000+ Arquivos (Biblioteca Total)",
        "ACESSO VITALÍCIO (Pague uma vez)",
        "ATUALIZAÇÕES SEMANAIS (Novidades 2026)",
        "Todos os BÔNUS (Silhouette, Instagram, etc)",
        "Comunidade VIP de Alunos",
        "Pack de Artes Prontas para Vendas"
      ],
      highlight: true,
      buttonText: "QUERO O PREMIUM VIP",
      checkoutUrl: "https://pay.lowify.com.br/checkout.php?product_id=FiBI79"
    }
  ];

  return (
    <section className="py-32 px-4 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm text-blue-700 px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] mb-10 border border-blue-100 shadow-sm">
            <TrendingUp className="w-4 h-4" />
            Investimento com Retorno Imediato
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight max-w-4xl">
            Menos de <br className="sm:hidden" />
            <span className="relative inline-block px-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                R$ 0,70 por dia
              </span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-2 left-0 h-[30%] bg-emerald-100/60 -z-10 rounded-sm"
              />
            </span> <br />
            para profissionalizar <br className="hidden sm:block" /> seu negócio.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[3rem] p-8 sm:p-12 flex flex-col transition-all duration-500 ${
                plan.highlight 
                ? 'bg-white shadow-[0_40px_80px_rgba(16,185,129,0.12)] border-[3px] border-emerald-500 z-10' 
                : 'bg-slate-50 shadow-xl border border-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-full text-xs font-black flex items-center gap-2 shadow-xl whitespace-nowrap uppercase tracking-widest">
                  <Trophy className="w-4 h-4 fill-white" /> Recomendado
                </div>
              )}

              <div className="mb-8 text-left">
                <h4 className={`text-2xl font-black mb-4 ${plan.highlight ? 'text-blue-900' : 'text-slate-500'}`}>
                  {plan.name}
                </h4>

                {plan.highlight && (
                  <div className="mb-6 bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl flex items-start gap-3">
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-3  h-3 text-white" />
                    </div>
                    <p className="text-[11px] font-bold text-emerald-800 leading-tight">
                      97% escolhem o Premium porque é o único com acesso vitalício e atualizações semanais.
                    </p>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-slate-400 line-through text-xl font-medium">R$ {plan.originalPrice}</span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-2xl font-bold">R$</span>
                  <span className={`text-7xl sm:text-8xl font-black tracking-tighter ${plan.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                    {plan.price.split(',')[0]}
                    <span className="text-4xl">,{plan.price.split(',')[1]}</span>
                  </span>
                </div>
                
                <div className="mt-4 text-emerald-600 font-black italic text-xl">
                  {plan.installments}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-10 text-left border-t border-slate-100 pt-8">
                  {plan.features.map((feature, i) => {
                    const isMissing = feature.includes("Sem");
                    return (
                      <li key={i} className="flex items-start gap-4 text-slate-600">
                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          isMissing ? 'bg-slate-200 text-slate-400' : 'bg-emerald-100 text-emerald-600'
                        }`}>
                          {isMissing ? <X className="w-3 h-3 stroke-[3]" /> : <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className={`text-sm leading-tight ${isMissing ? 'text-slate-400 line-through opacity-60' : 'font-semibold'}`}>
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <CTAButton 
                variant={plan.highlight ? 'primary' : 'secondary'}
                subtext={plan.highlight ? "O plano preferido dos alunos" : "Acesso imediato"}
                onClick={() => plan.checkoutUrl && (window.location.href = plan.checkoutUrl)}
              >
                {plan.buttonText}
              </CTAButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;