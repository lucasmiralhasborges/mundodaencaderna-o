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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-[#D4A373] hover:bg-[#C08F62] text-white font-bold py-5 px-8 rounded-full shadow-lg flex items-center justify-center gap-3 text-lg sm:text-xl transition-colors uppercase tracking-wide ${className}`}
    >
      <ShoppingCart className="w-6 h-6" />
      {children}
    </motion.button>
  );
};

export default CTAButton;