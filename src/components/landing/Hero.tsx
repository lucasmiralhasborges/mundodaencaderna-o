"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 px-4 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-[#E9EDC9] text-[#588157] px-4 py-1 rounded-full text-sm font-semibold mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Acesso Vitalício + Atualizações
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-[#333] leading-tight mb-6"
        >
          🚨 PARE DE CRIAR <br />
          <span className="text-[#B5838D]">TUDO DO ZERO.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-600 max-w-3xl mb-8 leading-relaxed"
        >
          Tenha acesso imediato a mais de 100.000 arquivos prontos e transforme sua encadernação em uma fonte real de renda ainda hoje.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-4xl mb-12 rounded-2xl shadow-2xl overflow-hidden border-4 border-white"
        >
          <img 
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop" 
            alt="Mundo da Encadernação Mockup"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <CTAButton>
          QUERO ACESSO IMEDIATO AGORA
        </CTAButton>
        
        <p className="mt-4 text-sm text-gray-500 font-medium italic">
          Pagamento único. Sem mensalidades.
        </p>
      </div>
    </section>
  );
};

export default Hero;