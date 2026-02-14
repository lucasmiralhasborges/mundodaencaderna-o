"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Star } from 'lucide-react';

const PainPoints = () => {
  const pains = [
    "Criando capas no Canva",
    "Procurando arquivos perdidos no computador",
    "Sem ideias do que postar",
    "Sem novidades para vender",
    "Aceitando qualquer preço porque acha que seu trabalho não está “profissional o suficiente”"
  ];

  return (
    <section className="py-24 px-4 bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Você está perdida no <span className="text-[#F59E0B]">caos</span> da criação?
          </h2>
          <p className="text-slate-400 text-xl">Se você ainda gasta horas em tarefas manuais:</p>
        </div>

        <div className="grid gap-6 mb-16">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
              <span className="text-lg text-slate-200 font-medium">{pain}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-10 rounded-[2rem] border border-purple-500/30 shadow-2xl">
          <p className="text-2xl sm:text-4xl font-black text-white mb-4 italic tracking-tight">
            "Você não precisa de mais esforço. Você precisa de <span className="text-[#F59E0B]">Estrutura</span>."
          </p>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;