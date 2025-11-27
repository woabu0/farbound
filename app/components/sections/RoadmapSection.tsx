import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

interface RoadmapItem {
  quarter: string;
  title: string;
  features: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
}

const roadmapItems: RoadmapItem[] = [
  {
    quarter: 'Q1 2024',
    title: 'Launch & Foundation',
    features: ['Game Release', 'Core Features', 'Initial Characters'],
    status: 'completed'
  },
  {
    quarter: 'Q2 2024',
    title: 'Expansion Pack',
    features: ['New World Map', '5 New Characters', 'Guild System'],
    status: 'completed'
  },
  {
    quarter: 'Q3 2024',
    title: 'Season 1',
    features: ['Battle Pass', 'Ranked Mode', 'New Game Modes'],
    status: 'in-progress'
  },
  {
    quarter: 'Q4 2024',
    title: 'Major Update',
    features: ['Cross-Platform Play', 'New Story Campaign', 'Customization 2.0'],
    status: 'upcoming'
  }
];

export const RoadmapSection: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      case 'upcoming':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓ Completed';
      case 'in-progress':
        return '⟳ In Progress';
      case 'upcoming':
        return '→ Upcoming';
      default:
        return '';
    }
  };

  return (
    <Section id="roadmap" background="gradient">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          Development <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Roadmap</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          See what's coming next to Farbound
        </p>
      </div>
      
      <div className="space-y-4 sm:space-y-6">
        {roadmapItems.map((item, index) => (
          <Card key={index} hover>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{item.quarter}</h3>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border w-fit ${getStatusColor(item.status)}`}>
                    {getStatusText(item.status)}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl text-orange-400 mb-2 sm:mb-3">{item.title}</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm sm:text-base text-white/70">
                      <span className="text-orange-400 mr-2 mt-0.5 flex-shrink-0">•</span>
                      <span className="break-words">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

