'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is Farbound free to play?',
    answer: 'Yes! Farbound is free to play with optional premium editions that include exclusive content, cosmetics, and early access to updates. All core gameplay features are available in the free version.'
  },
  {
    question: 'Can I play offline?',
    answer: 'The solo campaign mode can be played offline. However, multiplayer modes, online features, and cloud saves require an internet connection.'
  },
  {
    question: 'Is crossplay supported?',
    answer: 'Yes! Crossplay is supported between PC, PlayStation 5, and Xbox Series X/S. Mobile and Nintendo Switch versions have separate servers but can play together.'
  },
  {
    question: 'What\'s the file size?',
    answer: 'The base game requires approximately 50 GB of storage space. Additional content and updates may require more space over time.'
  },
  {
    question: 'Are there microtransactions?',
    answer: 'Farbound offers optional cosmetic purchases and premium editions. All gameplay-affecting content can be earned through gameplay. We never sell power or pay-to-win items.'
  },
  {
    question: 'What platforms is Farbound available on?',
    answer: 'Farbound is available on PC (Windows), PlayStation 5, Xbox Series X/S, Nintendo Switch, iOS, and Android. More platforms may be added in the future.'
  },
  {
    question: 'How often does the game receive updates?',
    answer: 'We release regular updates including bug fixes, balance changes, and new content. Major content updates typically arrive every 2-3 months, with smaller patches as needed.'
  },
  {
    question: 'Can I transfer my progress between platforms?',
    answer: 'Yes! With a Farbound account, you can sync your progress across all platforms. Simply log in with the same account on any supported device.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="gradient">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          Frequently Asked <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Questions</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          Everything you need to know about Farbound
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-0">
        {faqs.map((faq, index) => (
          <Card key={index} className="overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex items-center justify-between p-4 sm:p-6 cursor-pointer"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white pr-4 break-words">{faq.question}</h3>
              <span className="text-orange-400 text-xl sm:text-2xl flex-shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-0 pt-0 px-4 sm:px-6 pb-4 sm:pb-6 border-t border-white/10">
                <p className="text-sm sm:text-base text-white/70 leading-relaxed pt-4 break-words">{faq.answer}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

