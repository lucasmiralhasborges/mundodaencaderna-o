"use client";

import React from 'react';
import { Gift, Video, Box, Heart, Camera } from 'lucide-react';

const Bonuses = () => {
  const bonuses = [
    {
      title: "Curso completo de Silhouette Studio",
      icon: <Video className="w-8 h-8" />,
      desc: "Domine a ferramenta principal das encadernadoras com facilidade."
    },
    {
      title: "Embalagens Personalizadas Pro",
      icon: <Box className="w-8 h-8" />,
      desc: "Valorize seu produto final com embalagens que encantam o cliente."
    },
    {
      title: "Mimos Corporativos",
      icon: <Heart className="w-8 h-8" />,
      desc: "Estratégias e arquivos para vender grandes quantidades para empresas."
    },
    {
      title: "Biblioteca de Figurinhas para Instagram",
      icon: <Camera className="w-8 h-8" />,
      desc: "Melhore seu engajamento e vendas nos stories instantaneamente."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#333] mb-4 flex items-center justify-center gap-3">
            <Gift className="text-[#B5838D]" /> E NÃO PARA POR AQUI…
          </h2>
          <p className="text-xl text-gray-600">Além de mais de 100.000 arquivos, você ainda recebe:</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-[#FAF9F6] p-8 rounded-3xl border border-gray-100 hover:border-[#E29595] transition-colors group">
              <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center text-[#B5838D] mb-6 group-hover:scale-110 transition-transform">
                {bonus.icon}
              </div>
              <h3 className="text-xl font-bold text-[#333] mb-3 leading-tight">{bonus.title}</h3>
              <p className="text-gray-500">{bonus.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-[#B5838D]">Você praticamente recebe um negócio pronto.</p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;