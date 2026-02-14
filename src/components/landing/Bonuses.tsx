"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Video, Box, Heart, Camera, Zap, CheckCircle2 } from 'lucide-react';

const Bonuses = () => {
  const bonuses = [
    {
      title: "Curso Silhouette Studio",
      icon: <Video className="w-6 h-6" />,
      desc: "Domine a ferramenta do zero ao avançado com vídeo aulas direto ao ponto.",
      value: "R$ 97,00"
    },
    {
      title: "Embalagens Pro",
      icon: <Box className="w-6 h-6" />,
      desc: "Aprenda a criar embalagens que encantam seus clientes desde o primeiro contato.",
      value: "R$ 47,00"
    },
    {
      title: "Mimos Corporativos",
      icon: <Heart className="w-6 h-6" />,
      desc: "Estratégias para aumentar suas vendas atendendo grandes empresas e eventos.",
      value: "R$ 67,00"
    },
    {
      title: "Pack Instagram",
      icon: <Camera className="w-6 h-6" />,
      desc: "Templates prontos para stories e posts que vendem seus produtos sozinhos.",
      value: "R$ 37,00"
    }
  ];

  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50/50 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100 mb-6"
          >
            <Gift className="w-4 h-4" />
            Presentes Exclusivos
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Você ainda leva <span className="text-emerald-600">4 Bônus VIP</span> <br className="hidden sm:block" />
            para acelerar seus resultados
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
            Mais do que apenas arquivos, entregamos o conhecimento necessário para você transformar seu ateliê em um negócio lucrativo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(16,185,129,0.15)] hover:border-emerald-100 transition-all flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                {bonus.icon}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{bonus.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {bonus.desc}
              </p>
              
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter line-through">De {bonus.value}</span>
                  <span className="text-sm font-black text-emerald-600 uppercase tracking-widest">GRÁTIS HOJE</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Footer Otimizado com Sombra Refinada */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center px-4"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-[#0B1222] text-white px-6 py-5 sm:px-10 sm:py-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/5 w-full max-w-2xl sm:w-auto relative group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20">
                <Zap className="w-5 h-5 text-emerald-400 fill-emerald-400" />
              </div>
              <span className="font-bold text-slate-300 text-sm sm:text-base uppercase tracking-wider">Total em Bônus:</span>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-slate-500 line-through font-bold text-sm sm:text-base">R$ 248,00</span>
              <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
              <span className="text-emerald-400 font-black text-sm sm:text-base uppercase tracking-tighter bg-emerald-400/10 px-3 py-1 rounded-lg border border-emerald-400/20">
                LEVANDO TUDO POR R$ 0,00
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonuses;