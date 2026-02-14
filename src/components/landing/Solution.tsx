"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Box, Layers, Zap, Star, Layout, ShieldCheck } from 'lucide-react';

const Solution = () => {
  const categories = [
    { 
      title: "Planners & Agendas", 
      icon: <Layers className="w-6 h-6" />, 
      items: ["Miolos 2025 Completos", "Modelos Infantis", "Executivo & Minimalista"],
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    { 
      title: "Kits de Saúde", 
      icon: <Box className="w-6 h-6" />, 
      items: ["Cadernetas de Vacinação", "Controle de Exames", "Acompanhamento Gestante"],
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    { 
      title: "Arquivos Escolares", 
      icon: <Star className="w-6 h-6" />, 
      items: ["Etiquetas Personalizadas", "Cadernos de Desenho", "Agendas Escolares"],
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    { 
      title: "Artes p/ Vendas", 
      icon: <Zap className="w-6 h-6" />, 
      items: ["Mockups Realistas", "Posts p/ Instagram", "Catálogo Digital"],
      gradient: "from-rose-500/20 to-purple-500/20"
    }
  ];

  return (
    <section className="py-32 px-4 bg-[#0B1222] text-white overflow-hidden relative">
      {/* Luzes de fundo decorativas */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-blue-400"
          >
            <Layout className="w-3.5 h-3.5" />
            Estrutura Completa
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight leading-tight">
            O que você vai encontrar <br className="hidden sm:block" />
            dentro do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">nosso mundo</span>
          </h2>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Tudo o que você precisa para profissionalizar seu ateliê e triplicar suas vendas, organizado por categorias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden"
            >
              {/* Efeito de brilho no hover */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10`}></div>
              
              {/* Container do Ícone com Glassmorphism */}
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8 shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {cat.icon}
              </div>

              <h3 className="text-2xl font-black mb-6 tracking-tight group-hover:text-blue-400 transition-colors">
                {cat.title}
              </h3>

              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-bold leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tag de "Material Editável" no fundo do card */}
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-300">Alta Resolução</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;