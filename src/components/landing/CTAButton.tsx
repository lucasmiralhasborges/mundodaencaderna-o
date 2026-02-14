"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface CTAButtonProps {
  className?: string;
  children: React.ReactNode;
}

const CTAButton = ({ className, children }: CTAButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-gradient-to-r from-[#1E3A8A] to-[#10B981] text-white font-bold py-5 px-10 rounded-xl shadow-xl flex items-center justify-center gap-3 text-lg sm:text-xl transition-all uppercase tracking-wide ${className}`}
    >
      <ShoppingCart className="w-6 h-6" />
      {children}
    </motion.button>
  );
};

export default CTAButton;