"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Sparkles, CheckCircle2, Play, Star, Timer, Flame } from 'lucide-react';

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
      {/* Barra de Oferta Premium (Topo) */}
      <div className="absolute top-0 left-0 w-full bg-slate-900 py-2.5 px-4 z-20 overflow-hidden">
        {/* Efeito de Brilho Animado */}
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 skew-x-[-20deg]"
        />
        
        <div className="max-w-7xl mx-auto flex justify-center sm:justify-between items-center text-white relative z-10">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex w-6 h-6 bg-rose-500 rounded-full items-center justify-center animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-white text-white" />
            </div>
            <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-rose-100">
              <span className="text-rose-400">Oferta Especial:</span> Desconto Somente Hoje!
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 shadow-inner">
            <Timer className="w-3 h-3 text-rose-400" />
            <span className="text-[10px] font-bold tracking-wider opacity-90 uppercase">Expira em:</span>
            <span className="text-[10px] font-black text-rose-400">{currentDate}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal Centralizado */}
      <div className="max-w-5xl mx-auto px-4 pt-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-bold mb-10 uppercase tracking-[0.2em]"
        >
          <Sparkles className="w-3 h-3 text-blue-600" />
          Material 100% Prático e Editável
        </motion.div>

        {/* Título com estilo Premium restaurado */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight max-w-4xl mx-auto"
        >
          Nunca mais fique sem <br />
          ideias para suas <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-500">
            criações e vendas
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Tenha acesso imediato a mais de 100.000 arquivos prontos, organizados e fáceis de usar no seu ateliê para encantar seus clientes.
        </motion.p>

        {/* Lista de Benefícios (Estilo Capturar.PNG) */}
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

        {/* Mockup Vertical (Estilo Capturar 2.PNG) */}
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
            {/* Overlay de Vídeo Placeholder */}
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

        {/* Botão e Tags de Confiança */}
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

        {/* Card de Prova Social Final (Estilo Capturar 2.PNG) */}
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

      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10 opacity-30">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[100%] bg-blue-100/50 blur-[120px] rounded-full"></div>
        <div className="absolute top-20 right-[-10%] w-[40%] h-[80%] bg-emerald-50/50 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;