import React from 'react';
import { Container } from './ui/Container';
import { DiscordIcon, YouTubeIcon, TwitchIcon, TwitterIcon, RedditIcon } from './ui/Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <Container>
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-3 sm:mb-4">
                Farbound
              </h3>
              <p className="text-white/60 text-xs sm:text-sm">
                The ultimate gaming experience. Enter a world beyond imagination.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#features" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Features</a></li>
                <li><a href="#characters" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Characters</a></li>
                <li><a href="#modes" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Game Modes</a></li>
                <li><a href="#pricing" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Pricing</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#faq" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">FAQ</a></li>
                <li><a href="#community" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Community</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Contact Us</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Help Center</a></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Cookie Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-4 sm:gap-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Discord">
                  <DiscordIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
                  <YouTubeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitch">
                  <TwitchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                  <TwitterIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Reddit">
                  <RedditIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
              
              <p className="text-white/60 text-xs sm:text-sm text-center">
                Copyright © {currentYear} Farbound. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

