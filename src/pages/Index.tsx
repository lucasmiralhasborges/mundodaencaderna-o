"use client";

import React from 'react';
import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import Solution from '@/components/landing/Solution';
import SocialProof from '@/components/landing/SocialProof';
import Bonuses from '@/components/landing/Bonuses';
import Pricing from '@/components/landing/Pricing';
import Guarantee from '@/components/landing/Guarantee';
import About from '@/components/landing/About';
import FAQ from '@/components/landing/FAQ';
import CTAButton from '@/components/landing/CTAButton';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]" style={{ scaleX }} />

      {/* Header Premium */}
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50 py-4 px-6 border-b border-slate-200/50 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
          <span className="text-lg font-extrabold text-slate-900 tracking-tight hidden sm:inline-block">Mundo da Encadernação</span>
        </div>
        <button className="text-xs sm:text-sm font-extrabold bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
          COMEÇAR AGORA
        </button>
      </header>

      <main className="overflow-x-hidden">
        <Hero />
        
        {/* Trust Bar */}
        <div className="py-12 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-black text-xl italic text-slate-400">STRIPE SECURE</div>
            <div className="flex items-center gap-2 font-black text-xl italic text-slate-400">HOTMART PARTNER</div>
            <div className="flex items-center gap-2 font-black text-xl italic text-slate-400">VISA/MASTER</div>
            <div className="flex items-center gap-2 font-black text-xl italic text-slate-400">PIX IMEDIATO</div>
          </div>
        </div>

        <PainPoints />
        <Solution />
        <SocialProof />
        <Bonuses />
        
        <div id="pricing">
          <Pricing />
        </div>

        <Guarantee />
        <About />
        <FAQ />

        {/* Closing CTA */}
        <section className="py-32 px-4 text-center bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 leading-tight">
              A decisão que vai mudar <br />seu faturamento.
            </h2>
            <p className="text-blue-100/60 text-xl mb-12 max-w-2xl mx-auto">
              Junte-se a mais de 15.000 empreendedoras que já profissionalizaram seu negócio.
            </p>
            <CTAButton className="!py-6 !px-12 !text-2xl">
              SIM! QUERO MEU ACESSO AGORA
            </CTAButton>
          </motion.div>
        </section>
      </main>

      <footer className="py-20 px-4 bg-white border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 opacity-50">
            <span className="text-2xl font-black text-slate-900">Mundo da Encadernação</span>
          </div>
          <div className="flex justify-center gap-8 mb-10 text-slate-500 text-sm font-semibold">
            <a href="#" className="hover:text-blue-600">Termos de Uso</a>
            <a href="#" className="hover:text-blue-600">Privacidade</a>
            <a href="#" className="hover:text-blue-600">Suporte</a>
          </div>
          <p className="text-slate-400 text-sm">© 2024 Mundo da Encadernação. Todos os direitos reservados.</p>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;