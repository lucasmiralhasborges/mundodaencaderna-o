"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Clock, TrendingUp, Quote, Minus } from 'lucide-react';

const EmotionalBlock = () => {
  return (
    <section className="py-16 sm:py-32 px-4 bg-[#FFFDFD] relative overflow-hidden">
      {/* Elementos de Design Premium - Fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-rose-50/40 blur-[80px] sm:blur-[150px] rounded-full -z-10 translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-blue-50/30 blur-[80px] sm:blur-[130px] rounded-full -z-10 -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Pattern sutil */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-24 relative"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white border border-rose-100/60 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-rose-500 shadow-sm mb-6 sm:mb-12">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            Momento de Reflexão
          </div>
          
          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight max-w-5xl mx-auto px-2">
            Você não começou seu ateliê para <br className="hidden sm:block" />
            viver <span className="relative inline-block">
              <span className="relative z-10 text-rose-500">cansada.</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-1 sm:bottom-3 left-0 h-2 sm:h-4 bg-rose-50 -z-10 rounded-full"
              ></motion.span>
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-stretch mb-16 sm:mb-32">
          {/* Lado Esquerdo - O Propósito */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-6 sm:p-14 bg-white rounded-[2.5rem] sm:rounded-[3.5rem] border border-slate-100 shadow-sm"
          >
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-20 sm:h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-200">
              <Quote className="w-6 h-6 sm:w-10 sm:h-10 fill-current rotate-180" />
            </div>

            <div className="relative z-10 space-y-6 sm:space-y-10">
              <div className="space-y-1 sm:space-y-2">
                <span className="text-rose-500 font-black text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-2">
                  <Minus className="w-4 h-4" /> O Ponto de Partida
                </span>
                <p className="text-xl sm:text-3xl font-black text-slate-800 tracking-tight">
                  No início, havia um sonho:
                </p>
              </div>

              <div className="grid gap-3 sm:gap-6">
                {[
                  { text: "Trabalhar com o que ama", icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-rose-50 text-rose-500" },
                  { text: "Ter sua própria renda", icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-blue-50 text-blue-500" },
                  { text: "Sentir orgulho do que cria", icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-amber-50 text-amber-500" },
                  { text: "Ter liberdade de tempo", icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />, color: "bg-emerald-50 text-emerald-500" }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 sm:gap-5 p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-slate-50/50 border border-transparent hover:border-slate-100 transition-all"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm ${item.color}`}>
                      {item.icon}
                    </div>
                    <span className="text-base sm:text-lg font-bold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lado Direito - A Dor */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8 sm:space-y-12"
          >
            <div className="space-y-4 sm:space-y-6">
              <span className="text-slate-400 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] flex items-center gap-2">
                <Minus className="w-4 h-4" /> A Realidade Atual
              </span>
              <p className="text-lg sm:text-2xl text-slate-600 leading-relaxed font-medium">
                Mas hoje, o prazer deu lugar à <span className="text-slate-900 font-bold underline decoration-rose-200 decoration-2 sm:decoration-4">rotina exaustiva</span>.
              </p>
              
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-500">
                <p className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2.5 shrink-0"></span>
                  <span>Horas criando artes que poderiam estar prontas.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2.5 shrink-0"></span>
                  <span>Caos de arquivos espalhados em mil pastas.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-300 mt-2.5 shrink-0"></span>
                  <span>A sensação constante de estar "apagando incêndio".</span>
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 blur-xl opacity-30 sm:opacity-50 rounded-[2rem]"></div>
              <div className="relative bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white shadow-lg">
                <p className="text-rose-600 font-black uppercase text-[9px] sm:text-[10px] tracking-[0.2em] mb-3 sm:mb-4">O gatilho da comparação</p>
                <p className="text-base sm:text-xl text-slate-800 font-black leading-snug italic">
                  “Dói ver outras encadernadoras postando novidades toda semana, enquanto você sente que está sempre correndo contra o relógio.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Manifesto Final - Mobile Optimized */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] sm:rounded-[4rem] bg-slate-900 p-8 sm:p-20 overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-rose-500/10 blur-[80px] sm:blur-[100px] rounded-full"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Isso não é falta de talento. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-200">
                  É falta de estrutura.
                </span>
              </h3>
              <p className="text-slate-400 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                Nenhum ateliê cresce no improviso. O sucesso exige processos, não apenas criatividade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] backdrop-blur-sm">
                <span className="block text-rose-400 font-black uppercase text-[9px] tracking-widest mb-1 sm:mb-2">Diagnóstico</span>
                <p className="text-white font-bold text-base sm:text-xl">Você não precisa <br className="hidden sm:block" /> trabalhar mais horas.</p>
              </div>
              <div className="bg-rose-600 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-xl">
                <span className="block text-white/70 font-black uppercase text-[9px] tracking-widest mb-1 sm:mb-2">A Chave</span>
                <p className="text-white font-bold text-base sm:text-xl">Você precisa de um <br className="hidden sm:block" /> sistema pronto.</p>
              </div>
            </div>

            <div className="pt-4 sm:pt-8 flex flex-col items-center gap-4 sm:gap-6">
              <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                A estrutura começa aqui
              </p>
              <div className="animate-bounce w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-white rotate-90" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalBlock;