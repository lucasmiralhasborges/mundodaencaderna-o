"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Sparkles, CheckCircle2, BookOpen, Layers, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white">
      {/* Background Decorativo Superior (Mesh Gradient) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-blue-100/50 blur-[120px] rounded-full"></div>
        <div className="absolute top-0 right-[-5%] w-[40%] h-[50%] bg-emerald-50/60 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          {/* Badge Superior Refinada */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-bold mb-8 uppercase tracking-[0.2em]"
          >
            <Sparkles className="w-3 h-3 text-blue-600" />
            Lançamento Coleção 2025/2026
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Seu Ateliê em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-500">
              Outro Nível.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 max-w-xl mb-10 leading-relaxed font-medium">
            Pare de perder horas criando arquivos do zero. Tenha acesso à <span className="text-slate-900 font-bold">maior biblioteca de encadernação</span> do Brasil e foque no que importa: <span className="text-emerald-600 font-bold">vender.</span>
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <CTAButton className="w-full sm:w-auto !py-5 !px-12 shadow-[0_20px_40px_rgba(30,58,138,0.15)]">
                ACESSAR ACERVO AGORA
              </CTAButton>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i} 
                      src={`https://i.pravatar.cc/100?img=${i+15}`} 
                      className="w-9 h-9 rounded-full border-2 border-white shadow-sm"
                      alt="Aluna"
                    />
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-400">
                  Junte-se a +15k alunas
                </div>
              </div>
            </div>

            {/* Micro-benefícios de confiança */}
            <div className="flex flex-wrap gap-6 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ACESSO IMEDIATO
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                VITALÍCIO
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                +100 MIL ARQUIVOS
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Elementos Flutuantes (Cards de Suporte) */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 z-20 hidden sm:flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Miolos 2025</p>
              <p className="text-sm font-bold text-slate-900">100% Editáveis</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 z-20 hidden sm:flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Atualizações</p>
              <p className="text-sm font-bold text-slate-900">Novidades Toda Semana</p>
            </div>
          </motion.div>

          {/* Container Principal da Imagem */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-[3rem] -z-10 group-hover:bg-blue-600/10 transition-colors"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(15,23,42,0.15)] border-[8px] border-white bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop" 
                alt="Mundo da Encadernação"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            
            {/* Tag de Avaliação */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-xs font-black text-slate-900">4.9/5</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;