'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { DiscordIcon, YouTubeIcon, TwitchIcon, RedditIcon, TwitterIcon } from '../ui/Icons';
import { Button } from '../ui/Button';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  stats: string;
  href?: string;
}

const socialLinks: SocialLink[] = [
  { name: 'Discord', icon: <DiscordIcon className="w-8 h-8" />, stats: '500K+ Members', href: 'https://discord.gg' },
  { name: 'YouTube', icon: <YouTubeIcon className="w-8 h-8" />, stats: '2M+ Subscribers', href: 'https://youtube.com' },
  { name: 'Twitch', icon: <TwitchIcon className="w-8 h-8" />, stats: '1M+ Followers', href: 'https://twitch.tv' },
  { name: 'Reddit', icon: <RedditIcon className="w-8 h-8" />, stats: '300K+ Members', href: 'https://reddit.com' },
  { name: 'Twitter', icon: <TwitterIcon className="w-8 h-8" />, stats: '800K+ Followers', href: 'https://twitter.com' }
];

export const CommunitySection: React.FC = () => {
  const handleJoinClick = (href?: string) => {
    if (href && typeof window !== 'undefined') {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Section id="community" background="gradient">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          Join Our <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Community</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          Connect with millions of players worldwide
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-8 sm:mb-12">
        {socialLinks.map((social, index) => (
          <Card key={index} hover className="text-center">
            <div className="flex justify-center mb-2 sm:mb-3 text-white/80">
              {social.icon}
            </div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2">{social.name}</h3>
            <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-4">{social.stats}</p>
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs sm:text-sm"
              onClick={() => handleJoinClick(social.href)}
            >
              Join
            </Button>
          </Card>
        ))}
      </div>
      
      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        <Card className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">10M+</div>
          <div className="text-white/60 text-xs sm:text-sm">Active Players</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">50K+</div>
          <div className="text-white/60 text-xs sm:text-sm">Daily Active</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">1M+</div>
          <div className="text-white/60 text-xs sm:text-sm">Guilds</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">24/7</div>
          <div className="text-white/60 text-xs sm:text-sm">Support</div>
        </Card>
      </div>
    </Section>
  );
};

