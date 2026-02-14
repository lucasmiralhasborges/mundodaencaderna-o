"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';

const EmotionalBlock = () => {
  const desires = [
    "Trabalhar com o que ama",
    "Ter sua própria renda",
    "Sentir orgulho do que cria",
    "Ter liberdade de tempo"
  ];

  return (
    <section className="py-16 sm:py-32 px-4 bg-[#FFF9F6] relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-100 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-100/20 blur-[80px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-rose-50/80 text-rose-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-rose-100/50">
            <Heart className="w-3.5 h-3.5 fill-rose-600" />
            Um momento de reflexão
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
            Você não começou seu ateliê para viver cansado e sobrecarregado.
          </h2>
        </motion.div>

        {/* Grid de Desejos Otimizado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-sm border border-white/60 rounded-[2.5rem] p-6 sm:p-12 mb-16 shadow-[0_15px_35px_rgba(251,113,133,0.03)]"
        >
          <p className="text-slate-500 font-black text-center mb-8 uppercase tracking-[0.2em] text-[10px]">Você começou porque queria:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {desires.map((text, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-rose-50/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 shrink-0 shadow-inner">
                  <Sparkles className="w-4 h-4 sm:w-5 h-5" />
                </div>
                <span className="font-bold text-slate-700 text-sm sm:text-base tracking-tight">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Texto Narrativo com Ritmo */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-10 text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-center sm:text-left"
        >
          <p className="font-bold text-slate-800">Mas talvez hoje a realidade seja outra.</p>
          
          <p>
            Você passa horas criando uma única arte. Salva arquivos em mil pastas diferentes. Compra kits que depois nem lembra onde colocou. Perde tempo procurando algo que deveria estar pronto.
          </p>

          <div className="py-4 sm:py-8 flex flex-col items-center">
            <div className="w-12 h-px bg-rose-100 mb-6"></div>
            <p className="text-slate-900 font-black text-2xl sm:text-3xl tracking-tighter">E o pior…</p>
            <div className="w-12 h-px bg-rose-100 mt-6"></div>
          </div>

          <p>
            Às vezes vê outros encadernadores vendendo mais, postando novidades toda semana, crescendo rápido… Enquanto você sente que está sempre correndo atrás
          </p>

          {/* Card de Transição/Diagnóstico */}
          <div className="bg-slate-900 text-white rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-20 my-12 sm:my-20 relative overflow-hidden text-center shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-500/10 blur-[50px] rounded-full"></div>
            
            <p className="text-rose-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">O diagnóstico real</p>
            
            <div className="space-y-3 sm:space-y-5 mb-10 sm:mb-16">
              <p className="text-xl sm:text-4xl font-black leading-tight tracking-tight">E isso não é falta de talento.</p>
              <p className="text-xl sm:text-4xl font-black leading-tight tracking-tight">Não é falta de esforço.</p>
              <p className="text-2xl sm:text-5xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">É falta de estrutura.</p>
            </div>

            <div className="pt-8 sm:pt-12 border-t border-white/10 space-y-4 sm:space-y-6">
              <p className="text-slate-400 font-medium text-sm sm:text-lg">Nenhum ateliê cresce no improviso.</p>
              <div className="space-y-1">
                <p className="text-slate-200 font-bold text-lg sm:text-xl">Você não precisa trabalhar mais.</p>
                <p className="text-white text-2xl sm:text-3xl font-black tracking-tight">Você precisa de um sistema pronto.</p>
              </div>
            </div>

            {/* BOTÃO OTIMIZADO */}
            <div className="pt-12 sm:pt-20">
              <motion.button 
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative w-full max-w-md mx-auto p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md transition-all flex flex-col items-center gap-6 hover:bg-white/10 hover:border-rose-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
                
                <p className="text-rose-300 font-black text-lg sm:text-xl leading-snug tracking-tight text-center relative z-10">
                  E é exatamente isso que o <br />
                  <span className="text-white">Mundo da Encadernação</span> entrega.
                </p>
                
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-rose-50 group-hover:border-rose-50 transition-all relative z-10 shadow-lg group-hover:shadow-rose-500/40">
                  <ArrowRight className="w-6 h-6 text-rose-300 group-hover:text-rose-600 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalBlock;