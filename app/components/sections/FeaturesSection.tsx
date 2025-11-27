import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { BookIcon, GlobeIcon, UsersIcon, PaletteIcon, SwordIcon, TrophyIcon } from '../ui/Icons';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <BookIcon className="w-12 h-12 text-orange-400" />,
    title: 'Epic Storyline',
    description: 'Immerse yourself in a rich narrative spanning multiple worlds with deep lore and memorable characters.'
  },
  {
    icon: <GlobeIcon className="w-12 h-12 text-cyan-400" />,
    title: 'Open-World Exploration',
    description: 'Discover vast, hand-crafted worlds filled with secrets, hidden treasures, and dynamic events.'
  },
  {
    icon: <UsersIcon className="w-12 h-12 text-rose-400" />,
    title: 'Multiplayer Modes',
    description: 'Team up with friends or compete against players worldwide in various PvP and co-op modes.'
  },
  {
    icon: <PaletteIcon className="w-12 h-12 text-orange-400" />,
    title: 'Deep Customization',
    description: 'Create your unique character with thousands of customization options for appearance, skills, and gear.'
  },
  {
    icon: <SwordIcon className="w-12 h-12 text-red-400" />,
    title: 'Dynamic Combat',
    description: 'Master fluid combat mechanics with a wide arsenal of weapons, abilities, and combo systems.'
  },
  {
    icon: <TrophyIcon className="w-12 h-12 text-yellow-400" />,
    title: 'Character Progression',
    description: 'Level up your character, unlock new abilities, and build your perfect playstyle.'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <Section id="features" background="dark">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          Key <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Features</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          Everything you need for the ultimate gaming experience
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <Card key={index} hover className="text-center">
            <div className="flex justify-center mb-3 sm:mb-4">{feature.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
            <p className="text-sm sm:text-base text-white/70 px-2 sm:px-0">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

