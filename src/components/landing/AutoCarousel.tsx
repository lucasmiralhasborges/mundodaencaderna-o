"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const carouselImages = [
  { src: "/carousel-1.webp", alt: "Agendas Clássicas 2025" },
  { src: "/carousel-2.webp", alt: "Agenda Anemone Flowers" },
  { src: "/carousel-3.webp", alt: "Caderneta Pet" },
  { src: "/carousel-4.webp", alt: "Agenda Fadas" },
  { src: "/carousel-5.webp", alt: "Agenda Spidey" },
  { src: "/carousel-6.webp", alt: "Agenda Stitch" },
];

const AutoCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  return (
    <div className="w-full mt-12 mb-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">
          {carouselImages.map((image, index) => (
            <div key={index} className="flex-[0_0_70%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] min-w-0">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicador de progresso visual simples */}
      <div className="flex justify-center gap-2 mt-6">
        <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-400"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoCarousel;