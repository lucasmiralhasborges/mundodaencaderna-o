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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-[450px] bg-white rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          >
            {/* Header Laranja */}
            <div className="bg-[#FF8A00] p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Zap className="w-5 h-5 fill-white" />
                <span className="font-black text-sm uppercase tracking-wider">ESPERE! OFERTA EXCLUSIVA!</span>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 text-center space-y-6">
              {/* Título e Badge */}
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-[#1D1D1D] leading-tight uppercase tracking-tight">
                  ATUALIZAÇÃO PARA O <br />
                  <span className="text-[#FF8A00]">PREMIUM COM</span>
                </h3>
                <div className="inline-block bg-[#FFF0E0] text-[#FF8A00] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-[#FFE0C2]">
                  DESCONTO EXTRA
                </div>
              </div>

              {/* Card de Preço Cinza */}
              <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF8A00]/5 rounded-full -mr-10 -mt-10 blur-2xl" />
                
                <p className="text-slate-400 font-bold text-sm line-through mb-1">De R$ 27,90</p>
                <p className="text-[#1D1D1D] font-black text-lg mb-1">Por apenas</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[#FF8A00] text-3xl font-black">R$</span>
                  <span className="text-[#FF8A00] text-7xl font-black tracking-tighter">17,00</span>
                </div>
                <div className="mt-2 text-emerald-600 font-black text-xs uppercase tracking-widest">
                  Economize R$ 10,90 agora!
                </div>
              </div>

              {/* Checklist de Benefícios */}
              <ul className="space-y-3 text-left max-w-[280px] mx-auto">
                {[
                  "Acesso a todos os 4 Bônus",
                  "Atualizações Semanais",
                  "Acesso Vitalício",
                  "Suporte prioritário"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[4]" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Botões de Ação */}
              <div className="space-y-4 pt-4">
                <button
                  onClick={onConfirm}
                  className="w-full bg-[#FF8A00] hover:bg-[#FF9F2E] text-white py-5 rounded-2xl font-black text-lg uppercase tracking-wider shadow-[0_10px_30px_rgba(255,138,0,0.3)] transition-all active:scale-[0.98]"
                >
                  SIM, QUERO O DESCONTO!
                </button>
                <button
                  onClick={onDecline}
                  className="w-full text-slate-400 hover:text-slate-600 font-bold text-sm transition-colors"
                >
                  Não, prefiro o Pacote Básico
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