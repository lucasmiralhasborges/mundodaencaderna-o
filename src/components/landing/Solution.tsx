"use client";

import React from 'react';
import { CheckCircle2, Layout, Zap, Target } from 'lucide-react';

const Solution = () => {
  const items = [
    "Miolos atualizados 2025/2026",
    "Capas prontas e editáveis",
    "Planners e Agendas 2025",
    "Cadernetas da Saúde",
    "Mockups Profissionais",
    "Calendários e Blocos",
    "Temas Infantis e Corporativos",
    "Arquivos Escolares Completos"
  ];

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">
            🌍 MUNDO DA ENCADERNAÇÃO
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A maior biblioteca organizada do Brasil. Não é só um kit, é o seu novo sistema de trabalho.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Layout className="text-emerald-500" /> O que você recebe:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-emerald-600 text-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6" />
                <p className="font-bold text-xl">FLUXO DE TRABALHO</p>
              </div>
              <p className="text-emerald-50 font-medium">Baixe • Personalize • Imprime • Vende</p>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h4 className="text-2xl font-bold mb-6 text-blue-900 flex items-center gap-2">
              <Target className="text-emerald-500" /> Imagine isso...
            </h4>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Uma cliente pede uma agenda infantil. Enquanto outras encadernadoras estão perdidas criando... você já está com o projeto pronto em minutos.
            </p>
            <div className="space-y-4 pt-8 border-t border-slate-100">
              <p className="text-xl font-bold text-emerald-600">Velocidade vende.</p>
              <p className="text-xl font-bold text-blue-900">Organização gera lucro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;