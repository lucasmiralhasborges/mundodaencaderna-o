"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const PainPoints = () => {
  const pains = [
    "Criando capas no Canva do absoluto zero",
    "Procurando arquivos perdidos no computador",
    "Sem ideias do que postar para atrair clientes",
    "Sem novidades para vender e renovar seu estoque",
    "Aceitando qualquer preço por insegurança profissional"
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Você ainda se sente perdida no caos?
          </h2>
          <p className="text-slate-500 text-lg">Se você ainda gasta horas em tarefas manuais cansativas:</p>
        </div>

        <div className="grid gap-4 mb-16">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors"
            >
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
              <span className="text-lg text-slate-700">{pain}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-blue-50 p-10 rounded-3xl border border-blue-100">
          <p className="text-2xl sm:text-3xl font-bold text-blue-900 italic">
            "Você não precisa de mais esforço. Você precisa de <span className="text-emerald-600">Estrutura</span>."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;