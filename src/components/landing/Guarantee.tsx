"use client";

import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center border-2 border-emerald-100 rounded-[3rem] p-12 sm:p-20 bg-emerald-50/30">
        <ShieldCheck className="w-20 h-20 text-emerald-600 mx-auto mb-8" />
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">GARANTIA DE 15 DIAS</h2>
        <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
          <p>Se em 15 dias você não sentir que seu negócio mudou de patamar, eu devolvo 100% do seu dinheiro.</p>
          <p className="font-bold text-emerald-700">Sem perguntas. Sem estresse. Risco Zero.</p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;