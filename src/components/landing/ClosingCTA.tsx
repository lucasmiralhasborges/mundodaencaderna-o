"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { ShieldCheck, Zap, Star, Rocket } from 'lucide-react';

const ClosingCTA = () => {
  return (
    <section className="py-32 px-4 text-center bg-[#0B1222] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] opacity-20 hidden lg:block"
      >
        <Rocket className="w-16 h-16 text-blue-400 rotate-[-15deg]" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] opacity-20 hidden lg:block"
      >
        <Star className="w-16 h-16 text-emerald-400 fill-emerald-400/20" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-10"
        >
          <Zap className="w-4 h-4 fill-emerald-400" />
          Acesso Vitalício Liberado
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight"
        >
          A decisão que vai mudar <br />
          seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">faturamento</span>.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-lg sm:text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Não perca mais tempo criando do zero. Junte-se a <span className="text-white font-bold">+15.000 alunas</span> que já profissionalizaram seu ateliê hoje mesmo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          {/* Botão Otimizado: Removidos paddings e font-size exagerados que causavam quebra de linha */}
          <CTAButton className="w-full max-w-md shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.4)]">
            SIM! QUERO MEU ACESSO AGORA
          </CTAButton>

          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Garantia de 15 Dias
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
              <Zap className="w-5 h-5 text-blue-500" />
              Entrega Imediata
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;