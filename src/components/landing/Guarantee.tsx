"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-32 px-4 bg-slate-50 relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/30 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3.5rem] p-8 sm:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-white relative overflow-hidden"
        >
          {/* Badge Lateral de Selo */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full flex items-center justify-center border border-emerald-500/10">
            <Award className="w-16 h-16 text-emerald-600/20" />
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
            {/* Lado Esquerdo - Visual do Selo */}
            <div className="flex flex-col items-center text-center space-y-6 md:border-r md:border-slate-100 md:pr-12">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full"></div>
                <div className="relative w-28 h-28 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl shadow-emerald-200">
                  <ShieldCheck className="w-14 h-14 text-white" />
                </div>
              </div>
              <div>
                <span className="block text-3xl font-black text-slate-900 leading-none">15 DIAS</span>
                <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">Garantia Total</span>
              </div>
            </div>

            {/* Lado Direito - Texto e Compromisso */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  Sua satisfação é <br className="hidden sm:block" />
                  <span className="text-emerald-600">nosso maior compromisso.</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Eu confio tanto na qualidade do <span className="text-slate-900 font-bold">Mundo da Encadernação</span> que o risco é todo meu. Se por qualquer motivo você não se adaptar nos primeiros 15 dias, basta um clique.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Reembolso 100% Integral",
                  "Sem burocracia ou perguntas",
                  "Processo automático",
                  "Acesso imediato ao teste"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="bg-emerald-50 text-emerald-700 px-6 py-4 rounded-2xl inline-flex items-center gap-3 font-black text-sm uppercase tracking-wide">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  RISCO ZERO PARA VOCÊ
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;