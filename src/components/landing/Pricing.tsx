"use client";

import React from 'react';
import CTAButton from './CTAButton';
import { ShieldCheck, CreditCard, Infinity, RefreshCw } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-12 text-slate-400 uppercase tracking-widest">Valor Real do Investimento</h2>
        
        <div className="bg-white rounded-[2.5rem] p-10 sm:p-20 shadow-2xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <p className="text-slate-400 line-through text-2xl mb-2">De R$ 197,00 por apenas</p>
          
          <div className="mb-12">
            <span className="text-7xl sm:text-8xl font-bold text-blue-900">R$ 19,90</span>
            <p className="text-xl font-bold text-emerald-600 mt-2">ou 4x de R$ 5,35</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-12 text-left max-w-lg mx-auto py-8 border-y border-slate-100">
            <div className="flex items-center gap-3 text-slate-600 font-medium">
              <Infinity className="w-5 h-5 text-emerald-500" /> VITALÍCIO
            </div>
            <div className="flex items-center gap-3 text-slate-600 font-medium">
              <ShieldCheck className="w-5 h-5 text-emerald-500" /> SEGURO
            </div>
            <div className="flex items-center gap-3 text-slate-600 font-medium">
              <RefreshCw className="w-5 h-5 text-emerald-500" /> ATUALIZADO
            </div>
            <div className="flex items-center gap-3 text-slate-600 font-medium">
              <CreditCard className="w-5 h-5 text-emerald-500" /> IMEDIATO
            </div>
          </div>

          <CTAButton className="w-full">
            GARANTIR MEU ACESSO AGORA
          </CTAButton>
          
          <p className="mt-8 text-slate-400 text-sm font-medium">
            * Menos do que um café por semana para ter um negócio profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;