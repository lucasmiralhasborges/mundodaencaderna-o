"use client";

import React from 'react';
import CTAButton from './CTAButton';
import { ShieldCheck, CreditCard, Infinity, RefreshCw } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-[#333] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-[#E29595]">💰 VAMOS FALAR DE VALOR REAL</h2>
        
        <div className="space-y-4 mb-16 opacity-70">
          <p className="text-xl italic">Se você contratasse um designer: R$ 2.000,00</p>
          <p className="text-xl italic">Se comprasse kits separados: R$ 500,00</p>
        </div>

        <div className="bg-white text-[#333] rounded-[40px] p-8 sm:p-12 shadow-2xl relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#B5838D] text-white px-8 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
            Oferta Especial
          </div>
          
          <p className="text-gray-400 line-through text-xl mb-2">De R$ 197,00 por apenas</p>
          
          <div className="flex flex-col items-center mb-8">
            <span className="text-6xl sm:text-8xl font-black text-[#333]">R$ 19,90</span>
            <span className="text-xl font-medium text-gray-500 mt-2">ou 4x de R$ 5,35</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <Infinity className="w-4 h-4 text-[#588157]" /> Pagamento único
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <ShieldCheck className="w-4 h-4 text-[#588157]" /> Acesso vitalício
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <RefreshCw className="w-4 h-4 text-[#588157]" /> Atualizações semanais
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
              <CreditCard className="w-4 h-4 text-[#588157]" /> Acesso imediato
            </div>
          </div>

          <CTAButton className="w-full">
            GARANTIR MEU ACESSO AGORA
          </CTAButton>
          
          <p className="mt-6 text-gray-400 text-sm">
            Isso é menos do que você paga em um lanche. E pode te gerar vendas por anos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;