"use client";

import React from 'react';
import { Camera, Mic, Phone, Video, ChevronLeft, Plus, CheckCheck } from 'lucide-react';

interface Message {
  text: string;
  time: string;
  isUser: boolean;
}

interface WhatsAppMockupProps {
  name: string;
  status: string;
  avatar: string;
  messages: Message[];
}

const WhatsAppMockup = ({ name, status, avatar, messages }: WhatsAppMockupProps) => {
  return (
    <div className="w-[320px] sm:w-[360px] mx-auto bg-[#111b21] rounded-[3rem] p-3 shadow-2xl border-[8px] border-slate-900 relative overflow-hidden h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-[#202c33] p-4 pt-10 flex items-center justify-between text-white shrink-0">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-5 h-5 text-blue-400" />
          <img src={avatar} className="w-10 h-10 rounded-full object-cover" alt={name} />
          <div>
            <h4 className="text-sm font-bold truncate w-32">{name}</h4>
            <p className="text-[10px] text-slate-400">{status}</p>
          </div>
        </div>
        <div className="flex gap-4 text-blue-400">
          <Video className="w-5 h-5" />
          <Phone className="w-5 h-5" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0b141a] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl relative shadow-sm ${
              msg.isUser ? 'bg-[#005c4b] text-white rounded-tr-none' : 'bg-[#202c33] text-white rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[9px] opacity-60">{msg.time}</span>
                {msg.isUser && <CheckCheck className="w-3 h-3 text-blue-400" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-[#202c33] p-3 flex items-center gap-3 shrink-0 pb-8">
        <Plus className="w-6 h-6 text-slate-400" />
        <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-slate-400 text-sm">
          Mensagem
        </div>
        <Camera className="w-6 h-6 text-slate-400" />
        <Mic className="w-6 h-6 text-slate-400" />
      </div>
    </div>
  );
};

export default WhatsAppMockup;