"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Clock, TrendingUp } from 'lucide-react';

const EmotionalBlock = () => {
  return (
    <section className="py-32 px-4 bg-[#FFF9F9] relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-100/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white text-rose-500 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm border border-rose-50/50 mb-10">
            <Heart className="w-3.5 h-3.5 fill-rose-500" />
            Um momento de clareza
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Você não começou seu ateliê para <br className="hidden sm:block" />
            viver <span className="text-rose-500">cansada e sobrecarregada.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Lado Esquerdo - O Sonho */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl font-bold text-slate-800 border-l-4 border-rose-200 pl-6 py-2">
              Você começou porque queria:
            </p>
            <div className="space-y-5">
              {[
                { text: "Trabalhar com o que ama", icon: <Heart className="w-5 h-5" /> },
                { text: "Ter sua própria renda", icon: <TrendingUp className="w-5 h-5" /> },
                { text: "Sentir orgulho do que cria", icon: <Sparkles className="w-5 h-5" /> },
                { text: "Ter liberdade de tempo", icon: <Clock className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-rose-50 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-lg font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lado Direito - A Realidade e Conclusão */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-slate-600"
          >
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="font-bold text-slate-900">Mas talvez hoje a realidade seja outra.</p>
              <p>Você passa horas criando uma única arte.</p>
              <p>Salva arquivos em mil pastas diferentes.</p>
              <p>Compra kits que depois nem lembra onde colocou.</p>
              <p>Perde tempo procurando algo que deveria estar pronto.</p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white shadow-sm space-y-4">
              <p className="text-rose-600 font-black uppercase text-xs tracking-widest">E o pior…</p>
              <p className="text-slate-800 font-bold leading-relaxed italic">
                “Às vezes vê outras encadernadoras vendendo mais, postando novidades toda semana, crescendo rápido… Enquanto você sente que está sempre correndo atrás.”
              </p>
            </div>
          </motion.div>
        </div>

        {/* Manifesto Final - Impacto Centralizado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-24 border-t border-rose-100/50 text-center space-y-10"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-2xl font-bold text-slate-900">E isso não é falta de talento.</p>
            <p className="text-2xl font-bold text-slate-900">Não é falta de esforço.</p>
            <div className="relative inline-block">
              <span className="text-4xl font-black text-rose-600 relative z-10">É falta de estrutura.</span>
              <div className="absolute bottom-1 left-0 w-full h-4 bg-rose-100 -z-10 rotate-[-1deg]"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
              <p className="text-sm font-medium opacity-70 mb-1">Diagnóstico</p>
              <p className="font-bold text-lg">Nenhum ateliê cresce no improviso.</p>
            </div>
            <div className="bg-rose-500 text-white p-6 rounded-3xl shadow-xl shadow-rose-200">
              <p className="text-sm font-medium opacity-70 mb-1">A Chave</p>
              <p className="font-bold text-lg">Você não precisa trabalhar mais.</p>
            </div>
          </div>

          <div className="pt-10 space-y-6">
            <p className="text-2xl font-black text-slate-900 tracking-tight">
              Você precisa de um <span className="text-rose-600">sistema pronto.</span>
            </p>
            <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-sm">
              E é exatamente isso que o Mundo da Encadernação entrega ↓
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalBlock;