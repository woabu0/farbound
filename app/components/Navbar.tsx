'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Farbound
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
              Features
            </a>
            <a href="#characters" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
              Characters
            </a>
            <a href="#modes" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
              Game Modes
            </a>
            <a href="#community" className="text-white/80 hover:text-white transition-colors text-sm xl:text-base">
              Community
            </a>
            <Button variant="primary" size="sm">
              Play Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="primary" size="sm" className="hidden sm:inline-flex">
              Play
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-gray-900/98 backdrop-blur-lg z-40">
          <div className="flex flex-col items-center justify-start pt-8 px-4 space-y-6 overflow-y-auto">
            <a 
              href="#features" 
              className="text-white/80 hover:text-white transition-colors text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#characters" 
              className="text-white/80 hover:text-white transition-colors text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Characters
            </a>
            <a 
              href="#modes" 
              className="text-white/80 hover:text-white transition-colors text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Game Modes
            </a>
            <a 
              href="#community" 
              className="text-white/80 hover:text-white transition-colors text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <Button variant="primary" size="md" className="w-full max-w-xs mt-4">
              Play Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

