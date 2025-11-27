import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { TargetIcon, SwordIcon, HandshakeIcon, TrophyIcon, CalendarIcon, CheckIcon } from '../ui/Icons';

interface GameMode {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const gameModes: GameMode[] = [
  {
    icon: <TargetIcon className="w-12 h-12 text-cyan-400" />,
    title: 'Solo Campaign',
    description: 'Embark on an epic single-player journey through the main storyline.',
    features: ['40+ hours of content', 'Multiple endings', 'Character development']
  },
  {
    icon: <SwordIcon className="w-12 h-12 text-red-400" />,
    title: 'PvP Arena',
    description: 'Compete against other players in intense combat matches.',
    features: ['Ranked matches', 'Tournaments', 'Leaderboards']
  },
  {
    icon: <HandshakeIcon className="w-12 h-12 text-green-400" />,
    title: 'Co-op Mode',
    description: 'Team up with friends to tackle challenging missions together.',
    features: ['Up to 4 players', 'Shared rewards', 'Team strategies']
  },
  {
    icon: <TrophyIcon className="w-12 h-12 text-yellow-400" />,
    title: 'Ranked Mode',
    description: 'Climb the competitive ladder and prove your skills.',
    features: ['Seasonal rewards', 'Skill-based matchmaking', 'Exclusive items']
  },
  {
    icon: <CalendarIcon className="w-12 h-12 text-orange-400" />,
    title: 'Events',
    description: 'Participate in limited-time events with special rewards.',
    features: ['Weekly challenges', 'Holiday events', 'Exclusive content']
  }
];

export const GameModesSection: React.FC = () => {
  return (
    <Section id="modes" background="gradient">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          Game <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Modes</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          Multiple ways to play and enjoy Farbound
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {gameModes.map((mode, index) => (
          <Card key={index} hover>
            <div className="flex justify-center mb-3 sm:mb-4">{mode.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{mode.title}</h3>
            <p className="text-sm sm:text-base text-white/70 mb-3 sm:mb-4">{mode.description}</p>
            <ul className="space-y-1.5 sm:space-y-2">
              {mode.features.map((feature, i) => (
                <li key={i} className="flex items-start text-white/60 text-xs sm:text-sm">
                  <CheckIcon className="text-orange-400 mr-2 w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
                  <span className="break-words">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
