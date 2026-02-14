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

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Comportamento padrão: rolar para a seção de preços
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`flex flex-col items-center gap-2.5 ${className}`}>
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.02, translateY: -2 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative overflow-hidden group w-full py-4 px-6 rounded-xl font-extrabold text-base sm:text-lg uppercase tracking-wider transition-all shadow-xl flex flex-col items-center justify-center
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

        <div className="flex items-center gap-2.5 relative z-10">
          {isPrimary && <Zap className="w-4 h-4 fill-white" />}
          {children}
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.button>
      
      {subtext && (
        <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-80">
          <div className="w-1 h-1 bg-emerald-500 rounded-full" />
          {subtext}
        </div>
      )}
    </div>
  );
};

export default CTAButton;