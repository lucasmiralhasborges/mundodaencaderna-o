"use client";

import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-24 px-4 bg-[#0B0E14]">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111827] to-[#0B0E14] rounded-[3rem] p-10 sm:p-20 border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] text-center relative overflow-hidden">
        
        <ShieldAlert className="w-24 h-24 text-emerald-400 mx-auto mb-8 animate-pulse" />
        
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
          🛡 GARANTIA <span className="text-emerald-400">ABSOLUTA</span>
        </h2>
        
        <div className="space-y-6 text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          <p>Se em 15 dias você não sentir que seu negócio mudou de patamar, eu devolvo cada centavo.</p>
          <p className="font-bold text-white bg-emerald-500/10 py-2 rounded-lg">Sem perguntas. Sem estresse. Risco Zero.</p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;