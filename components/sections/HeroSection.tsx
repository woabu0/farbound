'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { GamepadIcon, DownloadIcon, SwordIcon, GlobeIcon, UsersIcon, TrophyIcon } from '../ui/Icons';

const gameFeatures = [
  { icon: SwordIcon, title: 'Epic Combat' },
  { icon: GlobeIcon, title: 'Open World' },
  { icon: UsersIcon, title: 'Multiplayer' },
  { icon: TrophyIcon, title: 'Progression' }
];

export const HeroSection: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    // Reduced particle count for better performance
    setParticles(
      Array.from({ length: 10 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${2 + Math.random() * 2}s`
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-gray-900 to-cyan-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMCA0djJoLTJ2LTJoMnptLTQtNHYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          />
        ))}
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Main Slogan */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent block sm:inline">
                Enter a World
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent inline-block whitespace-nowrap">
                Beyond Imagination
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-5 sm:mb-6 max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
              Embark on an epic journey through vast open worlds, master powerful abilities, 
              and forge your legend in the ultimate gaming experience.
            </p>
            
            {/* Game Features Grid */}
            <div className="flex justify-center lg:justify-start mb-5 sm:mb-6 px-4 sm:px-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-md w-full">
                {gameFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                    >
                      <div className="mb-1 text-orange-400 flex justify-center">
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <div className="text-white font-semibold text-[9px] sm:text-[10px] leading-tight">{feature.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5 sm:mb-6 px-4 sm:px-0">
              <Button variant="primary" size="md" className="w-full sm:w-auto text-sm sm:text-base">
                <GamepadIcon className="mr-2 w-4 h-4" />
                Play Now
              </Button>
              <Button variant="secondary" size="md" className="w-full sm:w-auto text-sm sm:text-base">
                <DownloadIcon className="mr-2 w-4 h-4" />
                Download
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-white/60 px-4 sm:px-0">
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-white">10M+</div>
                <div className="text-[10px] sm:text-xs">Players</div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-white">4.8★</div>
                <div className="text-[10px] sm:text-xs">Rating</div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-lg sm:text-xl font-bold text-white">100+</div>
                <div className="text-[10px] sm:text-xs">Countries</div>
              </div>
            </div>
          </div>
          
          {/* Right side - PlayStation Controller Buttons */}
          <div className="relative mt-6 sm:mt-8 lg:mt-0 flex justify-center items-center order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Triangle Button */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:rotate-12 hover:scale-110">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 L22 20 L2 20 Z"/>
                </svg>
              </div>
              
              {/* Circle Button */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:rotate-12 hover:scale-110">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              
              {/* Square Button */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:rotate-12 hover:scale-110">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16"/>
                </svg>
              </div>
              
              {/* X Button */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:rotate-12 hover:scale-110">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="6" y1="6" x2="18" y2="18"/>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

