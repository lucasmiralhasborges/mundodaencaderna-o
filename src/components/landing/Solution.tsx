"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Library, Rocket, Shield } from 'lucide-react';

const Solution = () => {
  const items = [
    "Miolos atualizados 2025/2026",
    "Capas prontas e editáveis",
    "Planners de Alta Performance",
    "Agendas Profissionais",
    "Cadernetas da Saúde",
    "Mockups Galácticos",
    "Calendários e Blocos",
    "Temas Infantis e Corporativos"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0F172A] to-[#0B0E14] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block p-4 rounded-3xl bg-white/5 border border-white/10 mb-6">
            <Library className="w-12 h-12 text-[#F59E0B]" />
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-4 uppercase tracking-tighter leading-none">
            🌍 O Mundo da <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Encadernação</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium">
            A maior biblioteca organizada do Brasil, agora em uma nova órbita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Arquivos prontos para decolar seu negócio:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-all">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-md text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/30 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-[#F59E0B]" />
                <p className="text-[#F59E0B] font-black text-2xl uppercase italic">Fluxo Estelar</p>
              </div>
              <div className="flex flex-wrap gap-4 font-bold text-slate-400">
                <span className="text-white">Baixe</span>
                <span>•</span>
                <span className="text-white">Personalize</span>
                <span>•</span>
                <span className="text-white">Imprima</span>
                <span>•</span>
                <span className="text-white">Lucre</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="bg-[#1E293B] rounded-3xl p-10 relative z-10 border border-white/10">
              <h4 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Shield className="text-blue-400" /> Imagine isso...
              </h4>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Uma cliente pede uma agenda infantil. Enquanto outras encadernadoras estão perdidas criando... você já está com o projeto pronto em minutos.
              </p>
              <div className="space-y-4 pt-8 border-t border-white/10">
                <p className="text-2xl font-black text-emerald-400">Velocidade é PODER.</p>
                <p className="text-2xl font-black text-blue-400">Organização é LUCRO.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;