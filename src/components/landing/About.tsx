"use client";

import React from 'react';
import { Star } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 px-4 bg-[#0B0E14] border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-72 h-72 flex-shrink-0 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-spin-slow opacity-20 blur-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
            alt="Angela Soares"
            className="w-full h-full object-cover rounded-full border-4 border-white/10 relative z-10"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-black px-6 py-2 rounded-full font-black text-sm z-20 shadow-xl">
            ANGELA SOARES
          </div>
        </div>
        
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-2 text-[#F59E0B]">
            <Star className="fill-[#F59E0B] w-5 h-5" />
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Sua Guia</h2>
          </div>
          <div className="space-y-6 text-xl text-slate-400 leading-relaxed">
            <p>Especialista em encadernação com anos de órbita no mercado digital.</p>
            <p>Eu criei o <span className="text-white font-bold italic">Mundo da Encadernação</span> para ser o atalho definitivo que eu nunca tive quando comecei.</p>
            <p className="text-slate-200">Prepare-se para transformar sua paixão em um negócio profissional.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;