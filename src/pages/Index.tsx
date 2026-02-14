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