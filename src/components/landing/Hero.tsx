"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Sparkles, CheckCircle2, Play, Star, Timer, Zap } from 'lucide-react';

const Hero = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  const benefits = [
    "Ideal para ateliês, iniciantes e profissionais",
    "Aplicação simples e imediata",
    "Material fácil de usar",
    "Acesso vitalício"
  ];

  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-white">
      {/* Barra de Oferta Ultra Premium (Topo) */}
      <div className="absolute top-0 left-0 w-full bg-[#0F172A] py-3 px-4 z-20 overflow-hidden border-b border-white/5">
        <motion.div 
          animate={{ x: ['-150%', '300%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent w-1/3 skew-x-[-25deg]"
        />
        
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-0 sm:justify-between text-white relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex w-7 h-7 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.4)] animate-pulse">
              <Zap className="w-4 h-4 fill-white text-white" />
            </div>
            <p className="text-[10px] sm:text-[12px] font-extrabold uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="text-rose-400 drop-shadow-sm">Oferta Especial:</span> 
              <span className="text-white/90">Desconto Liberado Somente Hoje!</span>
            </p>
          </div>
          
          <div className="flex items-center gap-2.5 bg-white/5 backdrop-blur-xl px-5 py-1.5 rounded-full border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <Timer className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Expira em:</span>
            <span className="text-[11px] font-black text-white bg-rose-500/20 px-2 py-0.5 rounded text-rose-300 border border-rose-500/20">{currentDate}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-bold mb-10 uppercase tracking-[0.2em]"
        >
          <Sparkles className="w-3 h-3 text-blue-600" />
          Material 100% Prático e Editável
        </motion.div>

        {/* Nova Headline Atualizada */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto"
        >
          Pare de perder horas criando do zero e transforme seu ateliê em uma <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-500">
            máquina de vendas
          </span> com mais de 100.000 arquivos prontos e organizados.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Tenha acesso imediato à biblioteca definitiva de arquivos digitais para encadernação e encante seus clientes todos os dias.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto space-y-3 mb-16 text-left"
        >
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:border-emerald-200 transition-colors group">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-slate-700 text-sm sm:text-base">{benefit}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative max-w-[320px] mx-auto mb-12"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border-[8px] border-white aspect-[9/16] bg-slate-100 group">
            <img 
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Preview do Material" 
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 shadow-xl shadow-blue-500/30">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <p className="text-white font-black text-xl leading-tight drop-shadow-lg uppercase tracking-tighter">
                BIBLIOTECA COM <br />
                <span className="text-blue-400">MILHARES DE ARQUIVOS</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <CTAButton className="w-full max-w-sm mx-auto !py-6 !text-xl shadow-[0_20px_40px_rgba(30,58,138,0.15)]">
            QUERO MEU ACESSO AGORA
          </CTAButton>

          <div className="flex justify-center gap-3">
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
              <CheckCircle2 className="w-3 h-3" />
              Acesso Imediato
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
              <CheckCircle2 className="w-3 h-3" />
              Material Digital
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] max-w-sm mx-auto"
        >
          <div className="flex -space-x-3 justify-center mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <img 
                key={i} 
                src={`https://i.pravatar.cc/100?img=${i+10}`} 
                className="w-10 h-10 rounded-full border-4 border-white shadow-sm" 
                alt="Usuário" 
              />
            ))}
          </div>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
          </div>
          <p className="text-slate-600 text-sm font-medium leading-relaxed">
            Mais de <span className="text-blue-600 font-black">15.000 empreendedores</span> já aplicam esse método com <span className="text-slate-900 font-black">resultados reais</span> e comprovados.
          </p>
        </motion.div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10 opacity-30">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[100%] bg-blue-100/50 blur-[120px] rounded-full"></div>
        <div className="absolute top-20 right-[-10%] w-[40%] h-[80%] bg-emerald-50/50 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;