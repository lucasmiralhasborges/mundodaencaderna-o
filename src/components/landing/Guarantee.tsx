"use client";

import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-20 px-4 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-16 border-2 border-[#E29595] shadow-xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E29595] opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
        
        <ShieldCheck className="w-20 h-20 text-[#B5838D] mx-auto mb-6" />
        
        <h2 className="text-3xl sm:text-4xl font-black text-[#333] mb-6 uppercase tracking-tight">
          🛡 GARANTIA INCONDICIONAL DE 15 DIAS
        </h2>
        
        <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
          <p>Use todos os arquivos. Teste. Imprima. Venda.</p>
          <p>Se por qualquer motivo você achar que não valeu a pena… Envie um e-mail e devolvemos 100% do seu dinheiro.</p>
          <p className="font-bold text-[#333]">Sem perguntas. Sem burocracia. Sem risco. O risco é todo meu.</p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;