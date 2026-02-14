"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

const PainPoints = () => {
  const pains = [
    "Criando capas no Canva",
    "Procurando arquivos perdidos no computador",
    "Sem ideias do que postar",
    "Sem novidades para vender",
    "Aceitando qualquer preço porque acha que seu trabalho não está “profissional o suficiente”"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333] mb-6">
            Se você trabalha com encadernação e ainda passa horas:
          </h2>
        </div>

        <div className="grid gap-4 mb-12">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-[#FAF9F6] p-5 rounded-xl border border-gray-100"
            >
              <XCircle className="w-6 h-6 text-[#E29595] flex-shrink-0" />
              <span className="text-lg text-gray-700 font-medium">{pain}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-[#F8EDEB] p-8 rounded-3xl border-2 border-dashed border-[#E29595]">
          <p className="text-2xl sm:text-3xl font-bold text-[#B5838D] mb-4 italic">
            "Você não precisa de mais esforço. Você precisa de estrutura."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;