"use client";

import React from 'react';
import { Gift, Video, Box, Heart, Camera } from 'lucide-react';

const Bonuses = () => {
  const bonuses = [
    {
      title: "Curso Silhouette Studio",
      icon: <Video />,
      desc: "Domine a ferramenta com vídeo aulas direto ao ponto."
    },
    {
      title: "Embalagens Pro",
      icon: <Box />,
      desc: "Encante seus clientes desde o primeiro contato."
    },
    {
      title: "Mimos Corporativos",
      icon: <Heart />,
      desc: "Aumente suas vendas atendendo grandes empresas."
    },
    {
      title: "Pack Instagram",
      icon: <Camera />,
      desc: "Artes prontas para stories que vendem sozinhos."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            🎁 BÔNUS EXCLUSIVOS
          </h2>
          <p className="text-slate-500 text-lg">Tudo o que você precisa para um negócio profissional.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-all text-center">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 mx-auto mb-6">
                {bonus.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">{bonus.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{bonus.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;