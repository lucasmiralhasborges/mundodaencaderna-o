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
import ClosingCTA from '@/components/landing/ClosingCTA';
import Footer from '@/components/landing/Footer';
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
        <Bonuses />
        
        {/* Social Proof positioned right before Pricing */}
        <SocialProof />
        
        <div id="pricing">
          <Pricing />
        </div>

        <Guarantee />
        <About />
        <FAQ />

        {/* Closing CTA */}
        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;