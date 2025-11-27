import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface Edition {
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
  popular?: boolean;
}

const editions: Edition[] = [
  {
    name: 'Standard',
    price: 'Free',
    features: [
      'Full Game Access',
      'All Game Modes',
      'Basic Customization',
      'Community Access'
    ]
  },
  {
    name: 'Deluxe',
    price: '$29.99',
    originalPrice: '$39.99',
    features: [
      'Everything in Standard',
      'Exclusive Character Skins',
      'Premium Battle Pass',
      'Early Access to Updates',
      'Deluxe Badge'
    ],
    popular: true
  },
  {
    name: 'Ultimate',
    price: '$49.99',
    originalPrice: '$69.99',
    features: [
      'Everything in Deluxe',
      'All Future DLCs',
      'Exclusive Weapons',
      'Priority Support',
      'Ultimate Badge',
      'Season Pass Included'
    ]
  }
];

export const PricingSection: React.FC = () => {
  return (
    <Section id="pricing" background="dark">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          Choose Your <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Edition</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          Free to play with optional premium editions
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
        {editions.map((edition, index) => (
          <Card
            key={index}
            className={`relative flex flex-col h-full ${edition.popular ? 'border-orange-500 border-2 md:scale-105' : ''}`}
          >
            {edition.popular && (
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{edition.name}</h3>
              <div className="flex items-baseline justify-center gap-2">
                {edition.originalPrice && (
                  <span className="text-white/50 line-through text-base sm:text-lg">
                    {edition.originalPrice}
                  </span>
                )}
                <span className="text-3xl sm:text-4xl font-bold text-white">{edition.price}</span>
              </div>
            </div>
            
            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
              {edition.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm sm:text-base text-white/70">
                  <span className="text-green-400 mr-2 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                  <span className="break-words">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto">
              <Button
                variant={edition.popular ? 'primary' : edition.price === 'Free' ? 'secondary' : 'outline'}
                size="lg"
                className="w-full"
              >
                {edition.price === 'Free' ? 'Play Now' : 'Buy Now'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 sm:mt-12 text-center px-4 sm:px-0">
        <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">Download available on:</p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {['Steam', 'Epic Games', 'PlayStation Store', 'Xbox Store', 'Nintendo eShop', 'App Store', 'Google Play'].map((store) => (
            <button
              key={store}
              className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-white cursor-pointer text-xs sm:text-sm md:text-base"
            >
              {store}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
};

