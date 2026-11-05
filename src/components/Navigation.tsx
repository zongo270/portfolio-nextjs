"use client";
import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navigation({ onOpenResume }: { onOpenResume: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-lg bg-cyber-900 border border-cyber-cyan/30 flex items-center justify-center font-mono font-bold text-cyber-cyan transition-all">
            SK
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-semibold tracking-wide text-slate-100 group-hover:text-cyber-cyan transition-colors text-sm sm:text-base">
              Serge-Antoine Keou
            </span>
            <span className="text-[10px] font-mono text-cyber-cyan/80 tracking-wider flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-pulse"></span>
              SYS_SEC // CLOUD_ARCH
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-mono uppercase tracking-wider">
          <a href="#about" className="text-slate-400 hover:text-cyber-cyan transition-colors">01. Overview</a>
          <a href="#education" className="text-slate-400 hover:text-cyber-cyan transition-colors">02. Academics</a>
          <a href="#credentials" className="text-slate-400 hover:text-cyber-cyan transition-colors">03. Certifications</a>
          <a href="#projects" className="text-slate-400 hover:text-cyber-cyan transition-colors">04. Projects</a>
          <a href="#experience" className="text-slate-400 hover:text-cyber-cyan transition-colors">05. Experience</a>
          <a href="#contact" className="text-slate-400 hover:text-cyber-cyan transition-colors">06. Uplink</a>
        </nav>

        <div className="hidden sm:flex items-center space-x-3">
          <button onClick={onOpenResume} className="px-3.5 py-1.5 text-xs font-mono rounded border border-cyber-emerald/50 bg-cyber-emerald/10 text-cyber-emerald hover:bg-cyber-emerald hover:text-cyber-950 transition-all flex items-center space-x-1.5 font-medium shadow-sm">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </button>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-400 hover:text-white p-2">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-6 py-4 space-y-3 font-mono text-xs uppercase tracking-wider">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyber-cyan py-1">01. Overview</a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyber-cyan py-1">02. Academics</a>
          <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyber-cyan py-1">03. Certifications</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyber-cyan py-1">04. Projects</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyber-cyan py-1">05. Experience</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyber-cyan py-1">06. Uplink</a>
          <div className="pt-2">
            <button onClick={() => { setMobileMenuOpen(false); onOpenResume(); }} className="w-full py-2 text-xs font-mono rounded border border-cyber-emerald bg-cyber-emerald/10 text-cyber-emerald flex items-center justify-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>View Verified Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
