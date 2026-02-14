"use client";

import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-4 bg-white border-t border-slate-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
          alt="Angela Soares"
          className="w-64 h-64 object-cover rounded-3xl shadow-xl border-4 border-white"
        />
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">👩‍💼 Quem criou este acervo?</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-4">
            <p>Meu nome é <strong>Angela Soares</strong>, especialista em encadernação profissional.</p>
            <p>Criei o Mundo da Encadernação para ser o atalho definitivo que eu gostaria de ter tido no meu início.</p>
            <p className="text-blue-900 font-bold italic">Prepare-se para profissionalizar sua paixão.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;