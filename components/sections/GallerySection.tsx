'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Section } from '../ui/Section';
import { BASE_PATH } from '@/lib/config';

const screenshots = [
  { id: 1, image: 'screenshot-1.png' },
  { id: 2, image: 'screenshot-2.png' },
  { id: 3, image: 'screenshot-3.png' },
  { id: 4, image: 'screenshot-4.png' },
  { id: 5, image: 'screenshot-5.png' },
  { id: 6, image: 'screenshot-6.png' }
];

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Section id="gallery" background="dark">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          Screenshots & <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Gallery</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          See the stunning visuals and epic moments from Farbound
        </p>
      </div>
      
      {/* Main image */}
      <div className="mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative">
        <div className="aspect-video relative">
          <Image
            src={`${BASE_PATH}/images/${screenshots[selectedImage].image}`}
            alt={`Farbound Gameplay Screenshot ${selectedImage + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority={selectedImage === 0}
          />
        </div>
      </div>
      
      {/* Thumbnail grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.id}
            onClick={() => setSelectedImage(index)}
            className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer relative ${
              selectedImage === index
                ? 'border-orange-500 scale-105 shadow-lg shadow-orange-500/50'
                : 'border-white/10 hover:border-white/30'
            }`}
          >
            <Image
              src={`${BASE_PATH}/images/${screenshot.image}`}
              alt={`Farbound Screenshot ${screenshot.id}`}
              fill
              className={`object-cover transition-opacity ${
                selectedImage === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 16vw, 150px"
              loading={index < 3 ? "eager" : "lazy"}
              quality={75}
            />
          </button>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <button
          onClick={() => setSelectedImage((prev) => (prev - 1 + screenshots.length) % screenshots.length)}
          className="px-4 sm:px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer text-sm sm:text-base"
        >
          ← Previous
        </button>
        <button
          onClick={() => setSelectedImage((prev) => (prev + 1) % screenshots.length)}
          className="px-4 sm:px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer text-sm sm:text-base"
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

