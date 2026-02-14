"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/30 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100/40 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-extrabold mb-8 border border-emerald-100 uppercase tracking-widest"
          >
            <Sparkles className="w-3 h-3" />
            Exclusivo 2025/2026
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-8">
            Domine a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600">Encadernação</span> <br />
            Sem Criar do Zero.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
            Economize centenas de horas com a biblioteca definitiva de arquivos prontos para lucrar imediatamente.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <CTAButton className="w-full sm:w-auto shadow-emerald-200/50">
              COMEÇAR AGORA
            </CTAButton>
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://i.pravatar.cc/100?img=${i+10}`} 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  alt="Avatar"
                />
              ))}
              <div className="pl-6 text-sm font-semibold text-slate-500">
                +15k alunas satisfeitas
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-emerald-500 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl"></div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop" 
              alt="Mundo da Encadernação"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;