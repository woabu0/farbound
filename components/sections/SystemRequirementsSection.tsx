import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const SystemRequirementsSection: React.FC = () => {
  return (
    <Section id="requirements" background="dark">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          System <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Requirements</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          Check if your system is ready for Farbound
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
        <Card>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Minimum Requirements</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">OS</p>
              <p className="text-sm sm:text-base text-white">Windows 10 (64-bit)</p>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">Processor</p>
              <p className="text-sm sm:text-base text-white">Intel Core i5-8400 / AMD Ryzen 5 2600</p>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">Memory</p>
              <p className="text-sm sm:text-base text-white">8 GB RAM</p>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">Graphics</p>
              <p className="text-sm sm:text-base text-white">NVIDIA GTX 1060 / AMD RX 580</p>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">Storage</p>
              <p className="text-sm sm:text-base text-white">50 GB available space</p>
            </div>
          </div>
        </Card>
        
        <Card>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">Recommended Requirements</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">OS</p>
              <p className="text-sm sm:text-base text-white">Windows 11 (64-bit)</p>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">Processor</p>
              <p className="text-sm sm:text-base text-white">Intel Core i7-10700K / AMD Ryzen 7 3700X</p>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">Memory</p>
              <p className="text-sm sm:text-base text-white">16 GB RAM</p>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">Graphics</p>
              <p className="text-sm sm:text-base text-white">NVIDIA RTX 3070 / AMD RX 6700 XT</p>
            </div>
            <div>
              <p className="text-white/60 text-xs sm:text-sm mb-1">Storage</p>
              <p className="text-sm sm:text-base text-white">50 GB available space (SSD recommended)</p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Platforms */}
      <div className="mt-8 sm:mt-12 text-center px-4 sm:px-0">
        <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">Available on:</p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {['PC', 'PlayStation 5', 'Xbox Series X/S', 'Nintendo Switch', 'Mobile'].map((platform) => (
            <div
              key={platform}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              <span className="text-white text-sm sm:text-base">{platform}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

