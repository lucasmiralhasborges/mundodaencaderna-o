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
    <div className="min-h-screen bg-white">
      {/* Header Clean */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 py-4 px-6 border-b border-slate-100 flex justify-between items-center">
        <span className="text-lg font-bold text-blue-900 tracking-tight">Mundo da Encadernação</span>
        <button className="hidden sm:block text-sm font-bold bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          Começar Agora
        </button>
      </header>

      <main>
        <Hero />
        <PainPoints />
        
        {/* Barra de Prova Social/Status */}
        <section className="py-12 px-4 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">100.000+</div>
              <div className="text-xs uppercase tracking-widest text-blue-200">Arquivos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">2025/26</div>
              <div className="text-xs uppercase tracking-widest text-blue-200">Atualizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">VITALÍCIO</div>
              <div className="text-xs uppercase tracking-widest text-blue-200">Acesso</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-xs uppercase tracking-widest text-blue-200">Digital</div>
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
        <section className="py-24 px-4 text-center bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-8 leading-tight">
              Pronta para decolar <br />seu negócio?
            </h2>
            <CTAButton>
              🔥 GARANTIR MEU ACESSO IMEDIATO
            </CTAButton>
            <p className="mt-8 text-slate-400 font-bold uppercase tracking-widest text-xs">
              Valor promocional por tempo limitado
            </p>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 bg-slate-50 border-t border-slate-100 text-center text-slate-400">
        <p className="text-sm">© 2024 Mundo da Encadernação. Todos os direitos reservados.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;