"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Sparkles, Orbit } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-[#0B0E14] text-white">
      {/* Background Decorativo Planetário */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600 to-transparent blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-600 to-transparent blur-[80px]"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#F59E0B] px-4 py-1 rounded-full text-sm font-semibold mb-8"
        >
          <Sparkles className="w-4 h-4" />
          O Universo da Encadernação em suas mãos
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-7xl font-black leading-tight mb-8"
        >
          🚨 PARE DE CRIAR <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#F59E0B] animate-pulse">TUDO DO ZERO.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed"
        >
          Tenha acesso imediato a mais de 100.000 arquivos prontos e transforme sua encadernação em uma fonte real de renda ainda hoje.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-4xl mb-16 rounded-3xl shadow-[0_0_50px_rgba(79,70,229,0.3)] overflow-hidden border-2 border-white/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" 
            alt="Mundo da Encadernação Espacial"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <CTAButton>
          QUERO MEU ACESSO GALÁCTICO AGORA
        </CTAButton>
        
        <div className="mt-6 flex items-center gap-2 text-slate-400 text-sm font-medium uppercase tracking-widest">
          <Orbit className="w-4 h-4 text-purple-400" /> Pagamento Único • Vitalício
        </div>
      </div>
    </section>
  );
};

export default Hero;