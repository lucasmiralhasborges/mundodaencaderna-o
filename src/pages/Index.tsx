"use client";

import React from 'react';
import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import Solution from '@/components/landing/Solution';
import Bonuses from '@/components/landing/Bonuses';
import Pricing from '@/components/landing/Pricing';
import Guarantee from '@/components/landing/Guarantee';
import About from '@/components/landing/About';
import FAQ from '@/components/landing/FAQ';
import CTAButton from '@/components/landing/CTAButton';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] selection:bg-purple-500 selection:text-white">
      {/* Header Galáctico */}
      <header className="fixed top-0 left-0 w-full bg-[#0B0E14]/80 backdrop-blur-xl z-50 py-4 px-6 border-b border-white/5 flex justify-between items-center">
        <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-yellow-200 tracking-tighter uppercase italic">Mundo da Encadernação</span>
        <button className="hidden sm:block text-xs font-black bg-white/10 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white/20 transition-all uppercase tracking-widest">
          Acessar Agora
        </button>
      </header>

      <main>
        <Hero />
        <PainPoints />
        
        {/* Barra de Status Estelar */}
        <section className="py-12 px-4 bg-gradient-to-r from-purple-900 to-blue-900 text-white border-y border-white/10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-4xl font-black">100k+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300">Arquivos</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black">2025+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300">Miolos</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black">VITALÍCIO</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300">Acesso</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-black">100%</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-300">Digital</div>
            </div>
          </div>
        </section>

        <Solution />
        <Bonuses />
        <Pricing />
        <Guarantee />
        <About />
        <FAQ />

        {/* CTA de Saída */}
        <section className="py-32 px-4 text-center bg-[#0B0E14] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-12 uppercase leading-tight italic">
              Não deixe sua estrela <br /><span className="text-red-500">apagar</span>.
            </h2>
            <CTAButton className="scale-110">
              🔥 DECOLAR MEU NEGÓCIO AGORA
            </CTAButton>
            <p className="mt-12 text-slate-500 font-bold uppercase tracking-[0.5em] text-xs">
              Últimas vagas com valor promocional
            </p>
          </div>
        </section>
      </main>

      <footer className="py-16 px-4 bg-black border-t border-white/5 text-center text-slate-500">
        <p className="mb-6 font-medium">© 2024 Mundo da Encadernação - Transformando Hobby em Império.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;