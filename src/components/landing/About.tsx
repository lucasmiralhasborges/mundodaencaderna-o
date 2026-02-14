"use client";

import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-64 h-64 flex-shrink-0 relative">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
            alt="Angela Soares"
            className="w-full h-full object-cover rounded-full border-8 border-[#F8EDEB] shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-[#B5838D] text-white px-4 py-2 rounded-lg font-bold shadow-md">
            Angela Soares
          </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-[#333]">👩‍💼 Quem criou isso?</h2>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>Meu nome é Angela Soares. Eu conheço profundamente o mercado de encadernação.</p>
            <p>Criei esse acervo pensando em quem quer: <strong>Agilidade, Organização, Profissionalismo e Mais vendas.</strong></p>
            <p>Eu fiz esse material para facilitar sua vida.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;