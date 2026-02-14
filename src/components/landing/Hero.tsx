"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-slate-50 overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-100/50 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-emerald-100/50 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8"
        >
          <Sparkles className="w-4 h-4" />
          BIBLIOTECA ATUALIZADA 2025/2026
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1E3A8A] leading-[1.1] mb-8"
        >
          🚨 PARE DE CRIAR <br />
          <span className="text-emerald-600">TUDO DO ZERO.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-600 max-w-3xl mb-12 leading-relaxed"
        >
          Tenha acesso imediato a mais de 100.000 arquivos prontos e transforme sua encadernação em uma fonte real de renda ainda hoje.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-5xl mb-16 rounded-3xl shadow-2xl overflow-hidden border-8 border-white"
        >
          <img 
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop" 
            alt="Mundo da Encadernação"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <CTAButton>
          QUERO MEU ACESSO IMEDIATO
        </CTAButton>
        
        <p className="mt-6 text-slate-400 text-sm font-medium uppercase tracking-widest">
          Acesso Vitalício • Pagamento Único
        </p>
      </div>
    </section>
  );
};

export default Hero;