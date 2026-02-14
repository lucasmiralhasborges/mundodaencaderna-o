"use client";

import React from 'react';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Star, Trophy, TrendingUp } from 'lucide-react';

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
    <section className="py-32 px-4 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Refined Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center"
        >
          {/* Top Badge - Premium Glass Look */}
          <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm text-blue-700 px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] mb-10 border border-blue-100 shadow-sm">
            <TrendingUp className="w-4 h-4" />
            Investimento com Retorno Imediato
          </div>
          
          {/* Headline - High Impact Typography */}
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
          
          <div className="max-w-xl mx-auto space-y-8">
            <p className="text-slate-500 text-lg sm:text-xl font-medium leading-relaxed">
              Escolha o plano que vai levar sua <span className="text-slate-900 font-bold">encadernação para o próximo nível.</span>
            </p>
            
            {/* Bottom Badge - Social Proof Highlighter */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-6 py-3 rounded-2xl font-extrabold text-sm border border-emerald-100 shadow-sm"
            >
              <div className="bg-emerald-500 rounded-full p-1">
                <Star className="w-3 h-3 fill-white text-white" />
              </div>
              O plano Premium é o favorito de 97% das nossas alunas
            </motion.div>
          </div>
        </motion.div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-[3rem] p-8 sm:p-14 flex flex-col transition-all duration-500 ${
                plan.highlight 
                ? 'bg-white shadow-[0_40px_80px_rgba(16,185,129,0.12)] border-[3px] border-emerald-500 z-10' 
                : 'bg-slate-50 shadow-xl border border-slate-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-full text-xs font-black flex items-center gap-2 shadow-xl whitespace-nowrap uppercase tracking-widest">
                  <Trophy className="w-4 h-4 fill-white" /> Recomendado por Especialistas
                </div>
              )}

              <div className="mb-10 text-left">
                <h4 className={`text-2xl font-black mb-4 ${plan.highlight ? 'text-blue-900' : 'text-slate-500'}`}>
                  {plan.name}
                </h4>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-slate-400 line-through text-xl font-medium">R$ {plan.originalPrice}</span>
                  {plan.highlight && (
                    <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-tighter">
                      ECONOMIZE R$ 177,10
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400 text-2xl font-bold">R$</span>
                  <span className={`text-7xl sm:text-8xl font-black tracking-tighter ${plan.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                    {plan.price.split(',')[0]}
                    <span className="text-4xl">,{plan.price.split(',')[1]}</span>
                  </span>
                  <span className="text-slate-400 font-bold ml-2">/único</span>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-emerald-600 font-black italic text-xl">
                  <div className="w-8 h-px bg-emerald-200" />
                  {plan.installments}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-5 mb-12 text-left border-t border-slate-100 pt-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-600">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlight ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-400'
                      }`}>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className={`text-sm sm:text-base leading-tight ${
                        plan.highlight && (feature.includes("VITALÍCIO") || feature.includes("100.000") || feature.includes("VIP") || feature.includes("ATUALIZAÇÕES"))
                        ? 'font-black text-slate-900' 
                        : feature.includes("Sem") ? 'text-slate-400 line-through' : 'font-semibold'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <CTAButton className={`w-full !py-6 !text-2xl shadow-2xl ${
                  !plan.highlight && 'bg-slate-900 hover:bg-slate-800 !from-slate-900 !to-slate-800'
                }`}>
                  {plan.buttonText}
                </CTAButton>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Compra Segura
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Zap className="w-4 h-4 text-blue-500" /> Acesso na Hora
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Bar Below Plans */}
        <div className="mt-20 max-w-3xl mx-auto p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="User" />
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">+15k</div>
              </div>
              <div className="text-left">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-slate-600 text-sm font-bold">
                  "O melhor investimento que fiz para o meu ateliê em 2024"
                </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;