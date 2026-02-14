"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

const PainPoints = () => {
  const pains = [
    "Presa em criações manuais lentas e cansativas",
    "Perdendo clientes por falta de novidades",
    "Insegurança na hora de precificar seus produtos",
    "Bagunça total de arquivos no computador",
    "Dependência total do Canva do zero"
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
          Chega de lutar contra o tempo
        </h2>
        <p className="text-slate-500 text-lg mb-16">Se você se identifica com algum desses pontos, você precisa de um atalho profissional.</p>

        <div className="grid gap-4">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex items-center gap-5 p-6 rounded-2xl text-left hover:translate-x-2 transition-transform cursor-default"
            >
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-slate-700 font-semibold">{pain}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;