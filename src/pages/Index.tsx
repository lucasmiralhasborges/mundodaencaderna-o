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