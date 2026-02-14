"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';

interface CTAButtonProps {
  className?: string;
  children: React.ReactNode;
  subtext?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const CTAButton = ({ className, children, subtext, variant = 'primary', onClick }: CTAButtonProps) => {
  const isPrimary = variant === 'primary';

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02, translateY: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative overflow-hidden group w-full py-5 px-8 rounded-2xl font-black text-lg sm:text-xl uppercase tracking-wider transition-all shadow-2xl flex flex-col items-center justify-center
          ${isPrimary 
            ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-emerald-500/20' 
            : 'bg-white text-slate-900 border-2 border-slate-100 shadow-slate-200/50'}
        `}
      >
        {/* Efeito de Brilho (Shine) */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 -skew-x-12 pointer-events-none"
        />

        <div className="flex items-center gap-3 relative z-10">
          {isPrimary && <Zap className="w-5 h-5 fill-white" />}
          {children}
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.button>
      
      {subtext && (
        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
          {subtext}
        </div>
      )}
    </div>
  );
};

export default CTAButton;