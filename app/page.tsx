import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { CharactersSection } from './components/sections/CharactersSection';
import { GallerySection } from './components/sections/GallerySection';
import { GameModesSection } from './components/sections/GameModesSection';
import { SystemRequirementsSection } from './components/sections/SystemRequirementsSection';
import { CommunitySection } from './components/sections/CommunitySection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { PricingSection } from './components/sections/PricingSection';
import { FAQSection } from './components/sections/FAQSection';
import { NewsletterSection } from './components/sections/NewsletterSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CharactersSection />
      <GallerySection />
      <GameModesSection />
      <SystemRequirementsSection />
      <CommunitySection />
      <ReviewsSection />
      <RoadmapSection />
      <PricingSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
