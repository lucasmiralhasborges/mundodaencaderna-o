"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Clock, TrendingUp, Quote, Minus } from 'lucide-react';

const EmotionalBlock = () => {
  return (
    <section className="py-20 sm:py-32 px-4 bg-white relative overflow-hidden">
      {/* Luzes de fundo extremamente sutis para profundidade sem poluição */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50/30 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/20 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-28"
        >
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
            Perspectiva Profissional
          </div>
          
          <h2 className="text-3xl sm:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Você não começou seu ateliê para <br className="hidden sm:block" />
            viver <span className="text-rose-500">cansada e sobrecarregada.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 sm:mb-32">
          {/* Coluna 1 - O Propósito */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="w-12 h-1 border-t-4 border-rose-200"></div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-800">No início, havia um sonho:</h3>
            </div>

            <div className="grid gap-4">
              {[
                { text: "Trabalhar com o que ama", icon: <Heart className="w-4 h-4" />, bg: "bg-rose-50/50" },
                { text: "Ter sua própria renda", icon: <TrendingUp className="w-4 h-4" />, bg: "bg-blue-50/50" },
                { text: "Sentir orgulho do que cria", icon: <Sparkles className="w-4 h-4" />, bg: "bg-amber-50/50" },
                { text: "Ter liberdade de tempo", icon: <Clock className="w-4 h-4" />, bg: "bg-emerald-50/50" }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 ${item.bg}`}>
                    {item.icon}
                  </div>
                  <span className="text-base sm:text-lg font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coluna 2 - A Realidade */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-10"
          >
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium italic border-l-2 border-slate-200 pl-6">
                “Hoje, o prazer deu lugar à rotina exaustiva de criar artes do zero e lidar com a bagunça de arquivos.”
              </p>
              
              <div className="space-y-4">
                {[
                  "Horas criando artes que já poderiam estar prontas",
                  "Caos de arquivos espalhados em mil pastas",
                  "Sensação constante de estar perdendo o controle"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-500">
                    <Minus className="w-4 h-4 mt-1 text-rose-300 flex-shrink-0" />
                    <span className="text-base font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Card Clean */}
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <Quote className="w-8 h-8 text-slate-200 mb-4" />
              <p className="text-slate-800 font-bold leading-snug">
                Dói ver outras encadernadoras postando novidades toda semana, enquanto você sente que está sempre correndo contra o relógio.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Manifesto de Impacto Clean */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[3rem] p-10 sm:p-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h3 className="text-2xl sm:text-5xl font-black text-white leading-tight">
              Isso não é falta de talento. <br />
              <span className="text-rose-400">É falta de estrutura.</span>
            </h3>
            
            <p className="text-slate-400 text-base sm:text-lg font-medium leading-relaxed">
              Nenhum ateliê cresce no improviso. O sucesso exige processos inteligentes, não apenas esforço manual infinito.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-white font-bold text-lg">Trabalhe com estratégia.</p>
              </div>
              <div className="p-6 rounded-2xl bg-rose-600">
                <p className="text-white font-bold text-lg">Use um sistema pronto.</p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                Abaixo, a sua nova realidade
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalBlock;