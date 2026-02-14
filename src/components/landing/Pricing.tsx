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
      buttonText: "QUERO O ESSENCIAL"
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
        "Comunidade VIP de Alunas",
        "Pack de Artes Prontas para Vendas"
      ],
      highlight: true,
      buttonText: "QUERO O PREMIUM VIP"
    }
  ];

  return (
    <section className="py-24 px-3 sm:px-6 lg:px-8 bg-white relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm text-blue-700 px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-8 border border-blue-100 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5" />
            Investimento com Retorno Imediato
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight max-w-4xl">
            Menos de <br className="sm:hidden" />
            <span className="relative inline-block px-1">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                R$ 0,70 por dia
              </span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-1 left-0 h-[30%] bg-emerald-100/60 -z-10 rounded-sm"
              />
            </span> <br />
            para profissionalizar <br className="hidden sm:block" /> seu negócio.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[2.5rem] sm:rounded-[3rem] p-5 sm:p-10 lg:p-12 flex flex-col transition-all duration-500 ${
                plan.highlight 
                ? 'bg-white shadow-[0_40px_80px_rgba(16,185,129,0.12)] border-[3px] border-emerald-500 z-10' 
                : 'bg-slate-50 shadow-xl border border-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black flex items-center gap-2 shadow-xl whitespace-nowrap uppercase tracking-widest z-20">
                  <Trophy className="w-3.5 h-3.5 fill-white" /> Recomendado
                </div>
              )}

              <div className="mb-6 sm:mb-8 text-left">
                <h4 className={`text-xl sm:text-2xl font-black mb-2 sm:mb-4 ${plan.highlight ? 'text-blue-900' : 'text-slate-500'}`}>
                  {plan.name}
                </h4>
                
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <span className="text-slate-400 line-through text-lg font-medium">R$ {plan.originalPrice}</span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-xl sm:text-2xl font-bold">R$</span>
                  <span className={`text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter ${plan.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                    {plan.price.split(',')[0]}
                    <span className="text-3xl lg:text-4xl">,{plan.price.split(',')[1]}</span>
                  </span>
                </div>
                
                <div className="mt-3 sm:mt-4 text-emerald-600 font-black italic text-lg sm:text-xl">
                  {plan.installments}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-left border-t border-slate-100 pt-6 sm:pt-8">
                  {plan.features.map((feature, i) => {
                    const isMissing = feature.includes("Sem");
                    return (
                      <li key={i} className="flex items-start gap-3 sm:gap-4 text-slate-600">
                        <div className={`mt-0.5 sm:mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ${
                          isMissing ? 'bg-slate-200 text-slate-400' : 'bg-emerald-100 text-emerald-600'
                        }`}>
                          {isMissing ? <X className="w-2.5 h-2.5 stroke-[3]" /> : <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />}
                        </div>
                        <span className={`text-xs sm:text-sm leading-tight ${isMissing ? 'text-slate-400 line-through opacity-60' : 'font-semibold'}`}>
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-auto">
                <CTAButton 
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  subtext={plan.highlight ? "O plano preferido das alunas" : "Acesso imediato"}
                >
                  {plan.buttonText}
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;