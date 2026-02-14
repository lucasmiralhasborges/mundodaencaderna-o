"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Library } from 'lucide-react';

const Solution = () => {
  const items = [
    "Miolos atualizados 2025/2026",
    "Capas prontas e editáveis",
    "Planners",
    "Agendas",
    "Cadernetas da saúde",
    "Mockups profissionais",
    "Calendários",
    "Blocos de pedidos",
    "Temas infantis, escolares, corporativos e sazonais"
  ];

  return (
    <section className="py-20 px-4 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <Library className="w-16 h-16 text-[#B5838D] mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-black text-[#333] mb-4 uppercase tracking-tighter">
            🌍 Apresentando: Mundo da Encadernação
          </h2>
          <p className="text-xl text-[#B5838D] font-bold">
            A maior biblioteca organizada de arquivos para encadernadoras do Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#333]">Não é só um “kit”. É um sistema completo com:</h3>
            <div className="grid gap-3">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#588157]" />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
              <p className="text-[#B5838D] font-black text-xl mb-2">TUDO PRONTO.</p>
              <div className="flex flex-wrap gap-4 font-bold text-gray-400">
                <span className="text-[#333]">Você baixa.</span>
                <span>•</span>
                <span className="text-[#333]">Personaliza.</span>
                <span>•</span>
                <span className="text-[#333]">Imprime.</span>
                <span>•</span>
                <span className="text-[#333]">Vende.</span>
              </div>
              <p className="mt-4 text-gray-600 font-medium">Simples assim.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#E29595] rounded-3xl p-8 text-white relative z-10">
              <h4 className="text-3xl font-bold mb-6">💡 Imagine isso...</h4>
              <p className="text-lg mb-6 leading-relaxed opacity-90">
                Uma cliente pede uma agenda infantil. Em vez de criar do zero… Você abre a biblioteca. Escolhe o tema. Baixa. Produz.
              </p>
              <div className="space-y-4 pt-6 border-t border-white/20">
                <p className="text-xl font-bold">Velocidade vende.</p>
                <p className="text-xl font-bold">Organização gera lucro.</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#B5838D] rounded-3xl -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;