import React from 'react';
import Image from 'next/image';

interface CharacterImageProps {
  name: string;
  classType: string;
  className?: string;
}

// Map character names to image filenames
const characterImageMap: Record<string, string> = {
  'Aether': 'aether.png',
  'Lumina': 'lumina.png',
  'Shadow': 'shadow.png',
  'Guardian': 'guardian.png'
};

export const CharacterImage: React.FC<CharacterImageProps> = ({ name, classType, className = '' }) => {
  const imagePath = characterImageMap[name] || 'aether.png';

  return (
    <div className={`relative w-full h-full ${className} flex items-center justify-center`}>
      {/* Profile Picture Container */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-xl bg-gray-900">
        <Image
          src={`/images/${imagePath}`}
          alt={`${name} - ${classType}`}
          fill
          className="object-cover object-center object-top"
          sizes="(max-width: 768px) 128px, 160px"
          quality={75}
          loading="lazy"
        />
        {/* Subtle glow effect */}
        <div className="absolute inset-0 ring-2 ring-white/5 rounded-full pointer-events-none"></div>
      </div>
    </div>
  );
};

