"use client";

import React from 'react';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Star, Trophy, Users, Rocket } from 'lucide-react';

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
      buttonText: "QUERO O BÁSICO"
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
      buttonText: "QUERO O PREMIUM COMPLETO"
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Investimento com Retorno Imediato</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Menos de <span className="text-emerald-600">R$ 0,70 por dia</span> <br className="hidden sm:block" />
            para profissionalizar seu negócio.
          </h3>
          <p className="text-slate-500 text-lg mb-16 max-w-2xl mx-auto">
            Escolha o plano que vai levar sua encadernação para o próximo nível. O plano Premium é o favorito de 97% das nossas alunas.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[2.5rem] p-8 sm:p-12 transition-all ${
                plan.highlight 
                ? 'bg-white shadow-[0_20px_50px_rgba(16,185,129,0.15)] border-4 border-emerald-500 z-10 scale-105' 
                : 'bg-white/50 shadow-xl border border-slate-200 opacity-80'
              }`}
            >
              {plan.highlight && (
                <>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg whitespace-nowrap">
                    <Trophy className="w-4 h-4 fill-white" /> MELHOR CUSTO-BENEFÍCIO (VAGAS LIMITADAS)
                  </div>
                  <div className="absolute top-10 right-10 text-emerald-100 opacity-20">
                    <Rocket className="w-32 h-32" />
                  </div>
                </>
              )}

              <div className="mb-8 text-left relative z-10">
                <h4 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-emerald-700' : 'text-slate-500'}`}>
                  {plan.name}
                </h4>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-slate-400 line-through text-lg">R$ {plan.originalPrice}</span>
                  {plan.highlight && (
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">ECONOMIZE R$ 177,10</span>
                  )}
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-2xl font-medium">R$</span>
                  <span className={`text-6xl sm:text-7xl font-bold ${plan.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                    {plan.price.split(',')[0]}
                    <span className="text-3xl">,{plan.price.split(',')[1]}</span>
                  </span>
                  <span className="text-slate-400 font-medium">/único</span>
                </div>
                <p className="text-emerald-600 font-bold mt-2 italic text-lg">{plan.installments}</p>
              </div>

              <ul className="space-y-4 mb-10 text-left border-t border-slate-100 pt-8 relative z-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    {plan.highlight ? (
                      <Check className="w-5 h-5 flex-shrink-0 text-emerald-500 mt-1" />
                    ) : (
                      <Check className="w-5 h-5 flex-shrink-0 text-slate-400 mt-1" />
                    )}
                    <span className={`text-sm sm:text-base ${
                      plan.highlight && (feature.includes("VITALÍCIO") || feature.includes("100.000") || feature.includes("VIP"))
                      ? 'font-bold text-slate-900' 
                      : feature.includes("Sem") || feature.includes("NÃO") ? 'text-slate-400 line-through' : 'font-medium'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10">
                <CTAButton className={`w-full !py-5 !text-xl shadow-2xl ${!plan.highlight && 'bg-none bg-slate-200 !text-slate-600 shadow-none hover:bg-slate-300'}`}>
                  {plan.buttonText}
                </CTAButton>
              </div>

              <div className="mt-8 flex justify-center items-center gap-6 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <div className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> 100% Seguro</div>
                <div className="flex items-center gap-1"><Zap className="w-4 h-4" /> Acesso Imediato</div>
                {plan.highlight && <div className="flex items-center gap-1 text-emerald-600"><Users className="w-4 h-4" /> 15k+ Alunas</div>}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-slate-400 text-sm italic mb-4">
            * O valor de R$ 19,90 é garantido apenas para o lote atual. Na próxima virada de mês, o valor retornará para R$ 197,00.
          </p>
          <div className="flex justify-center gap-2">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
            <span className="text-xs font-bold text-slate-600 ml-2">NOTA 4.9/5 POR MAIS DE 15.000 CLIENTES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;