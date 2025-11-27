import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

interface Review {
  author: string;
  role: string;
  rating: number;
  comment: string;
  platform?: string;
}

const reviews: Review[] = [
  {
    author: 'Alex Gaming',
    role: 'Pro Player',
    rating: 5,
    comment: 'Farbound is absolutely incredible! The combat system is fluid, the world is massive, and the story keeps me hooked. Best game I\'ve played this year!',
    platform: 'Steam'
  },
  {
    author: 'Sarah Streamer',
    role: 'Content Creator',
    rating: 5,
    comment: 'The graphics are stunning and the multiplayer modes are so much fun. My viewers love watching me play this game. Highly recommend!',
    platform: 'Twitch'
  },
  {
    author: 'Mike Reviewer',
    role: 'Gaming Journalist',
    rating: 5,
    comment: 'A masterpiece of game design. The attention to detail, the character progression, and the open world exploration are all top-notch.',
    platform: 'IGN'
  },
  {
    author: 'Emma Player',
    role: 'Casual Gamer',
    rating: 5,
    comment: 'I\'m not usually into these types of games, but Farbound changed my mind. It\'s accessible yet deep, and the community is amazing!',
    platform: 'App Store'
  }
];

export const ReviewsSection: React.FC = () => {
  return (
    <Section id="reviews" background="dark">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
          What Players <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Say</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4 sm:px-0">
          Join thousands of satisfied players
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {reviews.map((review, index) => (
          <Card key={index} hover>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">{review.author}</h3>
                <p className="text-white/60 text-xs sm:text-sm">{review.role}</p>
              </div>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/80 mb-2 sm:mb-3 break-words">{review.comment}</p>
            {review.platform && (
              <p className="text-orange-400 text-xs sm:text-sm">— {review.platform}</p>
            )}
          </Card>
        ))}
      </div>
      
      {/* Platform Ratings */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {[
          { platform: 'Steam', rating: '4.8/5', reviews: '50K+' },
          { platform: 'App Store', rating: '4.9/5', reviews: '100K+' },
          { platform: 'Google Play', rating: '4.7/5', reviews: '80K+' },
          { platform: 'Metacritic', rating: '92/100', reviews: 'Critics' }
        ].map((platform, index) => (
          <Card key={index} className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-white mb-1">{platform.rating}</div>
            <div className="text-white/60 text-xs sm:text-sm mb-1 sm:mb-2">{platform.platform}</div>
            <div className="text-orange-400 text-[10px] sm:text-xs">{platform.reviews} reviews</div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

