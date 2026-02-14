"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const screenshots = [
  "/proof-1.webp",
  "/proof-2.webp",
  "/proof-3.webp"
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
          <div className="flex justify-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {screenshots.map((src, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative mx-auto max-w-[300px]"
                  >
                    {/* Phone Frame */}
                    <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-slate-900 overflow-hidden aspect-[9/19]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                      <img 
                        src={src} 
                        alt={`Prova social ${index + 1}`} 
                        className="w-full h-full object-cover rounded-[2rem]"
                      />
                    </div>
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
            +15.000 histórias de sucesso reais todos os meses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;