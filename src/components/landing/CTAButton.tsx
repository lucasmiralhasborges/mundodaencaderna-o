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
      whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      className={`bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white font-bold py-5 px-8 rounded-full shadow-lg flex items-center justify-center gap-3 text-lg sm:text-xl transition-all uppercase tracking-wide border-b-4 border-[#B45309] ${className}`}
    >
      <ShoppingCart className="w-6 h-6" />
      {children}
    </motion.button>
  );
};

export default CTAButton;