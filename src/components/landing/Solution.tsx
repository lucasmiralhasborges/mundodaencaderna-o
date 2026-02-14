"use client";

import React from 'react';
import { CheckCircle2, Box, Layers, Zap, Star } from 'lucide-react';

const Solution = () => {
  const categories = [
    { title: "Planners & Agendas", icon: <Layers className="w-5 h-5" />, items: ["2025 Completo", "Infantil", "Executivo"] },
    { title: "Kits de Saúde", icon: <Box className="w-5 h-5" />, items: ["Cadernetas", "Controle de Exames"] },
    { title: "Arquivos Escolares", icon: <Star className="w-5 h-5" />, items: ["Etiquetas", "Cadernos de Desenho"] },
    { title: "Artes p/ Vendas", icon: <Zap className="w-5 h-5" />, items: ["Mockups", "Posts Instagram"] }
  ];

  return (
    <section className="py-32 px-4 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">O Que Há Dentro do Mundo?</h2>
          <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
            Uma estrutura completa para você focar apenas na produção e venda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;