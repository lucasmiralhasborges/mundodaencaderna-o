"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Sparkles, CheckCircle2, Star, Zap } from 'lucide-react';

const Hero = () => {
  const benefits = [
    "Ideal para ateliês e iniciantes",
    "Aplicação simples e imediata",
    "Acesso vitalício",
    "Sem pastas confusas",
    "Sem arquivos duplicados",
    "Sem material ultrapassado"
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      {/* Barra de Oferta */}
      <div className="absolute top-0 left-0 w-full bg-[#0F172A] py-2.5 px-4 z-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-white">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 fill-emerald-400 text-emerald-400" />
            <p className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-center">
              Preço promocional por tempo limitado
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
              >
                <Sparkles className="w-3 h-3 text-blue-600" />
                Material 100% Prático e Editável
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center lg:justify-start"
              >
                <img 
                  src="/hero-headline-image.png" 
                  alt="Mundo da Encadernação" 
                  className="h-20 sm:h-32 w-auto object-contain"
                />
              </motion.div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight"
            >
              Transforme seu ateliê em uma <br className="hidden xl:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-500">
                máquina de vendas
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium"
            >
              Pare de perder horas criando do zero. Tenha acesso à biblioteca definitiva com mais de 100.000 arquivos organizados.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0"
            >
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-slate-50/50 border border-slate-100 p-3 rounded-xl hover:border-emerald-200 transition-colors group">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-bold text-slate-700 text-[11px] sm:text-xs">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Imagem Promocional Adicionada Aqui */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="relative max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-50"
            >
              <img 
                src="/hero-promo.png" 
                alt="Biblioteca Mundo da Encadernação" 
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xs mx-auto lg:mx-0"
            >
              <CTAButton 
                onClick={scrollToPricing}
                subtext="Acesso imediato liberado"
              >
                QUERO MEU ACESSO
              </CTAButton>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 shadow-xl max-w-sm mx-auto"
            >
              <div className="flex -space-x-2 justify-center mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                ))}
              </div>
              <div className="flex justify-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-slate-600 text-sm font-medium text-center leading-relaxed">
                Junte-se a <span className="text-slate-900 font-black">+15.000 alunos</span> que transformaram seus ateliês com resultados reais.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none -z-10 opacity-20">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[100%] bg-blue-100 blur-[100px] rounded-full"></div>
        <div className="absolute top-20 right-[-10%] w-[40%] h-[80%] bg-emerald-50 blur-[100px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;