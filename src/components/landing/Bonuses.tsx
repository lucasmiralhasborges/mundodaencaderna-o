"use client";

import React from 'react';
import { Gift, Video, Box, Heart, Camera, Zap } from 'lucide-react';

const Bonuses = () => {
  const bonuses = [
    {
      title: "Curso Silhouette Studio",
      icon: <Video className="w-8 h-8" />,
      desc: "Domine a ferramenta principal com vídeo aulas direto ao ponto."
    },
    {
      title: "Embalagens Pro",
      icon: <Box className="w-8 h-8" />,
      desc: "Apresentação é tudo. Encante desde o primeiro segundo."
    },
    {
      title: "Mimos Corporativos",
      icon: <Heart className="w-8 h-8" />,
      desc: "Escalone suas vendas atendendo grandes empresas."
    },
    {
      title: "Pack Instagram",
      icon: <Camera className="w-8 h-8" />,
      desc: "Figurinhas e artes para stories que vendem sozinhos."
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0B0E14] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
             <Zap className="text-[#F59E0B] animate-bounce" />
             <h2 className="text-4xl sm:text-5xl font-bold text-white uppercase italic">Sua Carga de Bônus</h2>
          </div>
          <p className="text-xl text-slate-400">Além do acervo principal, você desbloqueia imediatamente:</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-[#F59E0B] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <Gift className="w-20 h-20 text-white" />
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-purple-900/20 group-hover:scale-110 transition-transform">
                {bonus.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{bonus.title}</h3>
              <p className="text-slate-400 leading-relaxed">{bonus.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-yellow-200">
            É como receber o mapa das estrelas para o seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;