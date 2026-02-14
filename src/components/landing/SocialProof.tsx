"use client";

import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import WhatsAppMockup from './WhatsAppMockup';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Ana Costa - Ateliê Mimos",
    status: "visto por último hoje às 15:05",
    avatar: "https://i.pravatar.cc/150?u=ana",
    messages: [
      { text: "Bom dia! Recebi o material aqui e estou encantada. Tudo muito organizado.", time: "14:50", isUser: false },
      { text: "Bom dia, Ana! Ficamos felizes que gostou. Já planejou as produções de 2025?", time: "14:55", isUser: true },
      { text: "Já sim! Vou usar 3 modelos novos. Me poupou horas de criação! Gratidão 🙏", time: "15:02", isUser: false }
    ]
  },
  {
    name: "Carla Souza - Papelaria Criativa",
    status: "online",
    avatar: "https://i.pravatar.cc/150?u=carla",
    messages: [
      { text: "Gente, os bônus de Instagram são surreais! Postei um story e já vendi 2 agendas.", time: "09:30", isUser: false },
      { text: "Uau, Carla! Que resultado rápido! 🚀", time: "09:35", isUser: true },
      { text: "Sim! O pack economiza muito tempo. Melhor investimento que fiz.", time: "09:40", isUser: false }
    ]
  },
  {
    name: "Juliana Mendes",
    status: "visto por último há 10 min",
    avatar: "https://i.pravatar.cc/150?u=juju",
    messages: [
      { text: "Acabei de assinar o plano Vitalício. A qualidade dos miolos é impecável.", time: "11:20", isUser: false },
      { text: "Seja bem-vinda ao Mundo, Ju! Aproveite as atualizações.", time: "11:25", isUser: true },
      { text: "Obrigada! Já baixei o kit de saúde, minhas clientes amaram.", time: "11:30", isUser: false }
    ]
  }
];

const SocialProof = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-emerald-600 font-bold mb-4 uppercase tracking-widest text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            Voz de quem já está faturando
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            Nossas alunas <span className="text-blue-600 underline decoration-blue-200">não mentem.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <WhatsAppMockup {...t} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 font-medium italic">
            +15.000 histórias de sucesso como estas todos os meses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;