import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { CharacterImage } from '../ui/CharacterImage';

interface Character {
  name: string;
  class: string;
  abilities: string[];
  description: string;
  color: string;
  gradient: string;
}

const characters: Character[] = [
  {
    name: 'Aether',
    class: 'Warrior',
    abilities: ['Heavy Strike', 'Shield Bash', 'Berserker Rage'],
    description: 'A master of close combat with unmatched strength and resilience.',
    color: 'text-red-400',
    gradient: 'from-red-500/20 to-orange-500/20'
  },
  {
    name: 'Lumina',
    class: 'Mage',
    abilities: ['Arcane Blast', 'Teleport', 'Mana Shield'],
    description: 'Wields powerful magic to control the battlefield from afar.',
    color: 'text-orange-400',
    gradient: 'from-orange-500/20 to-amber-500/20'
  },
  {
    name: 'Shadow',
    class: 'Assassin',
    abilities: ['Stealth', 'Backstab', 'Poison Blade'],
    description: 'Strikes from the shadows with deadly precision and speed.',
    color: 'text-gray-300',
    gradient: 'from-gray-500/20 to-slate-500/20'
  },
  {
    name: 'Guardian',
    class: 'Tank',
    abilities: ['Fortify', 'Taunt', 'Regeneration'],
    description: 'Protects allies with impenetrable defense and healing powers.',
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-teal-500/20'
  }
];

export const CharactersSection: React.FC = () => {
  return (
    <Section id="characters" background="gradient">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          Choose Your <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Champion</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          Each character offers unique playstyles and abilities
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {characters.map((character, index) => (
          <Card key={index} hover className="text-center overflow-hidden relative group">
            {/* Gradient background overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${character.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none`}></div>
            
            {/* Character Profile Picture */}
            <div className="mb-6 flex justify-center relative z-10">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <CharacterImage name={character.name} classType={character.class} />
              </div>
            </div>
            
            {/* Character Info */}
            <div className="relative z-10 px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                {character.name}
              </h3>
              <p className={`${character.color} font-semibold mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider`}>
                {character.class}
              </p>
              <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed min-h-[2.5rem] sm:min-h-[3rem]">
                {character.description}
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <p className="text-white/50 text-xs mb-3 uppercase tracking-wider font-semibold">Abilities</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {character.abilities.map((ability, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/80 text-xs font-medium transition-all duration-200 hover:scale-105 hover:border-white/20"
                    >
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

