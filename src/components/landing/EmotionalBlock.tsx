"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

const EmotionalBlock = () => {
  const desires = [
    "Trabalhar com o que ama",
    "Ter sua própria renda",
    "Sentir orgulho do que cria",
    "Ter liberdade de tempo"
  ];

  return (
    <section className="py-24 sm:py-32 px-4 bg-[#FFF9F6] relative overflow-hidden">
      {/* Detalhes Decorativos Suaves */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-100 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-100/30 blur-[100px] rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-100/20 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho de Impacto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-100 mb-4">
            <Heart className="w-3.5 h-3.5 fill-rose-600" />
            Um momento de reflexão
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
            Você não começou seu ateliê para viver cansada e sobrecarregada.
          </h2>
        </motion.div>

        {/* Lista de Desejos Iniciais */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/60 backdrop-blur-md border border-white rounded-[2.5rem] p-8 sm:p-12 mb-16 shadow-[0_20px_50px_rgba(251,113,133,0.05)]"
        >
          <p className="text-slate-600 font-bold text-center mb-8 uppercase tracking-widest text-xs">Você começou porque queria:</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {desires.map((text, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-rose-50/50 shadow-sm">
                <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-bold text-slate-700 text-sm sm:text-base tracking-tight">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Texto Narrativo */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-8 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
        >
          <p className="font-medium">Mas talvez hoje a realidade seja outra.</p>
          
          <p>
            Você passa horas criando uma única arte. Salva arquivos em mil pastas diferentes. Compra kits que depois nem lembra onde colocou. Perde tempo procurando algo que deveria estar pronto.
          </p>

          <div className="py-6 flex flex-col items-center">
            <div className="w-12 h-px bg-rose-200 mb-6"></div>
            <p className="text-slate-900 font-black text-2xl tracking-tight">E o pior…</p>
            <div className="w-12 h-px bg-rose-200 mt-6"></div>
          </div>

          <p>
            Às vezes vê outras encadernadoras vendendo mais, postando novidades toda semana, crescendo rápido… Enquanto você sente que está sempre correndo atrás.
          </p>

          {/* O Ponto de Virada */}
          <div className="bg-slate-900 text-white rounded-[3rem] p-10 sm:p-16 my-16 relative overflow-hidden text-center space-y-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[80px] rounded-full"></div>
            
            <p className="text-rose-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2">O diagnóstico real</p>
            
            <div className="space-y-4">
              <p className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">E isso não é falta de talento.</p>
              <p className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">Não é falta de esforço.</p>
              <p className="text-2xl sm:text-3xl font-black leading-tight tracking-tight text-rose-400">É falta de estrutura.</p>
            </div>

            <div className="pt-8 space-y-4 border-t border-white/10">
              <p className="text-slate-400 font-medium">Nenhum ateliê cresce no improviso.</p>
              <p className="text-slate-200 font-bold">Você não precisa trabalhar mais.</p>
              <p className="text-white text-2xl font-black tracking-tight">Você precisa de um sistema pronto.</p>
            </div>

            <div className="pt-8">
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl border border-white/20 text-rose-300 font-bold text-sm sm:text-base group hover:bg-white/20 transition-all cursor-default">
                E é exatamente isso que o Mundo da Encadernação entrega.
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalBlock;