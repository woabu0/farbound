'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { MailIcon, CheckIcon } from '../ui/Icons';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <Section background="dark">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
        <div className="flex justify-center mb-4 sm:mb-6">
          <MailIcon className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          Stay <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Updated</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8">
          Get the latest updates, exclusive rewards, and early access to new content
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all text-sm sm:text-base"
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            {submitted ? (
              <>
                <CheckIcon className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Subscribed!
              </>
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
        
        <p className="text-white/50 text-xs sm:text-sm mt-3 sm:mt-4 px-4 sm:px-0">
          By subscribing, you'll receive exclusive in-game items and early access to updates
        </p>
      </div>
    </Section>
  );
};

