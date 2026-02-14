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
      {/* Header Fictício apenas para marca */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 py-4 px-6 border-b border-gray-100 flex justify-between items-center">
        <span className="text-xl font-black text-[#B5838D] tracking-tighter">MUNDO DA ENCADERNAÇÃO</span>
        <button className="hidden sm:block text-sm font-bold bg-[#B5838D] text-white px-4 py-2 rounded-full">
          COMPRAR AGORA
        </button>
      </header>

      <main>
        <Hero />
        <PainPoints />
        <Solution />
        
        {/* Seção de Diferenciais embutida na transição */}
        <section className="py-16 px-4 bg-[#B5838D] text-white">
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black mb-2">100k+</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-80">Arquivos</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">VITALÍCIO</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-80">Acesso</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">SEMANAL</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-80">Atualizações</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-2">100% SEGURO</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-80">Checkout</div>
            </div>
          </div>
        </section>

        <Bonuses />
        <Pricing />
        <Guarantee />
        <About />
        <FAQ />

        {/* CTA Final */}
        <section className="py-20 px-4 text-center bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#333] mb-8">
              A VERDADE É SIMPLES: Ou você continua perdendo tempo, ou decide ter lucro agora.
            </h2>
            <CTAButton>
              🔥 CLIQUE AGORA E GARANTA SEU ACESSO IMEDIATO
            </CTAButton>
            <div className="mt-8 space-y-2 font-medium text-gray-500">
              <p>Comece hoje. Produza mais rápido. Venda mais. Organize seu negócio.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 bg-[#FAF9F6] border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm mb-4">© 2024 Mundo da Encadernação - Todos os direitos reservados.</p>
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;