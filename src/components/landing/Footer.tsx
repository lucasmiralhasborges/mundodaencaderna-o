"use client";

import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ShieldCheck, Mail, MessageCircle, Lock, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/hero-headline-image.png" 
                alt="Logo Mundo da Encadernação" 
                className="w-10 h-auto object-contain"
              />
              <span className="text-xl font-black text-slate-900 tracking-tight">Mundo da Encadernação</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              O maior acervo de arquivos digitais para encadernação do Brasil. Nossa missão é profissionalizar o seu ateliê com design de alta qualidade.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 cursor-pointer transition-colors">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-600 cursor-pointer transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Planos e Preços</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Área de Membros</a></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Suporte e Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4" /> contato@mundodaencadernacao.com
                </a>
              </li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Política de Reembolso</a></li>
            </ul>
          </div>

          {/* Security & Payment */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Segurança</h4>
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                <Lock className="w-5 h-5 text-emerald-500" />
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Ambiente Seguro</p>
                  <p className="text-xs font-bold text-slate-700">SSL 256-bit Encrypted</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                Compra 100% Garantida
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-medium">
          <p>© 2024 Mundo da Encadernação. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
          <div className="flex items-center gap-4">
            <MadeWithDyad />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;