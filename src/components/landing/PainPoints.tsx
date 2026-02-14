"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, AlertCircle } from 'lucide-react';

const PainPoints = () => {
  const pains = [
    "Preso em criações manuais lentas e cansativas",
    "Perdendo clientes por falta de novidades",
    "Insegurança na hora de precificar seus produtos",
    "Bagunça total de arquivos no computador",
    "Dependência total do Canva do zero"
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-slate-50/50">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-50/50 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-100">
            <AlertCircle className="w-3.5 h-3.5" />
            O cenário atual
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Chega de lutar contra <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400">o tempo e a falta de ideias</span>
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Se você se identifica com algum desses pontos, seu ateliê está operando abaixo do potencial real.
          </p>
        </motion.div>

        <div className="grid gap-5">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01, x: 10 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 rounded-[2rem] text-left transition-all cursor-default flex items-center gap-6 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-rose-100"
            >
              {/* Icon Container com Gradiente */}
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100/50 flex items-center justify-center border border-rose-100/50 group-hover:from-rose-500 group-hover:to-rose-600 transition-colors duration-300">
                <XCircle className="w-6 h-6 text-rose-500 group-hover:text-white transition-colors" />
              </div>
              
              <div className="flex-1">
                <span className="text-slate-700 font-bold text-lg sm:text-xl tracking-tight group-hover:text-slate-900 transition-colors">
                  {pain}
                </span>
              </div>

              {/* Detalhe Decorativo na Direita */}
              <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensagem de Transição Sutil */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-slate-400 font-bold text-sm uppercase tracking-[0.2em]"
        >
          Mas existe um caminho muito mais simples ↓
        </motion.p>
      </div>
    </section>
  );
};

export default PainPoints;