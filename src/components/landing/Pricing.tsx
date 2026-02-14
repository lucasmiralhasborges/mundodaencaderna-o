"use client";

import React from 'react';
import CTAButton from './CTAButton';
import { ShieldCheck, CreditCard, Infinity, RefreshCw } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Efeito de Glow de Eclipse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F59E0B] opacity-[0.03] blur-[150px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-slate-400 tracking-[0.3em] uppercase">Investimento Real</h2>
        
        <div className="grid grid-cols-2 gap-8 mb-20 max-w-2xl mx-auto opacity-50 italic">
          <div className="text-left border-l-2 border-white/10 pl-4">
            <p className="text-sm uppercase text-slate-500">Designer Profissional</p>
            <p className="text-2xl text-white">R$ 2.000,00</p>
          </div>
          <div className="text-left border-l-2 border-white/10 pl-4">
            <p className="text-sm uppercase text-slate-500">Kits Separados</p>
            <p className="text-2xl text-white">R$ 500,00</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#111827] to-[#0B0E14] text-white rounded-[3rem] p-10 sm:p-20 shadow-[0_0_100px_rgba(245,158,11,0.1)] border border-white/10 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-black px-10 py-2 rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-[0_10px_20px_rgba(245,158,11,0.3)]">
            Oportunidade Única
          </div>
          
          <p className="text-slate-500 line-through text-2xl mb-4">De R$ 197,00 por</p>
          
          <div className="flex flex-col items-center mb-12">
            <span className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">R$ 19,90</span>
            <span className="text-2xl font-bold text-[#F59E0B] mt-4 uppercase tracking-widest">Ou 4x de R$ 5,35</span>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-12 text-left max-w-lg mx-auto border-y border-white/10 py-8">
            <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
              <Infinity className="w-5 h-5 text-emerald-400" /> VITALÍCIO
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400" /> RISCO ZERO
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
              <RefreshCw className="w-5 h-5 text-emerald-400" /> ATUALIZADO
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
              <CreditCard className="w-5 h-5 text-emerald-400" /> IMEDIATO
            </div>
          </div>

          <CTAButton className="w-full">
            GARANTIR MINHA VAGA NA ÓRBITA
          </CTAButton>
          
          <p className="mt-8 text-slate-500 text-sm font-medium italic">
            * Menos do que um café por semana. O retorno é para sempre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;