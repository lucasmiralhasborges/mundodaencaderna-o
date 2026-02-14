"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, MessageCircle, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const screenshots = [
  { src: "/proof-1.webp", alt: "Feedback de aluna 1" },
  { src: "/proof-2.webp", alt: "Feedback de aluna 2" },
  { src: "/proof-3.webp", alt: "Feedback de aluna 3" }
];

const SocialProof = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-32 bg-[#F8FAFC] overflow-hidden relative">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-100/40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-50/50 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold mb-6 text-xs uppercase tracking-widest border border-blue-100"
          >
            <MessageCircle className="w-4 h-4" />
            Resultados Reais
          </motion.div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
            Histórias que inspiram <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">e transformam vidas.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-slate-500 font-medium">Nota 4.9/5 baseada em milhares de feedbacks</p>
          </div>
        </div>

        <div className="relative group">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-8">
              {screenshots.map((item, index) => (
                <div key={index} className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] pl-4 sm:pl-8 py-10">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative"
                  >
                    {/* Aspas decorativas */}
                    <div className="absolute -top-6 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 z-20">
                      <Quote className="w-6 h-6 fill-blue-50" />
                    </div>

                    {/* Container da Imagem sem cortes */}
                    <div className="bg-white rounded-[2.5rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 transition-shadow hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                      <div className="rounded-[1.8rem] overflow-hidden bg-slate-50 border border-slate-50">
                        <img 
                          src={item.src} 
                          alt={item.alt} 
                          className="w-full h-auto block object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de Navegação Customizados */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={scrollPrev}
              className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-95 group/btn"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" />
            </button>
            <div className="h-1 w-20 bg-slate-200 rounded-full overflow-hidden">
               <motion.div 
                className="h-full bg-blue-600"
                animate={{ width: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               />
            </div>
            <button
              onClick={scrollNext}
              className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all active:scale-95 group/btn"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-emerald-50 text-emerald-700 px-6 py-3 rounded-2xl font-bold text-sm">
            🔥 +15.000 empreendedoras já deram esse passo. E você?
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;