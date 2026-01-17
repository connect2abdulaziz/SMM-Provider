'use client';

import React, { useState } from 'react';
import { FaServer, FaEnvelope, FaQuestionCircle, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary/95 backdrop-blur-md w-full sticky top-0 z-[1000] shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="flex items-center justify-center shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg shadow-secondary/30 group-hover:shadow-secondary/50 transition-all duration-300 group-hover:scale-110">
                <span className="text-foreground font-bold text-lg md:text-xl">P</span>
              </div>
            </div>
            <div className="flex items-baseline gap-1 font-semibold text-lg md:text-xl leading-none">
              <span className="text-secondary font-bold group-hover:text-secondary/90 transition-colors">PAK</span>
              <span className="text-foreground font-medium">Panel</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a 
              href="/services" 
              className="flex items-center gap-2 px-4 lg:px-5 py-2.5 text-foreground no-underline rounded-lg text-sm lg:text-base font-medium whitespace-nowrap hover:bg-white/10 hover:text-secondary transition-all duration-200 group relative"
            >
              <FaServer className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Services</span>
            </a>
            
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-4 lg:px-5 py-2.5 text-foreground no-underline rounded-lg text-sm lg:text-base font-medium whitespace-nowrap hover:bg-white/10 hover:text-secondary transition-all duration-200 group relative"
            >
              <FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>Contact Us</span>
            </a>
            
            {/* <a 
              href="#faq" 
              className="flex items-center gap-2 px-4 lg:px-5 py-2.5 text-foreground no-underline rounded-lg text-sm lg:text-base font-medium whitespace-nowrap hover:bg-white/10 hover:text-secondary transition-all duration-200 group relative"
            >
              <FaQuestionCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span>FAQ</span>
            </a> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-2">
              <a 
                href="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-foreground no-underline rounded-lg text-base font-medium hover:bg-white/10 hover:text-secondary transition-all duration-200"
              >
                <FaServer className="w-5 h-5" />
                <span>Services</span>
              </a>
              
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-foreground no-underline rounded-lg text-base font-medium hover:bg-white/10 hover:text-secondary transition-all duration-200"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
              
              <a 
                href="#faq" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-foreground no-underline rounded-lg text-base font-medium hover:bg-white/10 hover:text-secondary transition-all duration-200"
              >
                <FaQuestionCircle className="w-5 h-5" />
                <span>FAQ</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
