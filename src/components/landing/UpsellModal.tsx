"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Zap } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onDecline: () => void;
}

const UpsellModal = ({ isOpen, onClose, onConfirm, onDecline }: UpsellModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-[400px] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100"
          >
            {/* Header Temático */}
            <div className="bg-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-4 h-4 fill-white" />
                <span className="font-black text-[10px] uppercase tracking-[0.2em]">Oportunidade Única</span>
              </div>
              <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8 text-center space-y-6">
              {/* Título e Badge */}
              <div className="space-y-3">
                <h3 className="text-xl font-black text-slate-900 leading-tight uppercase tracking-tight">
                  ATUALIZE PARA O <br />
                  <span className="text-blue-600">PREMIUM VIP AGORA</span>
                </h3>
                <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                  DESCONTO ESPECIAL APLICADO
                </div>
              </div>

              {/* Card de Preço Refinado */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -mr-8 -mt-8 blur-2xl" />
                
                <p className="text-slate-400 font-bold text-xs line-through mb-1">De R$ 19,90</p>
                <p className="text-slate-600 font-bold text-sm mb-1">Por apenas</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-emerald-600 text-2xl font-black">R$</span>
                  <span className="text-emerald-600 text-6xl font-black tracking-tighter">17,00</span>
                </div>
              </div>

              {/* Checklist de Benefícios */}
              <ul className="space-y-3 text-left max-w-[240px] mx-auto">
                {[
                  "Acesso Vitalício Total",
                  "Todas as Atualizações",
                  "Incluso os 4 Bônus VIP",
                  "Suporte prioritário"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[4]" />
                    </div>
                    <span className="text-xs font-bold text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Botões de Ação */}
              <div className="space-y-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onConfirm}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_15px_30px_-10px_rgba(16,185,129,0.5)] transition-all"
                >
                  SIM, EU QUERO O PREMIUM!
                </motion.button>
                <button
                  onClick={onDecline}
                  className="w-full text-slate-400 hover:text-slate-600 font-bold text-[10px] uppercase tracking-widest transition-colors"
                >
                  Não, prefiro continuar com o Essencial
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default UpsellModal;