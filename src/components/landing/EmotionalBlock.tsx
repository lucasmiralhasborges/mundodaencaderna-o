"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Clock, TrendingUp, Quote, Minus, ArrowRight, Target } from 'lucide-react';

const EmotionalBlock = () => {
  return (
    <section className="py-24 sm:py-40 px-4 bg-white relative overflow-hidden">
      {/* Background Sophistication */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        {/* Authority Header */}
        <div className="flex flex-col items-center text-center mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="h-px w-8 bg-slate-300"></div>
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Análise de Performance</span>
            <div className="h-px w-8 bg-slate-300"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight max-w-5xl"
          >
            Paixão não sustenta <br className="hidden sm:block" />
            um <span className="text-rose-600">negócio sobrecarregado.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-32">
          {/* Lado Esquerdo - Visão Estratégica */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <Target className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">O Propósito Inicial</h3>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Você começou com uma visão clara de liberdade e realização. Mas o crescimento sem as ferramentas certas gera um teto de faturamento invisível.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                { title: "Renda Escalável", sub: "Produzir mais em menos tempo", icon: <TrendingUp className="w-4 h-4" /> },
                { title: "Qualidade Premium", sub: "Acabamento que justifica o preço", icon: <Sparkles className="w-4 h-4" /> },
                { title: "Gestão do Tempo", sub: "Foco no que realmente traz lucro", icon: <Clock className="w-4 h-4" /> }
              ].map((item, i) => (
                <div key={i} className="group flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-none mb-1">{item.title}</p>
                      <p className="text-xs text-slate-400 font-medium">{item.sub}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-200 group-hover:text-slate-900 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lado Direito - O Diagnóstico */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 lg:col-start-7 space-y-12"
          >
            <div className="relative">
              <Quote className="absolute -top-12 -left-8 w-24 h-24 text-slate-50 -z-10" />
              <p className="text-2xl sm:text-3xl text-slate-800 leading-[1.3] font-black tracking-tight italic">
                “O esforço manual excessivo é o maior inimigo da lucratividade em um ateliê.”
              </p>
            </div>

            <div className="space-y-8 p-8 sm:p-12 rounded-[3rem] bg-slate-50 border border-slate-100 relative">
              <div className="absolute top-0 right-12 w-px h-full bg-slate-200/50 hidden sm:block"></div>
              
              <div className="space-y-8 relative z-10">
                <span className="text-rose-600 font-black text-[10px] uppercase tracking-[0.3em]">Pontos de Ineficiência</span>
                
                <div className="space-y-6">
                  {[
                    "Criação artesanal de matrizes digitais (Gasto de tempo)",
                    "Desorganização de catálogos e ativos (Perda de agilidade)",
                    "Dificuldade em lançar novidades constantes (Baixa retenção)"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></div>
                      <p className="text-lg text-slate-600 font-bold leading-snug">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-200 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-slate-50"></div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Feedback de +15.000 profissionais</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strategic Shift (Manifesto) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] bg-[#0B1222] p-12 sm:p-24 overflow-hidden"
        >
          {/* Subtle light effect */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                A Transição Necessária
              </div>
              <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Saia do amadorismo <br />
                <span className="text-slate-400">técnico para a</span> <br />
                <span className="text-blue-500 italic">gestão inteligente.</span>
              </h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-md">
                O sucesso não é sorte, é sistema. Pare de lutar contra o tempo e comece a usar a estrutura a seu favor.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-blue-500/50 transition-colors">
                <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.2em] mb-4">Mentalidade Anterior</p>
                <p className="text-white font-bold text-xl leading-tight">Trabalho Duro <br /> e Pouco Retorno.</p>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl shadow-blue-900/40">
                <p className="text-white/70 font-black uppercase text-[10px] tracking-[0.2em] mb-4">Nova Mentalidade</p>
                <p className="text-white font-bold text-xl leading-tight">Trabalho Estratégico <br /> com Alavancagem Digital.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalBlock;