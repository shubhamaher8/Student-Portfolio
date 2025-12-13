import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-32 pb-12 border-t border-white/5 mt-12">
      
      {/* Large CTA */}
      <div className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter mb-4"
        >
          READY TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">BUILD?</span>
        </motion.h2>
        
        <p className="text-gray-400 max-w-md mx-auto mb-12">
          Let's build robust, AI-powered solutions that scale.
        </p>

        <a href="mailto:shubhamaher758@gmail.com" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neon-green hover:text-black transition-colors duration-300">
          <span>START A CONVERSATION</span>
          <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-neon-green/50 transition-all" />
        </a>
      </div>

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-0">
        <div className="text-left">
          <div className="flex items-center gap-2 text-neon-green font-bold mb-2">
             <span className="text-xl">&gt;_</span> SHUBHAM AHER
          </div>
          <p className="text-sm text-gray-500 max-w-xs">GenAI + Full-Stack Developer.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/shubhamaher8" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors">
            <Github size={18} />
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/shubhamaher8" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors">
            <Linkedin size={18} />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a href="mailto:shubhamaher758@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors">
            <Mail size={18} />
            <span className="hidden md:inline">Email</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-16 text-xs text-gray-800 font-mono">
        SYSTEM_ID: SA_PORTFOLIO_V2.0 // ALL RIGHTS RESERVED 2025
      </div>
    </footer>
  );
};